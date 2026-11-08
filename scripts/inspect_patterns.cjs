const fs = require('fs');

const content = fs.readFileSync('src/components/BookChaptersView.tsx', 'utf8');

// Search for patterns like `{(ch.id === ...` or `{(is... &&`
const lines = content.split('\n');
const conditions = [];

lines.forEach((line, index) => {
  if (line.trim().startsWith('{/*') && line.includes('*/}')) {
    // maybe a comment describing the section
  }
  const nextLine = lines[index + 1];
  if (line.includes('href="/') && !line.includes('http')) {
    // trace backwards up to 10 lines to find the enclosing if
    let cond = '';
    for (let j = index - 1; j >= Math.max(0, index - 8); j--) {
      if (lines[j].trim().startsWith('{(') || lines[j].includes('&& (') || lines[j].includes('? (')) {
        cond = lines[j].trim();
        break;
      }
    }
    const m = line.match(/href="([^"]+)"/);
    if (m) {
      conditions.push({ line: index + 1, url: m[1], cond });
    }
  }
});

console.log('Found', conditions.length, 'url conditions');
console.log(JSON.stringify(conditions.slice(0, 15), null, 2));

