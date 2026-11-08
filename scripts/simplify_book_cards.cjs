const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/SubjectList.tsx');
let code = fs.readFileSync(filePath, 'utf8');

// Target the description rendering in the cards view (Line ~874)
const targetBlock = `{/* Subject Description */}
                  <p style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    margin: '0 0 12px',
                    lineHeight: 1.4,
                    maxWidth: '240px'
                  }}>
                    {subject.description}
                  </p>`;

// Replacement: Just a crisp, professional "NEP New" badge if it's NEP 2026 / rationalized edition
const replacementBlock = `{/* NEP Policy Badge (Clean & Minimal per User Request L26) */}
                  <div style={{ margin: '0 0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      color: '#059669',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981' }} />
                      NEW NCERT (NEP)
                    </span>
                  </div>`;

if (code.includes(targetBlock)) {
  code = code.replace(targetBlock, replacementBlock);
  fs.writeFileSync(filePath, code, 'utf8');
  console.log('Successfully replaced long description with NEW NCERT (NEP) badge in SubjectList.tsx');
} else {
  console.log('Target block not found directly, checking partial matches...');
}

