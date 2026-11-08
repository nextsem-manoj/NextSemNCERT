const fs = require('fs');

const filePath = 'src/components/BookChaptersView.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Define the helper function to find worksheet or sample paper url for a chapter
const helperCode = `
export function getChapterWorksheetOrPaperUrl(ch: Chapter, bookTitle?: string): string | null {
  const titleUpper = (bookTitle || '').toUpperCase();
  const id = ch.id.toLowerCase();
  const num = ch.chapterNumber;

  // Class 11 History Ch 1 Pages 11-12
  if (id === 'c11-hist-ch1' || id.includes('kehs101') || (num === 1 && titleUpper.includes('HIST') && (titleUpper.includes('11') || titleUpper.includes('XI')))) {
    return '/history-class11-ch1-writing-and-city-life-pages11-12-worksheet.html';
  }
  // Class 11 Accountancy Navyug Exam Solutions
  if (id.includes('c11-acc') || id.includes('keac')) {
    if (num === 3) return '/accountancy/accounting-equation-full-problems-notes-solutions.html';
    if (num === 4) return '/financial-accounting-cash-book-numericals-studio.html';
    if (num === 5) return '/financial-accounting-ch5-bank-reconciliation-statement-studio.html';
    return '/navyug-class11-accountancy-exam-solutions.html';
  }
  // Class 11 Economics Printable Question Paper
  if (id.includes('c11-eco') || id.includes('keec') || id.includes('kest')) {
    if (id.includes('kest') || id.includes('stats')) return '/class11-statistics-ch1-ch2-ch3-numerical-test-paper.html';
    return '/class11-economics-ch1-ch2-printable-question-paper.html';
  }
  // Class 11 Maths Permutations & Combinations
  if ((id.includes('c11-m') || id.includes('kemh')) && num === 6) {
    return '/class11-maths-permutations-combinations-ch6-difficult-questions.html';
  }

  // Class 5 Maths Ch 6 Dairy Farm Worksheet
  if ((id.includes('c5-m') || id.includes('eemm106') || id.includes('eemh106')) || (num === 6 && (titleUpper.includes('CLASS 5') || titleUpper.includes('CLASS V')))) {
    return '/maths-class5-ch6-dairy-farm-worksheet.html';
  }
  // Class 5 Santoor Ch 6 What a Tank Worksheet
  if ((id.includes('c5-santoor') || id.includes('eesa106')) || (num === 6 && titleUpper.includes('SANTOOR'))) {
    return '/santoor-class5-ch6-what-a-tank-worksheet.html';
  }
  // Class 4 Maths Ch 6 Measuring is Fun
  if ((id.includes('c4-m') || id.includes('demm106')) || (num === 6 && titleUpper.includes('CLASS 4'))) {
    return '/maths-class4-ch6-measuring-fun-worksheet.html';
  }
  // Class 3 Maths Ch 6 House of Hundreds
  if ((id.includes('c3-m') || id.includes('cemm106')) || (num === 6 && titleUpper.includes('CLASS 3'))) {
    return '/maths-class3-ch6-house-of-hundreds-worksheet.html';
  }
  // Class 2 Maths Ch 6 Festival Decoration
  if ((id.includes('c2-m') || id.includes('bcmm106')) || (num === 6 && titleUpper.includes('CLASS 2'))) {
    return '/maths-class2-ch6-festival-decoration-worksheet.html';
  }

  // Class 7 Science Ch 6 Adolescence Worksheet
  if ((id.includes('c7-sci') || id.includes('gecu106')) && num === 6) {
    return '/curiosity-class7-ch6-adolescence-worksheet.html';
  }
  // Class 7 Maths Ch 6 Number Play
  if ((id.includes('c7-mat') || id.includes('gegp106')) && num === 6) {
    return '/ganita-class7-ch6-number-play-mcq.html';
  }
  // Class 7 English Poorvi Unit 1 Learning Together
  if ((id.includes('c7-eng') || id.includes('gepr101')) && num === 1) {
    return '/english-class7-poorvi-unit1-learning-together-mcq.html';
  }

  // Class 9 Science Motion and Force
  if ((id.includes('c9-s') || id.includes('iesc106') || id.includes('iesc107')) && (num === 6 || num === 7)) {
    return '/class9-science-motion-force-test-hindi.html';
  }
  // Class 9 Maths 40-marks
  if ((id.includes('c9-m') || id.includes('iemh')) && (num === 4 || num === 5)) {
    return '/class9-maths-ch4-ch5-question-paper-40-marks.html';
  }
  // Class 9 Hindi Grammar Masterclass
  if (id.includes('c9-hg') || id.includes('grammar')) {
    return '/hindi-class9-grammar-complete-mastery.html';
  }

  // Class 12 Chemistry Ch 1 Haloalkanes
  if ((id.includes('c12-chem') || id.includes('lech201')) && (num === 1 || num === 6)) {
    return '/class12-chemistry-ch1-haloalkanes-board-test-paper.html';
  }
  // Class 12 Physics Ch 1 Derivations
  if ((id.includes('c12-p') || id.includes('leph101')) && num === 1) {
    return '/physics-class12-ch1-all-derivations-studio.html?class=12&subject=c12-physics&book=part-1';
  }
  // Class 12 Physics Ch 2 Derivations
  if ((id.includes('c12-p') || id.includes('leph102')) && num === 2) {
    return '/physics-class12-ch2-all-derivations-studio.html?class=12&subject=c12-physics&book=part-1';
  }

  return null;
}
`;

