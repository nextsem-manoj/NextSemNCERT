import React, { useState } from 'react';
import { 
  ArrowRight, 
  FolderOpen,
  CheckCircle2,
  Search,
  BookOpen,
  ChevronDown,
  Layers
} from 'lucide-react';
import type { ClassStageInfo, Subject } from '../data/ncertData';
import { SHARED_NCERT_DRIVE_FOLDER_URL } from '../utils/googleDriveHelper';
import { getSubjectCoverImage } from './SubjectList';

interface AppDashboardProps {
  selectedClass?: number;
  classesData?: ClassStageInfo[];
  onSelectClass?: (classNum: number) => void;
  onSelectCategory: (categoryKey: string) => void;
  onSelectSubject?: (classNum: number, subject: Subject) => void;
}

export const AppDashboard: React.FC<AppDashboardProps> = ({ 
  selectedClass = 10,
  classesData = [],
  onSelectClass,
  onSelectCategory,
  onSelectSubject
}) => {
  const [quickSearch, setQuickSearch] = useState('');
  const [expandedClassNum, setExpandedClassNum] = useState<number | null>(null);

  // Sort classes 1 to 12 in proper ascending numerical order
  const sortedClasses = [...classesData].sort((a, b) => a.classNumber - b.classNumber);

  // Quick metadata for stage labels and badge styling
  const stageBadges: Record<number, { stage: string; color: string; bg: string }> = {
    1: { stage: 'Foundational', color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)' },
    2: { stage: 'Foundational', color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)' },
    3: { stage: 'Preparatory', color: '#0284c7', bg: 'rgba(2, 132, 199, 0.12)' },
    4: { stage: 'Preparatory', color: '#0284c7', bg: 'rgba(2, 132, 199, 0.12)' },
    5: { stage: 'Preparatory', color: '#0284c7', bg: 'rgba(2, 132, 199, 0.12)' },
    6: { stage: 'Middle', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.12)' },
    7: { stage: 'Middle', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.12)' },
    8: { stage: 'Middle', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.12)' },
    9: { stage: 'Secondary', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)' },
    10: { stage: 'Secondary', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)' },
    11: { stage: 'Sr. Secondary', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.12)' },
    12: { stage: 'Sr. Secondary', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.12)' }
  };

  // Filter classes based on search query (by class name or any subject name inside it)
  const filteredClasses = sortedClasses.filter(c => {
    if (!quickSearch.trim()) return true;
    const query = quickSearch.toLowerCase().trim();
    const classMatches = `class ${c.classNumber}`.includes(query) || 
      c.classNumber.toString() === query ||
      (stageBadges[c.classNumber]?.stage.toLowerCase().includes(query));
    
    const subjectMatches = c.subjects.some(s => 
      s.name.toLowerCase().includes(query) || s.description?.toLowerCase().includes(query)
    );

    return classMatches || subjectMatches;
  });

  return (
    <div style={{
      maxWidth: '1060px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }}>

      {/* 🔍 COMPACT SEARCH HERO */}
      <section style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        padding: '1.15rem 1.4rem',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          background: 'var(--bg-primary)',
          border: '1.5px solid var(--border-color)',
          borderRadius: '14px',
          padding: '0 14px',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
        }}>
          <Search size={18} style={{ color: 'var(--text-muted)', flexShrink: 0, marginRight: '10px' }} />
          <input
            type="text"
            value={quickSearch}
            onChange={(e) => setQuickSearch(e.target.value)}
            placeholder="Search any class or subject (e.g. Class 10, Mridang, Maths, Ganita, Science, History)..."
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              background: 'transparent',
              padding: '12px 0',
              fontSize: '0.92rem',
              color: 'var(--text-primary)',
              fontFamily: 'inherit'
            }}
          />
          {quickSearch && (
            <button
              type="button"
              onClick={() => setQuickSearch('')}
              style={{
                border: 'none',
                background: 'rgba(79, 70, 229, 0.12)',
                color: '#4f46e5',
                borderRadius: '8px',
                padding: '4px 10px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginLeft: '8px'
              }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Micro Status Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          padding: '0 4px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            <span>NEP 2026 Rationalized Edition • All Classes 1 to 12 with Full Subjects</span>
          </div>
          <span>Direct 1-Click Subject & Chapter Access</span>
        </div>
      </section>

      {/* 📚 FRONT PAGE: ALL CLASSES (1 to 12) + ALL SUBJECTS INSIDE (Per User Plan L14) */}
      <section style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '22px',
        padding: '1.4rem',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              margin: '0 0 2px',
              letterSpacing: '-0.01em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <BookOpen size={22} style={{ color: '#4f46e5' }} />
              <span>NCERT Classes 1 to 12 Textbooks & Subjects</span>
            </h2>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Har class ke andar saare subjects available hain — click karte hi direct subject open hoga
            </div>
          </div>

          <span style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#4f46e5',
            background: 'rgba(79, 70, 229, 0.1)',
            padding: '4px 12px',
            borderRadius: '9999px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <Layers size={13} />
            <span>{filteredClasses.length} Classes Loaded</span>
          </span>
        </div>

        {/* 📚 Direct Class Cards List with All Subjects rendered inside each */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {filteredClasses.map((cls) => {
            const stage = stageBadges[cls.classNumber] || { stage: 'NCERT', color: '#4f46e5', bg: 'rgba(79, 70, 229, 0.1)' };
            const isCurrentlySelected = selectedClass === cls.classNumber;
            const isExpanded = expandedClassNum === cls.classNumber || quickSearch.trim().length > 0;
            const subjectsList = cls.subjects || [];

            return (
              <div
                key={`front-class-${cls.classNumber}`}
                style={{
                  background: isCurrentlySelected ? 'rgba(79, 70, 229, 0.04)' : 'var(--bg-hover)',
                  border: isCurrentlySelected ? '2px solid #4f46e5' : '1px solid var(--border-color)',
                  borderRadius: '18px',
                  padding: '14px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isCurrentlySelected ? '0 4px 14px -3px rgba(79, 70, 229, 0.2)' : 'none'
                }}
              >
                {/* Class Header Row */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  {/* Left: Class Title & Stage Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
                      background: stage.bg,
                      color: stage.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '1rem',
                      flexShrink: 0
                    }}>
                      {cls.classNumber}
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <h3 style={{
                          margin: 0,
                          fontSize: '1.05rem',
                          fontWeight: 800,
                          color: 'var(--text-primary)'
                        }}>
                          Class {cls.classNumber}
                        </h3>
                        <span style={{
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          color: stage.color,
                          background: stage.bg,
                          padding: '2px 8px',
                          borderRadius: '6px',
                          letterSpacing: '0.04em'
                        }}>
                          {stage.stage}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {subjectsList.length} Subjects available • NEP 2026 Curriculum
                      </div>
                    </div>
                  </div>

                  {/* Right: Quick actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {/* View all subjects page */}
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectClass) {
                          onSelectClass(cls.classNumber);
                        } else {
                          onSelectCategory('ncert-books');
                        }
                      }}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--border-color)',
                        borderRadius: '10px',
                        padding: '6px 12px',
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#4f46e5';
                        e.currentTarget.style.color = '#4f46e5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                    >
                      <span>Class Page</span>
                      <ArrowRight size={13} />
                    </button>

                    {/* Expand/Collapse Toggle */}
                    <button
                      type="button"
                      onClick={() => setExpandedClassNum(isExpanded ? null : cls.classNumber)}
                      title={isExpanded ? 'Collapse Subjects' : 'Expand Subjects'}
                      style={{
                        background: isExpanded ? 'rgba(79, 70, 229, 0.1)' : 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '10px',
                        padding: '6px 8px',
                        color: isExpanded ? '#4f46e5' : 'var(--text-muted)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s ease'
                      }}
                    >
                      <ChevronDown 
                        size={16} 
                        style={{ 
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease'
                        }} 
                      />
                    </button>
                  </div>
                </div>

                {/* All Subjects Inside this Class (Direct Front-Page Display) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '10px',
                  paddingTop: '4px'
                }}>
                  {subjectsList.map((subj) => {
                    const coverImg = getSubjectCoverImage(subj, cls.classNumber);

                    return (
                      <button
                        key={`${cls.classNumber}-${subj.id}`}
                        type="button"
                        onClick={() => {
                          if (onSelectSubject) {
                            onSelectSubject(cls.classNumber, subj);
                          } else if (onSelectClass) {
                            onSelectClass(cls.classNumber);
                          }
                        }}
                        style={{
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border-color)',
                          borderRadius: '14px',
                          padding: '10px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.18s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#4f46e5';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 4px 12px -2px rgba(79, 70, 229, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--border-color)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {/* Book Cover Thumbnail or Icon */}
                        {coverImg ? (
                          <img
                            src={coverImg}
                            alt={subj.name}
                            loading="lazy"
                            style={{
                              width: '36px',
                              height: '48px',
                              objectFit: 'cover',
                              borderRadius: '6px',
                              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                              flexShrink: 0
                            }}
                          />
                        ) : (
                          <div style={{
                            width: '36px',
                            height: '48px',
                            borderRadius: '6px',
                            background: stage.bg,
                            color: stage.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <BookOpen size={18} />
                          </div>
                        )}

                        {/* Subject Details */}
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px',
                          overflow: 'hidden',
                          flex: 1
                        }}>
                          <span style={{
                            fontSize: '0.84rem',
                            fontWeight: 800,
                            color: 'var(--text-primary)',
                            lineHeight: 1.25,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }} title={subj.name}>
                            {subj.name}
                          </span>

                          <span style={{
                            fontSize: '0.7rem',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            <span>{subj.chapters?.length || subj.totalChapters || 0} Ch.</span>
                            <span>•</span>
                            <span style={{ color: '#4f46e5', fontWeight: 700 }}>Open →</span>
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 🛡️ TRUST & GOOGLE DRIVE CLOUD ACCESS */}
      <section style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '18px',
        padding: '1.15rem 1.4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '14px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            background: 'rgba(16, 185, 129, 0.12)',
            color: '#10b981',
            padding: '8px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <CheckCircle2 size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              100% Free Open Educational Access
            </div>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
              Official rationalized NCERT textbooks with Google Drive cloud backup
            </div>
          </div>
        </div>

        <a 
          href={SHARED_NCERT_DRIVE_FOLDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'rgba(79, 70, 229, 0.1)',
            border: '1px solid rgba(79, 70, 229, 0.25)',
            color: '#4f46e5',
            padding: '8px 16px',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none'
          }}
        >
          <FolderOpen size={15} />
          <span>Google Drive Cloud ↗</span>
        </a>
      </section>

    </div>
  );
};
