const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/BookChaptersView.tsx');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Detect if primary (Class 1 to 5)
const primaryDetectionInsert = `
  const isPrimaryKidMode = (() => {
    const t = (bookTitle || '').toUpperCase();
    return chapters.some(c => c.id.startsWith('c1-') || c.id.startsWith('c2-') || c.id.startsWith('c3-') || c.id.startsWith('c4-') || c.id.startsWith('c5-')) ||
      t.includes('(I)') || t.includes('(II)') || t.includes('(III)') || t.includes('(IV)') || t.includes('(V)') ||
      t.includes('CLASS 1') || t.includes('CLASS 2') || t.includes('CLASS 3') || t.includes('CLASS 4') || t.includes('CLASS 5') ||
      t.includes('MRIDANG') || t.includes('SARANGI') || t.includes('JOYFUL') || t.includes('SANTOOR') || t.includes('VEENA') || t.includes('MATHS MELA') || t.includes('WONDROUS');
  })();
`;

if (!code.includes('isPrimaryKidMode')) {
  code = code.replace('const coverUrl =', primaryDetectionInsert + '\n  const coverUrl =');
}

// 2. Remove the "Drive Artwork & Covers" tab buttons & its entire render block
// From: {/* Tab Switcher: Chapter PDFs vs Cover Artwork */} to start of chapters map
const tabStart = code.indexOf('{/* Tab Switcher: Chapter PDFs vs Cover Artwork */}');
const artworkBlockEnd = code.indexOf('/* Chapters Rows List */');

if (tabStart !== -1 && artworkBlockEnd !== -1) {
  // Find where the artwork ternary begins and ends
  // {activeTab === 'artwork' ? ( ... ) : ( ... )}
  const cutStart = tabStart;
  const cutEnd = code.indexOf('{chapters.map((ch) => {', artworkBlockEnd);
  
  const replacement = `
      {/* Kid Friendly Mascot Greeting for Class 1 to 5 (Dudu & Bubu per L34) */}
      {isPrimaryKidMode && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.18) 0%, rgba(253, 230, 138, 0.08) 100%)',
          border: '1.5px solid rgba(245, 158, 11, 0.35)',
          borderRadius: '18px',
          padding: '12px 16px',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          boxShadow: '0 4px 16px rgba(245, 158, 11, 0.12)'
        }}>
          <img
            src="/dudu-bubu-pair.png"
            alt="Dudu Bubu Study Buddies"
            style={{
              width: '56px',
              height: '46px',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))'
            }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.92rem', fontWeight: 900, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Hello Little Scholar! 🌟</span>
              <span style={{ fontSize: '0.72rem', background: '#10b981', color: '#fff', padding: '1px 6px', borderRadius: '6px', fontWeight: 800 }}>Fun Learning</span>
            </div>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '2px' }}>
              Dudu &amp; Bubu are ready to read rhymes, solve fun puzzles, and do worksheets together!
            </div>
          </div>
          <img
            src="/dudu-bubu-heart.png"
            alt="Cute Dudu Bubu"
            style={{
              width: '42px',
              height: '36px',
              objectFit: 'contain',
              flexShrink: 0
            }}
          />
        </div>
      )}

      {/* Chapters Rows List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: isPrimaryKidMode ? '16px' : '12px', marginBottom: '2rem' }}>
        `;

  code = code.slice(0, cutStart) + replacement + code.slice(cutEnd);
  console.log('Removed Drive Artwork tab & added Kid Friendly Dudu Bubu mascot greeting banner');
}

// 3. Close the remaining closing brackets if needed (from ternary removal)
// The original code had:
// {activeTab === 'artwork' ? ( ... ) : ( ... )}
// </div>
// )}
// </div>
// Since we removed activeTab === 'artwork' ? ... : ..., we need to check the bottom closing tags.
// Let's verify closing tag structure around line 3400.
const bottomClosingOld = `            </div>
          );
        })}
      </div>
      )}

    </div>
  );
};`;

const bottomClosingNew = `            </div>
          );
        })}
      </div>

    </div>
  );
};`;

if (code.includes(bottomClosingOld)) {
  code = code.replace(bottomClosingOld, bottomClosingNew);
  console.log('Fixed bottom closing tags after removing activeTab ternary');
}

// 4. Update kid-friendly chapter cards for Class 1 to 5 (Bigger fonts, big badges, Dudu Bubu companion icon)
const oldCardHeader = `<div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, minWidth: 0 }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: 'var(--accent-primary, #4f46e5)',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        background: 'rgba(79, 70, 229, 0.1)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        display: 'inline-block',
                        width: 'fit-content'
                      }}>
                        {unitBadgeText}
                      </span>
                      <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', wordBreak: 'break-word' }}>
                        {displayTitleText}
                      </span>
                    </span>`;

const kidCardHeader = `<div style={{ fontWeight: 800, fontSize: isPrimaryKidMode ? '1.14rem' : '0.98rem', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: isPrimaryKidMode ? '6px' : '4px', flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {isPrimaryKidMode && (
                          <img
                            src="/dudu-bubu-reading.png"
                            alt="Reading Buddy"
                            style={{ width: '22px', height: '16px', objectFit: 'contain' }}
                          />
                        )}
                        <span style={{
                          fontSize: isPrimaryKidMode ? '0.78rem' : '0.72rem',
                          fontWeight: 900,
                          color: isPrimaryKidMode ? '#d97706' : 'var(--accent-primary, #4f46e5)',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          background: isPrimaryKidMode ? 'rgba(245, 158, 11, 0.15)' : 'rgba(79, 70, 229, 0.1)',
                          border: isPrimaryKidMode ? '1px solid rgba(245, 158, 11, 0.35)' : 'none',
                          padding: '3px 10px',
                          borderRadius: '8px',
                          display: 'inline-block',
                          width: 'fit-content'
                        }}>
                          {unitBadgeText}
                        </span>
                      </div>
                      <span style={{ fontSize: isPrimaryKidMode ? '1.14rem' : '1rem', fontWeight: 900, color: 'var(--text-primary)', wordBreak: 'break-word', letterSpacing: isPrimaryKidMode ? '-0.01em' : 'normal' }}>
                        {displayTitleText}
                      </span>
                    </span>`;

if (code.includes(oldCardHeader)) {
  code = code.replace(oldCardHeader, kidCardHeader);
  console.log('Applied kid-friendly big typography and reading buddy icons to chapter cards');
}

fs.writeFileSync(filePath, code, 'utf8');
console.log('BookChaptersView updated successfully for L34 and L38');

