// compress-images.mjs
// Batch compresses all jpg/jpeg/png images in src/assets to webp
// Run: node compress-images.mjs  (from project root e:\FAISAL)

import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs';

const QUALITY = 80;
const MAX_WIDTH = 1920;

async function compressImage(filePath) {
  const outPath = filePath.replace(/\.(jpe?g|png|JPG|JPEG|PNG)$/, '.webp');

  if (fs.existsSync(outPath)) {
    const srcStat = fs.statSync(filePath);
    const outStat = fs.statSync(outPath);
    if (outStat.mtimeMs > srcStat.mtimeMs) return null;
  }

  const originalSize = fs.statSync(filePath).size;

  try {
    await sharp(filePath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);

    const newSize = fs.statSync(outPath).size;
    const saved = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    return { filePath, outPath, originalSize, newSize, saved };
  } catch (err) {
    console.error(`Failed: ${filePath}`, err.message);
    return null;
  }
}

const files = await glob('src/assets/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  ignore: ['**/node_modules/**']
});

console.log(`Found ${files.length} images to process...\n`);
let totalSaved = 0;
let processed = 0;

for (const file of files) {
  const result = await compressImage(file);
  if (result) {
    const savedMB = ((result.originalSize - result.newSize) / 1024 / 1024).toFixed(2);
    totalSaved += (result.originalSize - result.newSize);
    processed++;
    console.log(`✓ ${path.basename(result.filePath)} → ${path.basename(result.outPath)} (saved ${result.saved}% / ${savedMB}MB)`);
  }
}

console.log(`\nDone! Compressed ${processed} files.`);
console.log(`Total saved: ${(totalSaved / 1024 / 1024).toFixed(1)}MB`);
