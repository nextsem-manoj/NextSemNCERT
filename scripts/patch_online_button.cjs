const fs = require('fs');

const filePath = 'src/components/BookChaptersView.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Target the 3 action buttons section
const oldBlock = `                    <a
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
                    </a>`;

const newBlock = `                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenPdfReader) onOpenPdfReader(ch);
                      }}
                      className="btn btn-outline"
                      title="Read Chapter Online (In-App)"
                      style={{
                        padding: '8px 8px',
                        fontSize: '0.78rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        cursor: 'pointer'
                      }}
                    >
                      <Eye size={14} /> <span>Online</span>
                    </button>`;

if (content.includes(oldBlock)) {
  content = content.replace(oldBlock, newBlock);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated [Online] button in BookChaptersView.tsx');
} else {
  console.error('Could not find oldBlock in BookChaptersView.tsx');
  process.exit(1);
}

