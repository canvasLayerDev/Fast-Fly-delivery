const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\abhis\\.gemini\\antigravity-ide\\brain\\5b9dcb2e-0ac4-459d-90dc-0fadba3ddd3e\\sharjah_al_noor_waterfront_1785476529421.png';
const dest = path.join(__dirname, 'public', 'emirates', 'sharjah.jpg');

fs.copyFileSync(src, dest);
console.log('Successfully updated sharjah.jpg with generated Al Noor Waterfront image!');
