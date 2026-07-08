const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (let file of list) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      if (!file.includes('node_modules') && !file.includes('.git')) {
        results = results.concat(walk(file));
      }
    } else { 
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  }
  return results;
}

const files = walk('./src');
let hasMismatch = false;
const regex = /import.*?['"](\.[^'"]+)['"]/g;

for (let file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    const dir = path.dirname(file);
    const resolvedPath = path.resolve(dir, importPath);
    const dirPath = path.dirname(resolvedPath);
    const baseName = path.basename(resolvedPath);
    
    if (fs.existsSync(dirPath)) {
      const actualFiles = fs.readdirSync(dirPath);
      const actualFilesLower = actualFiles.map(f => f.toLowerCase());
      if (actualFilesLower.includes(baseName.toLowerCase()) && !actualFiles.includes(baseName)) {
         console.log('Mismatch in ' + file + ': expected ' + actualFiles.find(f => f.toLowerCase() === baseName.toLowerCase()) + ' but got ' + baseName);
         hasMismatch = true;
      }
    }
  }
}
if (!hasMismatch) console.log('No case mismatches found.');
