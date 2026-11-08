const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/BookChaptersView.tsx');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Detect whether the current book belongs to Primary stage (Class 1 to 5) or Higher stage (Class 6 to 12)
const oldDetection = `const isClass1 = ch.id.startsWith('c1-') || ch.officialBookCode === 'aemr1' || ch.officialBookCode === 'aejm1' || ch.officialBookCode === 'ahsr1' || titleUpper.includes('CLASS 1') || titleUpper.includes('CLASS I') || titleUpper.includes('MRIDANG') || titleUpper.includes('SARANGI') || titleUpper.includes('JOYFUL');`;

const newDetection = `// Stage & Class Detection for Action Deck (Class 1 to 5: Worksheet, Class 6 to 12: Sample Paper)
          const isPrimaryStage = 
            ch.id.startsWith('c1-') || ch.id.startsWith('c2-') || ch.id.startsWith('c3-') || ch.id.startsWith('c4-') || ch.id.startsWith('c5-') ||
            titleUpper.includes('(I)') || titleUpper.includes('(II)') || titleUpper.includes('(III)') || titleUpper.includes('(IV)') || titleUpper.includes('(V)') ||
            titleUpper.includes('CLASS 1') || titleUpper.includes('CLASS 2') || titleUpper.includes('CLASS 3') || titleUpper.includes('CLASS 4') || titleUpper.includes('CLASS 5') ||
            titleUpper.includes('MRIDANG') || titleUpper.includes('SARANGI') || titleUpper.includes('JOYFUL') || titleUpper.includes('SANTOOR') || titleUpper.includes('VEENA') || titleUpper.includes('MATHS MELA') || titleUpper.includes('WONDROUS');

          const thirdActionLabel = isPrimaryStage ? 'Worksheet' : 'Sample Paper';
          const thirdActionTitle = isPrimaryStage ? 'Open Practice Worksheet & Exercises' : 'Open Sample Paper & Model Questions';`;

code = code.replace(oldDetection, newDetection);

// 2. Unify the button layout across all chapters: 
// [ Saved / Download ] | [ Online (View) ] | [ Worksheet (Class 1-5) or Sample Paper (Class 6-12) ]
// Replace the entire if/else branch with a single consistent responsive 3-button deck:
const oldRenderBranch = `{isClass1 ? (
                /* Class 1 Specialized Layout: Unit Name, Animated Bookmark & 3 Action Buttons */
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
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
                    </span>
                    {onToggleBookmarkChapter && (
                      <button
                        onClick={() => onToggleBookmarkChapter(ch)}
                        className="animated-bookmark-btn"
                        style={{
                          background: isBookmarked ? 'rgba(79, 70, 229, 0.18)' : 'rgba(255, 255, 255, 0.05)',
                          border: isBookmarked ? '1.5px solid #4f46e5' : '1px solid var(--border-color)',
                          cursor: 'pointer',
                          padding: '8px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                        title={isBookmarked ? "Remove Bookmark" : "Bookmark Unit"}
                      >
                        <Bookmark
                          size={19}
                          style={{
                            color: isBookmarked ? '#4f46e5' : 'var(--text-muted)',
                            transition: 'transform 0.3s ease, color 0.3s ease',
                            animation: isBookmarked ? 'bookmarkPop 0.4s ease' : 'none'
                          }}
                          fill={isBookmarked ? '#4f46e5' : 'none'}
                        />
                      </button>
                    )}
                  </div>

                  {/* 3 Action Buttons below: Download, Online, and Worksheet */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    {downloadedIds.includes(ch.id) ? (
                      <button
                        onClick={() => {
                          if (onOpenPdfReader) onOpenPdfReader(ch);
                        }}
                        className="btn btn-primary"
                        title="Downloaded for Offline Viewing"
                        style={{ padding: '8px 8px', fontSize: '0.78rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
                      >
                        <HardDriveDownload size={14} /> <span>Saved</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDownloadOffline(ch)}
                        disabled={downloadingId === ch.id}
                        className="btn"
                        style={{
                          background: 'rgba(79, 70, 229, 0.12)',
                          border: '1px solid rgba(79, 70, 229, 0.4)',
                          color: '#4f46e5',
                          padding: '8px 8px',
                          fontWeight: 800,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          opacity: downloadingId === ch.id ? 0.7 : 1
                        }}
                      >
                        <Download size={14} /> <span>{downloadingId === ch.id ? '...' : 'Download'}</span>
                      </button>
                    )}

                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{
                        padding: '8px 8px',
                        fontSize: '0.78rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px'
                      }}
                    >
                      <Eye size={14} /> <span>Online</span>
                    </a>

                    <button
                      onClick={() => {
                        if (onOpenPdfReader) onOpenPdfReader(ch);
                      }}
                      className="btn"
                      style={{
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
                        border: '1px solid #10b981',
                        color: '#10b981',
                        padding: '8px 8px',
                        fontWeight: 800,
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        borderRadius: '8px'
                      }}
                      title="Open Practice Worksheet & Exercises"
                    >
                      <FileText size={14} /> <span>Worksheet</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Standard layout for other classes */
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-primary)', letterSpacing: '0.03em', textTransform: 'uppercase' }}>अध्याय {ch.chapterNumber}</span>
                      <span>{ch.title.replace(/^अध्याय\\s*\\d+[:\\s]+/, '').replace(/^Chapter\\s*\\d+[:\\s]+/i, '')}</span>
                    </span>
                    {onToggleBookmarkChapter && (
                      <button
                        onClick={() => onToggleBookmarkChapter(ch)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}
                        title={isBookmarked ? "Remove Bookmark" : "Bookmark Chapter"}
                      >
                        <Bookmark size={18} style={{ color: isBookmarked ? '#4f46e5' : 'var(--text-muted)' }} fill={isBookmarked ? '#4f46e5' : 'none'} />
                      </button>
                    )}
                  </div>

                  {/* Action Buttons: 1. Download from Google Drive, 2. Google Drive Cloud Link, 3. Online */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    {downloadedIds.includes(ch.id) ? (
                      <button
                        onClick={() => {
                          if (onOpenPdfReader) {
                            onOpenPdfReader(ch);
                          }
                        }}
                        className="btn btn-primary"
                        title="Downloaded for Offline Viewing"
                        style={{
                          padding: '8px 10px',
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px'
                        }}
                      >
                        <HardDriveDownload size={14} /> <span>Saved</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDownloadOffline(ch)}
                        disabled={downloadingId === ch.id}
                        className="btn"
                        style={{
                          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.18) 0%, rgba(16, 185, 129, 0.08) 100%)',
                          border: '1.5px solid #14b8a6',
                          color: '#14b8a6',
                          padding: '8px 10px',
                          fontWeight: 800,
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          opacity: downloadingId === ch.id ? 0.7 : 1
                        }}
                        title="Download Chapter PDF from Google Drive (newncert.nextsem@gmail.com)"
                      >
                        <Download size={14} /> <span>{downloadingId === ch.id ? 'Saving...' : 'Drive PDF'}</span>
                      </button>
                    )}

                    <a
                      href={ch.googleDriveFileId ? \`https://drive.google.com/file/d/\${ch.googleDriveFileId}/view\` : SHARED_NCERT_DRIVE_FOLDER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-main, var(--text-primary))',
                        padding: '8px 10px',
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        textDecoration: 'none'
                      }}
                      title="Direct Google Drive Folder Access (newncert.nextsem@gmail.com)"
                    >
                      <FolderOpen size={14} style={{ color: '#14b8a6' }} /> <span>Drive</span>
                    </a>

                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{
                        padding: '8px 10px',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px'
                      }}
                      title="Read on official NCERT CDN"
                    >
                      <Eye size={14} /> <span>Online</span>
                    </a>
                  </div>
                </div>
              )}`;

