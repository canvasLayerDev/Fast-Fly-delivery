const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'industries');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const images = [
  { name: 'restaurants.jpg', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=80' },
  { name: 'cafes.jpg', url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&auto=format&fit=crop&q=80' },
  { name: 'cloud_kitchens.jpg', url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&auto=format&fit=crop&q=80' },
  { name: 'grocery_stores.jpg', url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=80' },
  { name: 'supermarkets.jpg', url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&auto=format&fit=crop&q=80' },
  { name: 'retail.jpg', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&auto=format&fit=crop&q=80' },
  { name: 'ecommerce.jpg', url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&auto=format&fit=crop&q=80' },
  { name: 'pharmacies.jpg', url: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&auto=format&fit=crop&q=80' },
  { name: 'food_delivery.jpg', url: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&auto=format&fit=crop&q=80' },
  { name: 'logistics.jpg', url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&auto=format&fit=crop&q=80' },
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
  console.log('Downloading industry images...');
  for (const img of images) {
    const dest = path.join(dir, img.name);
    console.log(`Downloading ${img.name}...`);
    await download(img.url, dest);
  }
  console.log('All industry images downloaded successfully!');
}

main().catch(console.error);
