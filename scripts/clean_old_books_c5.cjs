const fs = require('fs');
const path = require('path');

const c5Path = path.join(__dirname, '../src/data/class5Data.ts');
let c5 = fs.readFileSync(c5Path, 'utf8');

const marigoldIdx = c5.indexOf("id: 'c5-english',");
if (marigoldIdx !== -1) {
  const commentIdx = c5.lastIndexOf("// 4. English (Marigold Book 5)", marigoldIdx);
  const cutStart = commentIdx !== -1 ? commentIdx : c5.lastIndexOf('{', marigoldIdx);
  const lastBracket = c5.lastIndexOf(']');
  
  // Cut everything from cutStart to lastBracket, trimming trailing commas
  let cleanSubjects = c5.slice(0, cutStart).trim();
  if (cleanSubjects.endsWith(',')) {
    cleanSubjects = cleanSubjects.slice(0, -1);
  }
  c5 = cleanSubjects + '\n  ]\n};\n';
  fs.writeFileSync(c5Path, c5, 'utf8');
  console.log('Successfully removed old Marigold and Rimjhim from Class 5');
}

