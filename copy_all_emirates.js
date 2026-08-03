const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\abhis\\.gemini\\antigravity-ide\\brain\\5b9dcb2e-0ac4-459d-90dc-0fadba3ddd3e';
const destDir = path.join(__dirname, 'public', 'emirates');

const copies = [
  { src: 'dubai_burj_khalifa_1785476821844.png', dest: 'dubai.jpg' },
  { src: 'abu_dhabi_grand_mosque_1785476830966.png', dest: 'abu_dhabi.jpg' },
  { src: 'ajman_beach_1785476839526.png', dest: 'ajman.jpg' },
  { src: 'ras_al_khaimah_jebel_jais_1785476855317.png', dest: 'ras_al_khaimah.jpg' },
  { src: 'fujairah_coast_1785476865697.png', dest: 'fujairah.jpg' },
  { src: 'umm_al_quwain_coast_1785476875926.png', dest: 'umm_al_quwain.jpg' },
  { src: 'al_ain_jebel_hafeet_1785476889898.png', dest: 'al_ain.jpg' },
];

for (const item of copies) {
  const srcPath = path.join(brainDir, item.src);
  const destPath = path.join(destDir, item.dest);
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied ${item.src} -> ${item.dest}`);
}

console.log('\nAll 7 remaining UAE landmark images updated successfully!');
console.log('(sharjah.jpg was already updated previously)');