const unifiedDeck = `<div>
                  <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
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
                    </span>
                    {onToggleBookmarkChapter && (
                      <button
                        onClick={() => onToggleBookmarkChapter(ch)}
                        className="animated-bookmark-btn"
                        style={{
                          background: isBookmarked ? 'rgba(79, 70, 229, 0.18)' : 'rgba(255, 255, 255, 0.05)',
                          border: isBookmarked ? '1.5px solid #4f46e5' : '1px solid var(--border-color)',
                          cursor: 'pointer',
                          padding: '8px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                        title={isBookmarked ? "Remove Bookmark" : "Bookmark Unit"}
                      >
                        <Bookmark
                          size={19}
                          style={{
                            color: isBookmarked ? '#4f46e5' : 'var(--text-muted)',
                            transition: 'transform 0.3s ease, color 0.3s ease',
                            animation: isBookmarked ? 'bookmarkPop 0.4s ease' : 'none'
                          }}
                          fill={isBookmarked ? '#4f46e5' : 'none'}
                        />
                      </button>
                    )}
                  </div>

                  {/* 3 Action Buttons below: [Saved/Download], [Online/View], and [Worksheet (1-5) / Sample Paper (6-12)] */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    {downloadedIds.includes(ch.id) ? (
                      <button
                        onClick={() => {
                          if (onOpenPdfReader) onOpenPdfReader(ch);
                        }}
                        className="btn btn-primary"
                        title="Downloaded for Offline Viewing"
                        style={{ padding: '8px 8px', fontSize: '0.78rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
                      >
                        <HardDriveDownload size={14} /> <span>Saved</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDownloadOffline(ch)}
                        disabled={downloadingId === ch.id}
                        className="btn"
                        style={{
                          background: 'rgba(79, 70, 229, 0.12)',
                          border: '1px solid rgba(79, 70, 229, 0.4)',
                          color: '#4f46e5',
                          padding: '8px 8px',
                          fontWeight: 800,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          opacity: downloadingId === ch.id ? 0.7 : 1
                        }}
                      >
                        <Download size={14} /> <span>{downloadingId === ch.id ? '...' : 'Download'}</span>
                      </button>
                    )}

                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{
                        padding: '8px 8px',
                        fontSize: '0.78rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px'
                      }}
                    >
                      <Eye size={14} /> <span>Online</span>
                    </a>

                    <button
                      onClick={() => {
                        if (onOpenPdfReader) onOpenPdfReader(ch);
                      }}
                      className="btn"
                      style={{
                        background: isPrimaryStage 
                          ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)'
                          : 'linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(217, 119, 6, 0.1) 100%)',
                        border: isPrimaryStage ? '1px solid #10b981' : '1px solid #f59e0b',
                        color: isPrimaryStage ? '#10b981' : '#f59e0b',
                        padding: '8px 8px',
                        fontWeight: 800,
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        borderRadius: '8px'
                      }}
                      title={thirdActionTitle}
                    >
                      <FileText size={14} /> <span>{thirdActionLabel}</span>
                    </button>
                  </div>
                </div>`;

code = code.replace(oldRenderBranch, unifiedDeck);
fs.writeFileSync(filePath, code, 'utf8');
console.log('BookChaptersView successfully updated with 3-action buttons (Worksheet for 1-5, Sample Paper for 6-12)');

