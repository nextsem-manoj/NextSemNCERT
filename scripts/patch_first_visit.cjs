const fs = require('fs');
const file = 'c:/Users/Manoj/nextsemorg/NextSemNCERT/src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const stateTarget = 'const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);';
const stateAddition = 'const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);\r\n  const [isFirstVisitModalOpen, setIsFirstVisitModalOpen] = useState<boolean>(() => {\r\n    if (typeof window === "undefined") return false;\r\n    const hasVisited = localStorage.getItem("nextsem_has_selected_class");\r\n    const params = new URLSearchParams(window.location.search);\r\n    if (params.get("class") || params.get("view") || params.get("chapter")) return false;\r\n    return !hasVisited;\r\n  });';

content = content.replace(stateTarget, stateAddition);

const modalTarget = '<AppUpdateModal';
const modalAddition = '<FirstVisitClassModal\r\n        isOpen={isFirstVisitModalOpen}\r\n        onSelectClass={(clsNum, isKg) => {\r\n          localStorage.setItem("nextsem_has_selected_class", "true");\r\n          setIsFirstVisitModalOpen(false);\r\n          if (isKg) {\r\n            setSelectedKgLevel("all");\r\n            navigateTo({ viewMode: "KIDS_FOUNDATIONAL_HUB" });\r\n          } else {\r\n            const inferredSec = clsNum >= 11 ? "SENIOR" : clsNum >= 6 ? "SECONDARY" : "PRIMARY";\r\n            setActiveSection(inferredSec);\r\n            navigateTo({ viewMode: "CLASS_SUBJECTS", selectedClass: clsNum, selectedSubject: null });\r\n          }\r\n        }}\r\n        onDismiss={() => {\r\n          localStorage.setItem("nextsem_has_selected_class", "true");\r\n          setIsFirstVisitModalOpen(false);\r\n        }}\r\n      />\r\n\r\n      <AppUpdateModal';

content = content.replace(modalTarget, modalAddition);
fs.writeFileSync(file, content, 'utf8');
console.log('App.tsx successfully wired with FirstVisitClassModal');

