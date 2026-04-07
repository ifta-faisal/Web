const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components');

const regexes = [
    { search: /bg-\[#090d18\]/g, replace: 'bg-transparent' },
    { search: /bg-\[#0b0f1a\]/g, replace: 'bg-transparent' },
    { search: /bg-slate-900/g, replace: 'bg-transparent' },
    { search: /bg-slate-950/g, replace: 'bg-transparent' },
    { search: /bg-gray-900/g, replace: 'bg-transparent' },
    { search: /bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900/g, replace: 'bg-transparent' },
    { search: /bg-gradient-to-b from-gray-800 to-gray-900/g, replace: 'bg-transparent' },
    { search: /bg-gradient-to-b from-gray-900 to-gray-800/g, replace: 'bg-transparent' },
    { search: /radial-gradient\([^)]+,\s*#090d18\)/g, replace: 'transparent' },
    { search: /radial-gradient\([^)]+,\s*#0b0f1a\)/g, replace: 'transparent' },
    { search: /\.ju-page \{ background: #[0-9a-fA-F]+;/g, replace: '.ju-page { background: transparent;' },
    { search: /\.ju-(why|teams|apply) \{ background: #[0-9a-fA-F]+;/g, replace: '.ju-$1 { background: transparent;' } 
];

function processFiles(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processFiles(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            for (const rx of regexes) {
                content = content.replace(rx.search, rx.replace);
            }
            if (content !== original) {
                console.log('Updated', file);
                fs.writeFileSync(fullPath, content);
            }
        }
    }
}

processFiles(dir);
