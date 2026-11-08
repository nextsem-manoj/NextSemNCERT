const fs = require('fs');
const filePath = 'docs/myplans.md';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace('(image-15.png)', '(image-15.png) ✅');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated image-15 tick');

