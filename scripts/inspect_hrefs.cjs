const fs = require('fs');
const content = fs.readFileSync('src/components/BookChaptersView.tsx', 'utf8');
const lines = content.split('\n');
const links = [];
lines.forEach((l, i) => {
  if (l.includes('href="/') && !l.includes('http')) {
    const m = l.match(/href="([^"]+)"/);
    if (m) links.push({ line: i+1, href: m[1] });
  }
});
console.log('Total local href links:', links.length);
console.log(JSON.stringify(links.slice(0, 25), null, 2));

