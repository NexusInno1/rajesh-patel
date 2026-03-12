const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'public', 'images');
const outputDir = path.join(__dirname, '..', 'public', 'images');

const files = fs.readdirSync(inputDir).filter(f => f.startsWith('ds_') && f.endsWith('.png') && !f.includes('_white'));

(async () => {
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace('.png', '_white.png'));

        try {
            await sharp({
                create: {
                    width: 512,
                    height: 512,
                    channels: 4,
                    background: { r: 255, g: 255, b: 255, alpha: 1 }
                }
            })
            .composite([
                { input: inputPath, gravity: 'center' }
            ])
            .png()
            .toFile(outputPath);
            console.log(`Processed ${file}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
    console.log('All done!');
})();
