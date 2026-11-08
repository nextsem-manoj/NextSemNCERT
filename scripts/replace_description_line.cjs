const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/SubjectList.tsx');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// Find line containing "{subject.description}"
let targetLineIndex = -1;
for (let i = 850; i < lines.length; i++) {
  if (lines[i].includes('{subject.description}')) {
    targetLineIndex = i;
    break;
  }
}

if (targetLineIndex !== -1) {
  // Find opening <p and closing </p>
  let pStartIndex = targetLineIndex;
  while (pStartIndex > 0 && !lines[pStartIndex].includes('<p')) {
    pStartIndex--;
  }
  let pEndIndex = targetLineIndex;
  while (pEndIndex < lines.length && !lines[pEndIndex].includes('</p>')) {
    pEndIndex++;
  }

  const replacementLines = [
    `                  {/* Clean NEP Policy Indicator */}`,
    `                  <div style={{ margin: '0 0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>`,
    `                    <span style={{`,
    `                      fontSize: '0.68rem',`,
    `                      fontWeight: 800,`,
    `                      color: '#059669',`,
    `                      background: 'rgba(16, 185, 129, 0.12)',`,
    `                      border: '1px solid rgba(16, 185, 129, 0.35)',`,
    `                      padding: '2px 8px',`,
    `                      borderRadius: '6px',`,
    `                      textTransform: 'uppercase',`,
    `                      letterSpacing: '0.04em',`,
    `                      display: 'inline-flex',`,
    `                      alignItems: 'center',`,
    `                      gap: '4px'`,
    `                    }}>`,
    `                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981' }} />`,
    `                      NEW NCERT (NEP)`,
    `                    </span>`,
    `                  </div>`
  ];

  lines.splice(pStartIndex, pEndIndex - pStartIndex + 1, ...replacementLines);
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log('Successfully replaced long description in SubjectList.tsx');
}

