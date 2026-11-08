const fs = require('fs');
const file = 'c:/Users/Manoj/nextsemorg/NextSemNCERT/src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const stateTarget = 'const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);';
const stateAddition = `const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [isFirstVisitModalOpen, setIsFirstVisitModalOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const hasVisited = localStorage.getItem('nextsem_has_selected_class');
    const params = new URLSearchParams(window.location.search);
    if (params.get('class') || params.get('view') || params.get('chapter')) return false;
    return !hasVisited;
  });`;

content = content.replace(stateTarget, stateAddition);

const modalTarget = '<AppUpdateModal';
const modalAddition = `<FirstVisitClassModal
        isOpen={isFirstVisitModalOpen}
        onSelectClass={(clsNum, isKg) => {
          localStorage.setItem('nextsem_has_selected_class', 'true');
          setIsFirstVisitModalOpen(false);
          if (isKg) {
            setSelectedKgLevel('all');
            navigateTo({ viewMode: 'KIDS_FOUNDATIONAL_HUB' });
          } else {
            const inferredSec = clsNum >= 11 ? 'SENIOR' : clsNum >= 6 ? 'SECONDARY' : 'PRIMARY';
            setActiveSection(inferredSec);
            navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: clsNum, selectedSubject: null });
          }
        }}
        onDismiss={() => {
          localStorage.setItem('nextsem_has_selected_class', 'true');
          setIsFirstVisitModalOpen(false);
        }}
      />

      <AppUpdateModal`;

content = content.replace(modalTarget, modalAddition);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully wired FirstVisitClassModal in App.tsx');

