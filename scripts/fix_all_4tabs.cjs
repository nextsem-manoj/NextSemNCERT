const fs = require('fs');
const path = require('path');

// 1. Fix NavigationDrawer.tsx: add login card right before "Section 1: Academy Academic Curriculum"
const drawerPath = path.join(__dirname, '../src/components/NavigationDrawer.tsx');
let drawerCode = fs.readFileSync(drawerPath, 'utf8');

const anchor = '{/* Section 1: Academy Academic Curriculum */}';
const loginCard = `
          {/* Profile / Student Login Card */}
          <div style={{ marginBottom: '6px' }}>
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenLogin) onOpenLogin();
              }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.14) 0%, rgba(16, 185, 129, 0.1) 100%)',
                border: '1.5px solid rgba(79, 70, 229, 0.35)',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(79, 70, 229, 0.4)'
                }}>
                  <User size={17} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    Student &amp; Teacher Login
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 700 }}>
                    Sync bookmarks &amp; notes
                  </div>
                </div>
              </div>
              <span style={{ color: '#4f46e5', fontSize: '0.82rem', fontWeight: 800 }}>Sign In ❯</span>
            </button>
          </div>
`;

if (drawerCode.includes(anchor) && !drawerCode.includes('Student &amp; Teacher Login')) {
  drawerCode = drawerCode.replace(anchor, loginCard + '\n          ' + anchor);
  fs.writeFileSync(drawerPath, drawerCode, 'utf8');
  console.log('NavigationDrawer login card wired successfully');
}

// 2. Fix App.tsx:
// - Remove unused onOpenLogin & onToggleTheme from MobileBottomNav props
// - Remove hasUserSelectedClass from AppDashboard props
// - Use setHasUserSelectedClass when user selects a class
const appPath = path.join(__dirname, '../src/App.tsx');
let appCode = fs.readFileSync(appPath, 'utf8');

// Fix MobileBottomNav block in App.tsx
const oldNavMatch = appCode.match(/<MobileBottomNav[\s\S]*?\/>/);
if (oldNavMatch) {
  const cleanNav = `<MobileBottomNav
        viewMode={viewMode}
        selectedClass={selectedClass}
        hasUserSelectedClass={hasUserSelectedClass}
        selectedSubjectName={selectedSubject?.name}
        selectedChapterNumber={selectedChapter?.chapterNumber}
        selectedBookTitle={selectedBookTitle}
        onNavigateHome={() => {
          navigateTo({ viewMode: 'DASHBOARD', selectedSubject: null, selectedChapter: null });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenClassSelector={() => {
          setHasUserSelectedClass(true);
          navigateTo({ viewMode: 'CLASSES' });
        }}
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
        onNavigateCurrentLevel={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        bookmarksCount={bookmarks.length + bookmarkedSubjectIds.length + bookmarkedChapterIds.length}
        openBookmarks={() => navigateTo({ viewMode: 'BOOKMARKS' })}
      />`;
  appCode = appCode.replace(oldNavMatch[0], cleanNav);
}

// Fix AppDashboard: ensure hasUserSelectedClass is not passed
appCode = appCode.replace('hasUserSelectedClass={hasUserSelectedClass}', '');

fs.writeFileSync(appPath, appCode, 'utf8');
console.log('App.tsx cleaned and aligned with 4-tab MobileBottomNav');

