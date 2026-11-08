const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/BookChaptersView.tsx');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Cut the entire switcher & artwork tab from:
// {/* View Switcher: Chapters vs Artwork & Covers */}
// all the way down to:
// {/* Chapters Rows List */}
const switcherStart = code.indexOf('{/* View Switcher: Chapters vs Artwork & Covers */}');
const chaptersStart = code.indexOf('{/* Chapters Rows List */}');

if (switcherStart !== -1 && chaptersStart !== -1) {
  // Check the cut
  code = code.slice(0, switcherStart) + code.slice(chaptersStart);
  console.log('Successfully cut View Switcher and Artwork block');
}

// 2. Also fix the trailing `)}` from the old ternary:
// Before the cut was: {activeTab === 'artwork' ? ( ... ) : ( ... )}
// Since we removed up to `{/* Chapters Rows List */}`, the chapters list was inside the `: (`.
// So at the end of chapters map there was an extra `)}`.
// Let's check lines near the end:
const oldBottom = `            </div>
          );
        })}
      </div>
      )}

    </div>
  );
};`;

const newBottom = `            </div>
          );
        })}
      </div>

    </div>
  );
};`;

if (code.includes(oldBottom)) {
  code = code.replace(oldBottom, newBottom);
  console.log('Cleaned trailing ternary closing tag at end of file');
}

// 3. Remove activeTab useState
code = code.replace("const [activeTab, setActiveTab] = useState<'chapters' | 'artwork'>('chapters');", "");

fs.writeFileSync(filePath, code, 'utf8');
console.log('Drive Artwork tab completely removed from BookChaptersView.tsx');

