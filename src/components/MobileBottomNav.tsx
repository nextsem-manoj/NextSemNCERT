import React from 'react';
import {
  Home,
  GraduationCap,
  Bookmark,
  FileText,
  BookOpen,
  Layers,
  Search
} from 'lucide-react';

interface MobileBottomNavProps {
  viewMode: string;
  selectedClass?: number | null;
  hasUserSelectedClass?: boolean;
  selectedSubjectName?: string | null;
  selectedChapterNumber?: number | null;
  selectedBookTitle?: string | null;
  onNavigateHome: () => void;
  onOpenClassSelector: () => void;
  onOpenSearch: () => void;
  onNavigateCurrentLevel?: () => void;
  bookmarksCount: number;
  openBookmarks: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  viewMode,
  selectedClass,
  hasUserSelectedClass = false,
  selectedSubjectName,
  selectedChapterNumber,
  selectedBookTitle,
  onNavigateHome,
  onOpenClassSelector,
  onOpenSearch,
  onNavigateCurrentLevel,
  bookmarksCount,
  openBookmarks,
}) => {
  const isDashboard = viewMode === 'DASHBOARD';
  const isClasses = viewMode === 'CLASSES';
  const isClassSubjects = viewMode === 'CLASS_SUBJECTS';
  const isSubjectBooks = viewMode === 'SUBJECT_BOOKS';
  const isBookChapters = viewMode === 'BOOK_CHAPTERS';
  const isPdfReader = viewMode === 'PDF_READER';
  const isBookmarks = viewMode === 'BOOKMARKS';

  // Dynamic Context Item (Home k baad selected class / subject / chapter k hisab se update hota hai)
  const getDynamicContextItem = () => {
    if (isPdfReader) {
      return {
        label: selectedChapterNumber ? `Ch ${selectedChapterNumber}` : 'PDF Unit',
        icon: FileText,
        color: 'var(--accent-primary, #4f46e5)',
        onClick: onNavigateCurrentLevel
      };
    }
    if (isBookChapters) {
      return {
        label: selectedBookTitle ? (selectedBookTitle.length > 10 ? `${selectedBookTitle.slice(0, 9)}…` : selectedBookTitle) : 'Chapters',
        icon: BookOpen,
        color: 'var(--accent-primary, #4f46e5)',
        onClick: onNavigateCurrentLevel
      };
    }
    if (isSubjectBooks) {
      return {
        label: selectedSubjectName ? (selectedSubjectName.length > 10 ? `${selectedSubjectName.slice(0, 9)}…` : selectedSubjectName) : 'Books',
        icon: Layers,
        color: 'var(--accent-primary, #4f46e5)',
        onClick: onNavigateCurrentLevel
      };
    }
    if (isClassSubjects || hasUserSelectedClass) {
      return {
        label: `Class ${selectedClass || 10}`,
        icon: GraduationCap,
        color: 'var(--accent-primary, #4f46e5)',
        onClick: onNavigateCurrentLevel || onOpenClassSelector
      };
    }
    // Default jab user ne koi class click nahi ki (Generic "Classes")
    return {
      label: 'Classes',
      icon: GraduationCap,
      color: 'var(--accent-primary, #4f46e5)',
      onClick: onOpenClassSelector
    };
  };

  const dynamicContext = getDynamicContextItem();
  const isHomeActive = isDashboard && !isBookmarks;
  const isDynamicActive = isClasses || isClassSubjects || isSubjectBooks || isBookChapters || isPdfReader;

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label="Mobile Bottom Navigation"
      style={{
        display: 'flex',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 'calc(60px + env(safe-area-inset-bottom, 0px))',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        background: 'var(--bg-secondary)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-color)',
        zIndex: 120,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: '12px',
        paddingRight: '12px',
        boxShadow: 'var(--shadow-lg)',
        userSelect: 'none',
        transition: 'background-color 0.25s ease, border-color 0.25s ease'
      }}
    >
      {/* 1. HOME TAB */}
      <button
        type="button"
        className={`mobile-nav-btn ${isHomeActive ? 'active' : ''}`}
        onClick={onNavigateHome}
        aria-label="Home"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          background: isHomeActive ? 'var(--accent-primary-light, rgba(79, 70, 229, 0.12))' : 'transparent',
          border: isHomeActive ? '1.5px solid var(--border-glow, rgba(79, 70, 229, 0.35))' : '1.5px solid transparent',
          color: isHomeActive ? 'var(--accent-primary, #4f46e5)' : 'var(--text-muted)',
          fontSize: '0.74rem',
          fontWeight: isHomeActive ? 800 : 600,
          cursor: 'pointer',
          padding: '6px 14px',
          borderRadius: '12px',
          minHeight: '44px',
          flex: 1,
          maxWidth: '85px',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <Home size={19} strokeWidth={isHomeActive ? 2.5 : 2} />
        <span>Home</span>
      </button>

      {/* 2. DYNAMIC ACTIVE CONTEXT TAB (Classes / Class X / Subject / Book) */}
      <button
        type="button"
        className={`mobile-nav-btn ${isDynamicActive ? 'active' : ''}`}
        onClick={dynamicContext.onClick || onOpenClassSelector}
        aria-label={dynamicContext.label}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          background: isDynamicActive ? 'var(--accent-primary-light, rgba(79, 70, 229, 0.12))' : 'transparent',
          border: isDynamicActive ? '1.5px solid var(--border-glow, rgba(79, 70, 229, 0.35))' : '1.5px solid transparent',
          color: isDynamicActive ? dynamicContext.color : 'var(--text-muted)',
          fontSize: '0.74rem',
          fontWeight: isDynamicActive ? 800 : 600,
          cursor: 'pointer',
          padding: '6px 10px',
          borderRadius: '12px',
          minHeight: '44px',
          flex: 1,
          maxWidth: '95px',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <dynamicContext.icon size={19} strokeWidth={isDynamicActive ? 2.5 : 2} />
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%', textAlign: 'center' }}>
          {dynamicContext.label}
        </span>
      </button>

      {/* 3. SEARCH TAB (MID HIGHLIGHT) */}
      <button
        type="button"
        className="mobile-nav-btn"
        onClick={onOpenSearch}
        aria-label="Search NCERT Books"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          background: 'transparent',
          border: 'none',
          color: 'var(--text-muted)',
          fontSize: '0.72rem',
          fontWeight: 700,
          cursor: 'pointer',
          padding: '4px 10px',
          minHeight: '44px',
          flex: 1,
          maxWidth: '75px',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 3px 10px rgba(79, 70, 229, 0.4)',
          marginBottom: '1px'
        }}>
          <Search size={16} strokeWidth={2.5} />
        </div>
        <span>Search</span>
      </button>

      {/* 4. BOOKMARK TAB */}
      <button
        type="button"
        className={`mobile-nav-btn ${isBookmarks ? 'active' : ''}`}
        onClick={openBookmarks}
        aria-label="Saved Bookmarks"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          background: isBookmarks ? 'var(--accent-primary-light, rgba(79, 70, 229, 0.12))' : 'transparent',
          border: isBookmarks ? '1.5px solid var(--border-glow, rgba(79, 70, 229, 0.35))' : '1.5px solid transparent',
          color: isBookmarks ? 'var(--accent-primary, #4f46e5)' : 'var(--text-muted)',
          fontSize: '0.74rem',
          fontWeight: isBookmarks ? 800 : 600,
          cursor: 'pointer',
          padding: '6px 14px',
          borderRadius: '12px',
          minHeight: '44px',
          flex: 1,
          maxWidth: '85px',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div style={{ position: 'relative', display: 'inline-flex' }}>
          <Bookmark size={19} strokeWidth={isBookmarks ? 2.5 : 2} />
          {bookmarksCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-8px',
                background: 'var(--accent-primary, #4f46e5)',
                color: '#ffffff',
                borderRadius: '9999px',
                minWidth: '15px',
                height: '15px',
                padding: '0 3px',
                fontSize: '0.6rem',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
              }}
            >
              {bookmarksCount}
            </span>
          )}
        </div>
        <span>Bookmark</span>
      </button>
    </nav>
  );
};

export default MobileBottomNav;
