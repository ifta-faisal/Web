const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const blogDir = 'E:\\FAISAL\\src\\assets\\images\\Blog';
const options = {
    ignoreEmptyParagraphs: false,
    transformDocument: mammoth.transforms.paragraph(paragraph => {
        return paragraph;
    })
};

// Custom image transform to ignore images
options.convertImage = mammoth.images.inline(element => {
    return element.read("base64").then(() => {
        return {src: ""};
    });
});

async function extract() {
    const folders = fs.readdirSync(blogDir).filter(f => f.startsWith('blog-'));
    for (const folder of folders) {
        const folderPath = path.join(blogDir, folder);
        const files = fs.readdirSync(folderPath);
        const docx = files.find(f => f.endsWith('.docx'));
        if (docx) {
            const docPath = path.join(folderPath, docx);
            console.log(`\n\n--- EXTRACTING ${docx} ---`);
            try {
                const result = await mammoth.convertToHtml({path: docPath}, {
                    transformDocument: mammoth.transforms.paragraph(paragraph => paragraph),
                    convertImage: mammoth.images.imgElement(function(image) {
                        return Promise.resolve({src: ""}); // returning empty src to effectively ignore
                    })
                });
                
                // Remove img tags if they end up being generated
                let html = result.value.replace(/<img[^>]*>/g, '');
                console.log(html);
            } catch (err) {
                console.error(`Error on ${docx}:`, err);
            }
        }
    }
}

extract();