// Insert helperCode before `export function getOfficialNcertPdfUrl`
if (!content.includes('getChapterWorksheetOrPaperUrl')) {
  content = content.replace('export function getOfficialNcertPdfUrl', helperCode + '\nexport function getOfficialNcertPdfUrl');
}

// Now replace the 3rd action button click logic
const targetButtonBlock = `                    <button
                      onClick={() => {
                        if (onOpenPdfReader) onOpenPdfReader(ch);
                      }}
                      className="btn"
                      style={{
                        background: isPrimaryStage 
                          ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)'
                          : 'linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(217, 119, 6, 0.1) 100%)',
                        border: isPrimaryStage ? '1px solid #10b981' : '1px solid #f59e0b',
                        color: isPrimaryStage ? '#10b981' : '#f59e0b',
                        padding: '8px 8px',
                        fontWeight: 800,
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        borderRadius: '8px'
                      }}
                      title={thirdActionTitle}
                    >
                      <FileText size={14} /> <span>{thirdActionLabel}</span>
                    </button>`;

const replacementButtonBlock = `                    <button
                      type="button"
                      onClick={() => {
                        const targetUrl = getChapterWorksheetOrPaperUrl(ch, bookTitle);
                        if (targetUrl) {
                          window.location.href = targetUrl;
                        } else if (onOpenPdfReader) {
                          onOpenPdfReader(ch);
                        }
                      }}
                      className="btn"
                      style={{
                        background: isPrimaryStage 
                          ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)'
                          : 'linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(217, 119, 6, 0.1) 100%)',
                        border: isPrimaryStage ? '1px solid #10b981' : '1px solid #f59e0b',
                        color: isPrimaryStage ? '#10b981' : '#f59e0b',
                        padding: '8px 8px',
                        fontWeight: 800,
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        borderRadius: '8px'
                      }}
                      title={thirdActionTitle}
                    >
                      <FileText size={14} /> <span>{thirdActionLabel}</span>
                    </button>`;

if (content.includes(targetButtonBlock)) {
  content = content.replace(targetButtonBlock, replacementButtonBlock);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully wired [Worksheet / Sample Paper] button!');
} else {
  console.error('Could not find targetButtonBlock in BookChaptersView.tsx');
  process.exit(1);
}

