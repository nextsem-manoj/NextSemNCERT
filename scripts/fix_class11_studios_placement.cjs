const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/pages/Class11PageView.tsx');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Remove the standalone "⚡ Featured Class 11 Studios" box from top Hero
const startBox = code.indexOf('{/* Quick Direct Actions Box */}');
const endBox = code.indexOf('{/* Stream Tabs & Search Strip */}');

if (startBox !== -1 && endBox !== -1) {
  // Check closing of parent flex container
  // Before startBox there is a </div>\n\n          {/* Quick Direct Actions Box */}
  // After end of Quick Direct Actions Box there is </div>\n      </div>\n\n      {/* Stream Tabs & Search Strip */}
  const heroContentEnd = code.lastIndexOf('</div>', startBox);
  const heroWrapperEnd = code.indexOf('</div>\n      </div>\n\n      {/* Stream Tabs & Search Strip */}');
  
  if (heroWrapperEnd !== -1) {
    code = code.slice(0, startBox) + code.slice(heroWrapperEnd + 6);
    console.log('Removed top standalone Featured Studios box from Class11PageView');
  }
}

// 2. Put specific studio pills directly under their matching subject card
const subjectCardEndMarker = `                  <a
                    href={\`https://ncert.nic.in/textbook.php?\${bookCode.split(',')[0].trim()}=0-\${subj.totalChapters || 10}\`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '9px 12px',
                      borderRadius: '9px',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    title="Open on official NCERT CDN"
                  >
                    <ExternalLink size={14} />
                    <span>NCERT</span>
                  </a>
                </div>`;

const studioPillsBlock = `                  <a
                    href={\`https://ncert.nic.in/textbook.php?\${bookCode.split(',')[0].trim()}=0-\${subj.totalChapters || 10}\`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '9px 12px',
                      borderRadius: '9px',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    title="Open on official NCERT CDN"
                  >
                    <ExternalLink size={14} />
                    <span>NCERT</span>
                  </a>
                </div>

                {/* Subject-Specific Studio/Paper Link (Placed directly under its subject per L36) */}
                {subj.id.includes('accountancy') ? (
                  <div style={{ marginTop: '10px' }}>
                    <a
                      href="/ts-grewal-class11.html"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.16) 0%, rgba(29, 78, 216, 0.08) 100%)',
                        color: '#60a5fa',
                        border: '1px solid rgba(59, 130, 246, 0.35)',
                        textDecoration: 'none',
                        borderRadius: '9px',
                        fontSize: '0.78rem',
                        fontWeight: 800
                      }}
                    >
                      <span>📊 T.S. Grewal Accountancy Studio</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                ) : (subj.id.includes('economic') || subj.id.includes('stats')) ? (
                  <div style={{ marginTop: '10px' }}>
                    <a
                      href="/class11-economics-ch1-ch2-printable-question-paper.html"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(5, 150, 105, 0.08) 100%)',
                        color: '#34d399',
                        border: '1px solid rgba(16, 185, 129, 0.35)',
                        textDecoration: 'none',
                        borderRadius: '9px',
                        fontSize: '0.78rem',
                        fontWeight: 800
                      }}
                    >
                      <span>📝 Economics Exam Paper Suite</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                ) : subj.id.includes('math') ? (
                  <div style={{ marginTop: '10px' }}>
                    <a
                      href="/class11-maths-permutations-combinations-ch6-difficult-questions.html"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.14) 0%, rgba(217, 119, 6, 0.08) 100%)',
                        color: '#fbbf24',
                        border: '1px solid rgba(245, 158, 11, 0.35)',
                        textDecoration: 'none',
                        borderRadius: '9px',
                        fontSize: '0.78rem',
                        fontWeight: 800
                      }}
                    >
                      <span>📐 Permutations &amp; Combinations</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                ) : null}`;

if (code.includes(subjectCardEndMarker)) {
  code = code.replace(subjectCardEndMarker, studioPillsBlock);
  console.log('Placed specific studio buttons directly under Accountancy, Economics & Maths cards');
}

fs.writeFileSync(filePath, code, 'utf8');
console.log('Class11PageView updated successfully');

