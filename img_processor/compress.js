const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'public', 'images');
const targetFiles = ['Maxlife.png', 'Solidx.png', 'bond.png', 'radix.png', 'sapphire.png'];

(async () => {
    for (const file of targetFiles) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(inputDir, file.replace('.png', '.webp'));

        try {
            await sharp(inputPath)
                .webp({ quality: 75 }) // Compress to quality 75 WebP
                .toFile(outputPath);
            console.log(`Successfully compressed ${file} to WebP!`);
        } catch (err) {
            console.error(`Error compressing ${file}:`, err);
        }
    }
    console.log('All images optimized!');
})();
