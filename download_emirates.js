const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'emirates');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const emirates = [
  { name: 'dubai.jpg', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=85' },
  { name: 'abu_dhabi.jpg', url: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&auto=format&fit=crop&q=85' },
  { name: 'sharjah.jpg', url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=85' },
  { name: 'ajman.jpg', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=85' },
  { name: 'ras_al_khaimah.jpg', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=85' },
  { name: 'fujairah.jpg', url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&auto=format&fit=crop&q=85' },
  { name: 'umm_al_quwain.jpg', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=85' },
  { name: 'al_ain.jpg', url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=85' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Downloading high-res local UAE landmark images...');
  for (const item of emirates) {
    const dest = path.join(dir, item.name);
    console.log(`Downloading ${item.name}...`);
    await download(item.url, dest);
  }
  console.log('All local UAE landmark images saved successfully!');
}

main().catch(console.error);
