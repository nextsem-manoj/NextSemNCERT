const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/BookChaptersView.tsx');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// Find line 395 (the switcher comment)
let startLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('View Switcher: Chapters vs Artwork & Covers')) {
    startLine = i;
    break;
  }
}

let endLine = -1;
for (let i = startLine; i < lines.length; i++) {
  if (lines[i].includes('/* Chapters Rows List */')) {
    endLine = i;
    break;
  }
}

console.log('startLine:', startLine, 'endLine:', endLine);

if (startLine !== -1 && endLine !== -1) {
  // Remove lines from startLine up to endLine (keeping endLine)
  lines.splice(startLine, endLine - startLine);
  console.log('Successfully spliced out the Artwork block');
}

// Also check and remove activeTab from useState
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("useState<'chapters' | 'artwork'>")) {
    lines.splice(i, 1);
    break;
  }
}

// Also check trailing )} before closing container
for (let i = lines.length - 1; i > lines.length - 20; i--) {
  if (lines[i].trim() === ')}' && lines[i - 1]?.includes('</div>')) {
    lines.splice(i, 1);
    console.log('Removed extra )} from line', i);
    break;
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('BookChaptersView successfully updated via line splicing');

