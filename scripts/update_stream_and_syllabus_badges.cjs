const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/SubjectList.tsx');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Add StreamFilter type and Stream Classification Helper
const helperCode = `
type StreamFilter = 'all' | 'science' | 'commerce' | 'arts';

function getSubjectStream(subj: Subject): 'science' | 'commerce' | 'arts' {
  const clean = (subj.id + ' ' + subj.name).toLowerCase();
  if (clean.includes('account') || clean.includes('business') || clean.includes('b.st') || clean.includes('commerce')) {
    return 'commerce';
  }
  if (clean.includes('physics') || clean.includes('chem') || clean.includes('bio') || clean.includes('computer')) {
    return 'science';
  }
  if (clean.includes('math')) {
    return 'science'; // Shared with commerce
  }
  if (clean.includes('history') || clean.includes('pol') || clean.includes('geo') || clean.includes('sociology') || clean.includes('भूगोल') || clean.includes('राजनीति') || clean.includes('इतिहास')) {
    return 'arts';
  }
  if (clean.includes('economic') || clean.includes('stats')) {
    return 'commerce'; // Shared with arts
  }
  return 'arts';
}
`;

// Insert helper before SubjectList component
if (!code.includes('function getSubjectStream')) {
  code = code.replace('export const SubjectList: React.FC<SubjectListProps>', helperCode + '\nexport const SubjectList: React.FC<SubjectListProps>');
}

// 2. Add activeStream state inside component
const stateHook = `  const [activeStream, setActiveStream] = useState<StreamFilter>('all');`;
if (!code.includes('activeStream')) {
  code = code.replace(
    `const [viewMode, setViewMode] = useState<ViewMode>(() => {`,
    `${stateHook}\n  const [viewMode, setViewMode] = useState<ViewMode>(() => {`
  );
}

// 3. Define isSeniorSec & badge text
// Class 10, 11, 12: "NEW SYLLABUS (RATIONALIZED)"
// Class 1 to 9: "NEW NCERT (NEP)"
const badgeLogic = `
  const isSeniorOrBoard = selectedClassNum >= 10;
  const isStreamClass = selectedClassNum === 11 || selectedClassNum === 12;

  // Filter subjects by stream when Class 11 or 12
  const visibleSubjects = subjects.filter((subj) => {
    if (!isStreamClass || activeStream === 'all') return true;
    const stream = getSubjectStream(subj);
    if (stream === activeStream) return true;
    if (activeStream === 'commerce' && (subj.id.includes('math') || subj.id.includes('eco'))) return true;
    if (activeStream === 'arts' && subj.id.includes('eco')) return true;
    if (activeStream === 'science' && subj.id.includes('english')) return true;
    if (activeStream === 'commerce' && subj.id.includes('english')) return true;
    if (activeStream === 'arts' && subj.id.includes('english')) return true;
    return false;
  });
`;

if (!code.includes('const isSeniorOrBoard')) {
  code = code.replace(
    'return (',
    `${badgeLogic}\n  return (`
  );
}

// 4. Update the 3 views (list, tiles, large) to map over visibleSubjects instead of subjects
code = code.replace(/\{subjects\.map\(\(subject\)/g, '{visibleSubjects.map((subject)');

// 5. Replace the static "NEW NCERT (NEP)" badge with dynamic badge
const oldBadge = `<span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981' }} />
                      NEW NCERT (NEP)
                    </span>`;

const newBadge = `<span style={{ width: '5px', height: '5px', borderRadius: '50%', background: isSeniorOrBoard ? '#f59e0b' : '#10b981' }} />
                      {isSeniorOrBoard ? 'NEW SYLLABUS (RATIONALIZED)' : 'NEW NCERT (NEP)'}
                    </span>`;

code = code.replace(oldBadge, newBadge);

// 6. Add Stream Selector Tabs Bar right below the Top Header Bar if isStreamClass
const streamBarMarkup = `
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
        )}
`;

const headerCloseTag = '</div>\n        </div>\n\n        {/* 1. LIST VIEW';
if (code.includes(headerCloseTag) && !code.includes('Stream Filter Bar')) {
  code = code.replace(headerCloseTag, '</div>\n        </div>\n' + streamBarMarkup + '\n        {/* 1. LIST VIEW');
}

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully updated SubjectList.tsx with stream filter and new syllabus badge');

