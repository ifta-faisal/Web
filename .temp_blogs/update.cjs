const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const blogDir = 'E:\\FAISAL\\src\\assets\\images\\Blog';
const outputFile = 'E:\\FAISAL\\src\\data\\blogData.ts';

// Helper for natural sort
function naturalSort(a, b) {
    return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});
}

// Function to extract text from a specific element pattern
function extractMeta(html, label) {
    const regex = new RegExp(`<strong>${label}:?\\s*<\\/strong>(.*?)<\\/p>`, 'i');
    const match = html.match(regex);
    if (match) {
        return match[1].replace(/<[^>]+>/g, '').trim();
    }
    return '';
}

async function processBlogs() {
    const folders = fs.readdirSync(blogDir).filter(f => f.startsWith('blog-')).sort(naturalSort);
    let allImports = `// Imports auto-generated from docs\n`;
    let postsRaw = [];
    let blogId = 1;

    for (const folder of folders) {
        const folderPath = path.join(blogDir, folder);
        const files = fs.readdirSync(folderPath);
        const docx = files.find(f => f.endsWith('.docx'));
        const imagesDirName = files.find(f => f.startsWith('blogimages'));
        
        let images = [];
        if (imagesDirName) {
            const imagesDir = path.join(folderPath, imagesDirName);
            images = fs.readdirSync(imagesDir).sort(naturalSort);
        }

        if (docx) {
            const docPath = path.join(folderPath, docx);
            let imageIndex = 0;
            
            let blogImports = `\n// ─── Blog ${blogId} Imports ───\n`;
            images.forEach((img, idx) => {
                const varName = `blog${blogId}_img${idx}`;
                const relPath = `../assets/images/Blog/${folder}/${imagesDirName}/${img}`;
                blogImports += `import ${varName} from '${relPath}';\n`;
            });
            allImports += blogImports;

            const options = {
                convertImage: mammoth.images.inline(element => {
                    return element.read("base64").then(() => {
                        let src = `\${blog${blogId}_img${imageIndex}}`;
                        imageIndex++;
                        return {src: src};
                    });
                })
            };

            try {
                const result = await mammoth.convertToHtml({path: docPath}, options);
                let html = result.value;

                let title = "";
                const titleMatch = html.match(/<strong>(.*?)<\/strong>/);
                if (titleMatch) title = titleMatch[1].replace(/<[^>]+>/g, '').trim();

                let category = extractMeta(html, 'Category');
                let authorFull = extractMeta(html, 'Author');
                let dateStr = extractMeta(html, 'Date');
                let readTime = extractMeta(html, 'Reading Time');

                html = html.replace(/<p><strong>Category:.*?<\/p>/i, '');
                html = html.replace(/<p><strong>Author:.*?<\/p>/i, '');
                html = html.replace(/<p><strong>Date:.*?<\/p>/i, '');
                html = html.replace(/<p><strong>Systems Integration.*?<\/p>/i, '');
                html = html.replace(/<p><strong>.*?<\/strong><\/p>/, '');

                let excerpt = "";
                const excerptMatch = html.match(/<p><em>(.*?)<\/em><\/p>/);
                if (excerptMatch) {
                    excerpt = excerptMatch[1].replace(/<[^>]+>/g, '').trim();
                    html = html.replace(excerptMatch[0], '');
                }

                html = html.replace(/<img src="([^"]+)" \/>/g, '<img src="$1" alt="Blog Image" class="blog-section-img" />');

                if (dateStr.includes("Reading Time")) {
                    const parts = dateStr.split("Reading Time");
                    dateStr = parts[0].replace(/<strong>|<\/strong>|:/g, '').trim();
                    readTime = parts[1].replace(/<strong>|<\/strong>|:/g, '').trim();
                }

                let postStr = `  {
    id: ${blogId},
    title: ${JSON.stringify(title)},
    excerpt: ${JSON.stringify(excerpt)},
    content: \`\n${html}\n\`,
    author: ${JSON.stringify(authorFull)},
    role: "Research Member, UIU Aerial Robotics Team",
    authorImg: "",
    date: ${JSON.stringify(dateStr)},
    readTime: ${JSON.stringify(readTime)},
    category: ${JSON.stringify(category)},
    image: blog${blogId}_img0,
  }`;
                postsRaw.push(postStr);
                blogId++;
            } catch (err) {
                console.error(`Error on ${docx}:`, err);
            }
        }
    }

    const finalFileContent = `${allImports}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  role: string;
  authorImg: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const postsRaw: BlogPost[] = [
${postsRaw.join(',\n')}
];

export const posts: BlogPost[] = [...postsRaw].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
`;

    fs.writeFileSync(outputFile, finalFileContent, 'utf-8');
    console.log("blogData.ts generated successfully.");
}

processBlogs();
