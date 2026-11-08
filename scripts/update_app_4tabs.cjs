const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '../src/App.tsx');
let code = fs.readFileSync(appPath, 'utf8');

// 1. Update initialClass to null when classParam is absent
// Find: let initialClass = classParam ? Number(classParam) : 12;
code = code.replace(
  'let initialClass = classParam ? Number(classParam) : 12;',
  'let initialClass: number | null = classParam ? Number(classParam) : null;'
);

// 2. Fix classInfo fallback
code = code.replace(
  'const classInfo = classesData.find(c => c.classNumber === initialClass) || classesData.find(c => c.classNumber === 12)!;',
  'const classInfo = (initialClass ? classesData.find(c => c.classNumber === initialClass) : null) || classesData.find(c => c.classNumber === 10)!;'
);

// 3. Fix interface / type of initialClass in getInitialStateFromUrl
code = code.replace(
  'initialClass: number,',
  'initialClass: number | null,'
);

// 4. Update useState for selectedClass & track hasUserSelectedClass
if (!code.includes('hasUserSelectedClass')) {
  code = code.replace(
    'const [selectedClass, setSelectedClass] = useState<number>(initialState.initialClass);',
    `const [selectedClass, setSelectedClass] = useState<number>(initialState.initialClass || 10);\n  const [hasUserSelectedClass, setHasUserSelectedClass] = useState<boolean>(initialState.initialClass !== null);`
  );
}

// 5. Update onSelectClass everywhere in App to set hasUserSelectedClass(true)
code = code.replace(
  'setSelectedClass(targetClass);',
  'setSelectedClass(targetClass);\n      setHasUserSelectedClass(true);'
);

// 6. Pass hasUserSelectedClass to MobileBottomNav
code = code.replace(
  'selectedClass={selectedClass}',
  'selectedClass={selectedClass}\n        hasUserSelectedClass={hasUserSelectedClass}'
);

// 7. Pass onOpenLogin to NavigationDrawer
code = code.replace(
  'onCheckUpdates={() => setIsUpdateModalOpen(true)}',
  'onCheckUpdates={() => setIsUpdateModalOpen(true)}\n        onOpenLogin={() => setIsLoginOpen(true)}'
);

fs.writeFileSync(appPath, code, 'utf8');
console.log('App.tsx updated successfully with 4-tab MobileBottomNav wiring and dynamic class state');

