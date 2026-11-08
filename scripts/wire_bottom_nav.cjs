const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '../src/App.tsx');
let code = fs.readFileSync(appPath, 'utf8');

// 1. Add LoginModal import
if (!code.includes("import { LoginModal }")) {
  code = code.replace(
    "import { BookmarksModal } from './components/BookmarksModal';",
    "import { BookmarksModal } from './components/BookmarksModal';\nimport { LoginModal } from './components/LoginModal';"
  );
}

// 2. Add isLoginOpen state
if (!code.includes("isLoginOpen")) {
  code = code.replace(
    "const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);",
    "const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);\n  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);"
  );
}

// 3. Update MobileBottomNav usage
const navSearchIndex = code.indexOf('<MobileBottomNav');
if (navSearchIndex !== -1) {
  const navEndIndex = code.indexOf('/>', navSearchIndex);
  if (navEndIndex !== -1) {
    const newNavBlock = `<MobileBottomNav
        viewMode={viewMode}
        selectedClass={selectedClass}
        selectedSubjectName={selectedSubject?.name}
        selectedChapterNumber={selectedChapter?.chapterNumber}
        selectedBookTitle={selectedBookTitle}
        onNavigateHome={() => {
          navigateTo({ viewMode: 'DASHBOARD', selectedSubject: null, selectedChapter: null });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenClassSelector={() => navigateTo({ viewMode: 'CLASSES' })}
        onOpenSearch={() => {
          navigateTo({ viewMode: 'DASHBOARD' });
          setTimeout(() => {
            const input = document.querySelector('input[placeholder*="Search NCERT"][type="text"]') as HTMLInputElement | null;
            if (input) {
              input.scrollIntoView({ behavior: 'smooth', block: 'center' });
              input.focus();
            }
          }, 100);
        }}
        onOpenLogin={() => setIsLoginOpen(true)}
        onNavigateCurrentLevel={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        bookmarksCount={bookmarks.length + bookmarkedSubjectIds.length + bookmarkedChapterIds.length}
        openBookmarks={() => navigateTo({ viewMode: 'BOOKMARKS' })}
        isDarkMode={darkMode}
        onToggleTheme={() => setDarkMode(prev => !prev)}
      />`;
    code = code.slice(0, navSearchIndex) + newNavBlock + code.slice(navEndIndex + 2);
  }
}

// 4. Render LoginModal
if (!code.includes('<LoginModal')) {
  code = code.replace(
    '<BookmarksModal',
    `<LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        isDarkMode={darkMode}
      />\n\n      <BookmarksModal`
  );
}

fs.writeFileSync(appPath, code, 'utf8');
console.log('Successfully updated App.tsx via node script');

