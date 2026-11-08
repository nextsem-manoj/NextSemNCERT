const fs = require('fs');
const file = 'c:/Users/Manoj/nextsemorg/NextSemNCERT/src/components/NavigationDrawer.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'src="/ncert-by-nextsem-logo.png"',
  'src={darkMode ? "/ncert-logo-dark.png" : "/ncert-logo-light.png"}'
);
content = content.replace(
  "background: '#090d16'",
  "background: darkMode ? '#090d16' : '#ffffff'"
);
content = content.replace(
  "border: '1.5px solid #4f46e5'",
  "border: darkMode ? '1.5px solid #4f46e5' : '1.5px solid rgba(79, 70, 229, 0.3)'"
);
content = content.replace(
  "StudyGuide",
  "NCERT"
);
content = content.replace(
  "by Nextsem",
  "by NextSem"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated NavigationDrawer with theme-aware logo');

