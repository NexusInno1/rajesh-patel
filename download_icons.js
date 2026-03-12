import fs from 'fs';
import https from 'https';
import path from 'path';

const urls = [
  { name: 'python', domain: 'python.org' },
  { name: 'pandas', domain: 'pandas.pydata.org' },
  { name: 'tensorflow', domain: 'tensorflow.org' },
  { name: 'scikitlearn', domain: 'scikit-learn.org' },
  { name: 'sql', domain: 'postgresql.org' },
  { name: 'powerbi', domain: 'powerbi.microsoft.com' },
  { name: 'jupyter', domain: 'jupyter.org' },
  { name: 'aws', domain: 'aws.amazon.com' }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        if(response.statusCode === 301 || response.statusCode === 302) {
             https.get(response.headers.location, (res2) => {
                 res2.pipe(file);
                 file.on('finish', () => resolve());
             });
        } else {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

(async () => {
    for(let item of urls) {
        let url = `https://www.google.com/s2/favicons?domain=${item.domain}&sz=256`;
        let dest = path.join(process.cwd(), 'public', 'images', `ds_${item.name}.png`);
        console.log('Downloading', item.name);
        await download(url, dest);
    }
    console.log('Done!');
})();
