const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/SubjectList.tsx');
let code = fs.readFileSync(filePath, 'utf8');

const targetStr = `            {/* Session Tag */}
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 9px',
              borderRadius: '9999px',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              color: '#818cf8',
              fontSize: '0.7rem',
              fontWeight: 900,
              letterSpacing: '0.03em'
            }}>
              <Sparkles size={11} style={{ color: '#818cf8' }} />
              2026–27
            </span>
          </div>
        </div>`;

const streamBar = `            {/* Session Tag */}
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 9px',
              borderRadius: '9999px',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              color: '#818cf8',
              fontSize: '0.7rem',
              fontWeight: 900,
              letterSpacing: '0.03em'
            }}>
              <Sparkles size={11} style={{ color: '#818cf8' }} />
              2026–27
            </span>
          </div>
        </div>

        {/* Stream Filter Bar (Science, Commerce, Arts for Class 11 & 12 per L32) */}
        {isStreamClass && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            overflowX: 'auto'
          }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginRight: '4px' }}>
              Streams:
            </span>
            {[
              { id: 'all', label: 'All Subjects' },
              { id: 'science', label: '🔬 Science' },
              { id: 'commerce', label: '📊 Commerce' },
              { id: 'arts', label: '🏛️ Arts / Humanities' }
            ].map(tab => {
              const isActive = activeStream === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveStream(tab.id as StreamFilter)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    border: isActive ? '1.5px solid #4f46e5' : '1px solid var(--border-color)',
                    background: isActive ? 'rgba(79, 70, 229, 0.15)' : 'var(--bg-card)',
                    color: isActive ? '#4f46e5' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}`;

if (code.includes(targetStr)) {
  code = code.replace(targetStr, streamBar);
  fs.writeFileSync(filePath, code, 'utf8');
  console.log('Stream bar successfully inserted into SubjectList.tsx');
} else {
  console.log('Target string for stream bar not found');
}

