const fs = require('fs');
const path = require('path');

const drawerPath = path.join(__dirname, '../src/components/NavigationDrawer.tsx');
let code = fs.readFileSync(drawerPath, 'utf8');

// 1. Add User icon import if missing
if (!code.includes('User,')) {
  code = code.replace('Bookmark,', 'Bookmark,\n  User,');
}

// 2. Add onOpenLogin to props interface
if (!code.includes('onOpenLogin?: () => void;')) {
  code = code.replace(
    'onCheckUpdates?: () => void;',
    'onCheckUpdates?: () => void;\n  onOpenLogin?: () => void;'
  );
  code = code.replace(
    'totalBookmarksCount = 0,',
    'totalBookmarksCount = 0,\n  onOpenLogin,'
  );
}

// 3. Add Login Card right under theme switcher
const loginCard = `
        {/* Profile / Student Login Pill */}
        <div style={{ padding: '4px 16px 12px' }}>
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
              padding: '11px 14px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.12) 0%, rgba(16, 185, 129, 0.08) 100%)',
              border: '1.5px solid rgba(79, 70, 229, 0.3)',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all 0.15s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#4f46e5',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 800
              }}>
                <User size={16} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Student &amp; Teacher Login
                </div>
                <div style={{ fontSize: '0.67rem', color: '#10b981', fontWeight: 700 }}>
                  Sync bookmarks &amp; notes across devices
                </div>
              </div>
            </div>
            <span style={{ color: '#4f46e5', fontSize: '0.85rem', fontWeight: 800 }}>Sign In ❯</span>
          </button>
        </div>`;

const targetAnchor = '{/* 3. Section 1: Study Tools & Custom Uploads */}';
if (code.includes(targetAnchor) && !code.includes('Student &amp; Teacher Login')) {
  code = code.replace(targetAnchor, loginCard + '\n\n        ' + targetAnchor);
}

fs.writeFileSync(drawerPath, code, 'utf8');
console.log('NavigationDrawer successfully updated with login card');

