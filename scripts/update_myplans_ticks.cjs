const fs = require('fs');
const filePath = 'docs/myplans.md';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /39: !\[tino m se kisi bhi link pe click krne se kaam hona chanhiye.*?\(image-15\.png\)/s,
  (m) => m + ' ✅'
);

content = content.replace(
  /!\[ye bhi thik karo\]\(image-16\.png\) mtkb phone pe user ko jyad ascroll na karn apade easy banao taki user har baar hamara app use karin books reda download krne k liye/,
  (m) => m + ' ✅'
);

content = content.replace(
  /!\[image pe click krne se bhi wo subject open ho jaye \]\(image-17\.png\)/,
  (m) => m + ' ✅'
);

content = content.replace(
  /!\[ye thoda confusing lag ra hai mtlb ek baad subject select kar liya to uske lessons dikhne chahiye clearly\]\(image-18\.png\)/,
  (m) => m + ' ✅'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated docs/myplans.md');

