import React, { useState } from 'react';
import { Check, ArrowRight, X, GraduationCap } from 'lucide-react';

interface FirstVisitClassModalProps {
  isOpen: boolean;
  onSelectClass: (classNum: number, isKg?: boolean) => void;
  onDismiss: () => void;
}

export const FirstVisitClassModal: React.FC<FirstVisitClassModalProps> = ({
  isOpen,
  onSelectClass,
  onDismiss
}) => {
  const [selectedNum, setSelectedNum] = useState<number | null>(10);
  const [isKgSelected, setIsKgSelected] = useState<boolean>(false);

  if (!isOpen) return null;

  const classOptions = [
    { num: 0, label: 'KG / Balvatika', subtitle: 'Nursery, LKG, UKG', tag: 'Foundational', isKg: true },
    { num: 1, label: 'Class 1', subtitle: 'Mridang, Joyful', tag: 'Primary' },
    { num: 2, label: 'Class 2', subtitle: 'Joyful Math, Hindi', tag: 'Primary' },
    { num: 3, label: 'Class 3', subtitle: 'Santoor, Veena', tag: 'Preparatory' },
    { num: 4, label: 'Class 4', subtitle: 'English, EVS, Maths', tag: 'Preparatory' },
    { num: 5, label: 'Class 5', subtitle: 'Environmental, Math', tag: 'Preparatory' },
    { num: 6, label: 'Class 6', subtitle: 'Curiosity, Ganita', tag: 'Middle' },
    { num: 7, label: 'Class 7', subtitle: 'Poorvi, Malhar', tag: 'Middle' },
    { num: 8, label: 'Class 8', subtitle: 'Honeydew, Science', tag: 'Middle' },
    { num: 9, label: 'Class 9', subtitle: 'Ganita Manjari, Beehive', tag: 'Secondary' },
    { num: 10, label: 'Class 10', subtitle: 'First Flight, Maths, Sci', tag: 'Secondary' },
    { num: 11, label: 'Class 11', subtitle: 'Science, Commerce, Arts', tag: 'Sr. Secondary' },
    { num: 12, label: 'Class 12', subtitle: 'Physics, Acc, Hist, Chem', tag: 'Sr. Secondary' }
  ];

  const handleConfirm = () => {
    if (isKgSelected) {
      onSelectClass(0, true);
    } else if (selectedNum !== null) {
      onSelectClass(selectedNum, false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0, 0, 0, 0.72)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      padding: '16px',
      animation: 'fadeIn 0.2s ease-out'
    }}>
      <div 
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '1.5rem 1.5rem 1rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(79, 70, 229, 0.12)',
              color: '#4f46e5',
              padding: '4px 10px',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: 800,
              marginBottom: '8px'
            }}>
              <GraduationCap size={14} />
              <span>Personalize Your Experience</span>
            </div>
            <h2 style={{
              fontSize: '1.35rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              margin: '0 0 4px',
              letterSpacing: '-0.02em'
            }}>
              Select Your Class / Grade
            </h2>
            <p style={{
              fontSize: '0.84rem',
              color: 'var(--text-muted)',
              margin: 0,
              lineHeight: 1.4
            }}>
              We will customize your textbooks, solutions, and question bank for your standard. You can change this anytime.
            </p>
          </div>

          <button
            type="button"
            onClick={onDismiss}
            style={{
              background: 'var(--bg-hover)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-muted)',
              borderRadius: '10px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Class Cards Grid */}
        <div style={{
          padding: '1rem 1.5rem',
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '10px'
        }}>
          {classOptions.map((opt) => {
            const isSelected = opt.isKg ? isKgSelected : (selectedNum === opt.num && !isKgSelected);
            return (
              <div
                key={opt.label}
                onClick={() => {
                  if (opt.isKg) {
                    setIsKgSelected(true);
                    setSelectedNum(0);
                  } else {
                    setIsKgSelected(false);
                    setSelectedNum(opt.num);
                  }
                }}
                style={{
                  background: isSelected 
                    ? 'rgba(79, 70, 229, 0.12)' 
                    : 'var(--bg-hover)',
                  border: isSelected 
                    ? '2px solid #4f46e5' 
                    : '1px solid var(--border-color)',
                  borderRadius: '14px',
                  padding: '12px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontSize: '0.64rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: isSelected ? '#4f46e5' : 'var(--text-muted)',
                    letterSpacing: '0.03em'
                  }}>
                    {opt.tag}
                  </span>
                  {isSelected && (
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#4f46e5',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                  )}
                </div>

                <div style={{
                  fontSize: '0.98rem',
                  fontWeight: 900,
                  color: isSelected ? '#4f46e5' : 'var(--text-primary)'
                }}>
                  {opt.label}
                </div>

                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {opt.subtitle}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Action */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid var(--border-color)',
          background: 'var(--bg-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <button
            type="button"
            onClick={onDismiss}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '8px 12px'
            }}
          >
            Explore as Guest
          </button>

          <button
            type="button"
            onClick={handleConfirm}
            style={{
              background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
              border: 'none',
              borderRadius: '12px',
              color: '#ffffff',
              padding: '10px 20px',
              fontSize: '0.88rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
              transition: 'all 0.15s ease'
            }}
          >
            <span>Continue to My Class</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
