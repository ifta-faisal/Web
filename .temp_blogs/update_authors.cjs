const fs = require('fs');
const path = require('path');

const blogDataPath = path.join(__dirname, '../src/data/blogData.ts');
let content = fs.readFileSync(blogDataPath, 'utf-8');

// Add imports for authors
if (!content.includes('israfil.webp')) {
  content = `import israfil from '../assets/images/Team/israfil.webp';\nimport alfi from '../assets/images/Team/alfi.webp';\nimport member4 from '../assets/images/Team/member4.webp';\n` + content;
}

const oldAuthorsBlock = `<h1><strong>About the Authors</strong></h1><p><strong>MD. Israfil Hossain</strong></p><p>Research Member, UIU Aerial Robotics Team</p><p><strong>Md. Biplob</strong></p><p>Research Member, UIU Aerial Robotics Team</p><p><strong>Ifta Faisal</strong></p><p>Research Member, UIU Aerial Robotics Team</p>`;

const newAuthorsBlock = `
<div class="mt-12 pt-8 border-t border-white/10">
  <h2 class="text-2xl font-bold text-white mb-6 uppercase tracking-wider" style="font-family: 'Bebas Neue', sans-serif">About the Authors</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="\${israfil}" alt="MD. Israfil Hossain" class="w-16 h-16 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-lg">MD. Israfil Hossain</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="\${alfi}" alt="Md. Biplob" class="w-16 h-16 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-lg">Md. Biplob</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
      <img src="\${member4}" alt="Ifta Faisal" class="w-16 h-16 rounded-full object-cover border-2 border-primary/50" />
      <div>
        <div class="font-bold text-white text-lg">Ifta Faisal</div>
        <div class="text-xs text-slate-400">Research Member, UIU Aerial Robotics Team</div>
      </div>
    </div>
  </div>
</div>
`.trim();

// Replace all occurrences of the old block with the new one
content = content.split(oldAuthorsBlock).join(newAuthorsBlock);

fs.writeFileSync(blogDataPath, content);
console.log('Successfully updated blogData.ts with author images!');
