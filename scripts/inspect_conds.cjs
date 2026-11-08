const fs = require('fs');
const content = fs.readFileSync('src/components/BookChaptersView.tsx', 'utf8');

// We want to check lines 650 to 2800 where condition blocks are defined
const matches = [];
const regex = /\{(\w+)\s*\?\s*\(/g;
let m;
while ((m = regex.exec(content)) !== null) {
  matches.push({ cond: m[1], index: m.index });
}
console.log('Conditions found:', matches.map(x => x.cond).slice(0, 30));

