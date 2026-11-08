import React from 'react';
import { Menu, ArrowLeft } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface NavbarProps {
  onHomeClick: () => void;
  onOpenDrawer: () => void;
  onOpenAcademyClasses?: () => void;
  onOpenSolutionsPage?: () => void;
  activeView?: string;
  onOpenAccountancy?: () => void;
  onOpenQuizzes?: () => void;
  breadcrumbs?: BreadcrumbItem[];
  pageHeading?: string;
  onGoBack?: () => void;
  canGoBack?: boolean;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
  searchPlaceholder?: string;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onHomeClick,
  onOpenDrawer,
  onGoBack,
  canGoBack = false,
  isDarkMode = true
}) => {
  return (
    <header
      className="main-navbar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        minHeight: 'calc(58px + env(safe-area-inset-top, 0px))',
        paddingTop: 'env(safe-area-inset-top, 0px)',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-secondary)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
        userSelect: 'none'
      }}
    >
      <div 
        className="container navbar-inner" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '12px',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '8px 16px',
          flexWrap: 'nowrap'
        }}
      >
        {/* Left Section: [☰ Hamburger Menu] + [Logo with App Name] as requested in image-4.png */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {/* Hamburger / Drawer Toggle or GoBack */}
          <button
            type="button"
            onClick={canGoBack && onGoBack ? onGoBack : onOpenDrawer}
            title={canGoBack ? "Go Back" : "Open Menu"}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'var(--bg-hover)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#4f46e5';
              e.currentTarget.style.borderColor = '#4f46e5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
          >
            {canGoBack ? <ArrowLeft size={19} /> : <Menu size={19} />}
          </button>

          {/* Logo with App Name (NCERT by NextSem) */}
          <div
            onClick={onHomeClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: isDarkMode ? '#090d16' : '#ffffff',
                border: isDarkMode ? '1.5px solid #4f46e5' : '1.5px solid rgba(79, 70, 229, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: isDarkMode ? '0 0 12px rgba(79, 70, 229, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.08)',
                flexShrink: 0
              }}
            >
              <img
                src={isDarkMode ? "/ncert-logo-dark.png" : "/ncert-logo-light.png"}
                alt="NCERT by NextSem Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            <div className="brand-logo-text" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1.15 }}>
              <span style={{ fontWeight: 900, fontSize: '1.18rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                NCERT
              </span>
              <span style={{ color: 'var(--accent-primary, #4f46e5)', fontSize: '0.66rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '1px' }}>
                by NextSem
              </span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};
