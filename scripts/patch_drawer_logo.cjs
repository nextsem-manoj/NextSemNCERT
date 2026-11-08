const fs = require('fs');
const file = 'c:/Users/Manoj/nextsemorg/NextSemNCERT/src/components/NavigationDrawer.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('/studyguide-by-nextsem-logo.jpg', '/ncert-by-nextsem-logo.png');
content = content.replace("border: '1.5px solid #00e676'", "border: '1.5px solid #4f46e5'");
content = content.replace("background: '#050b14'", "background: '#090d16'");
content = content.replace("objectFit: 'cover'", "objectFit: 'contain'");

content = content.replace(">StudyGuide<", ">NCERT<");
content = content.replace(">by Nextsem<", ">by NextSem<");
content = content.replace("StudyGuide", "NCERT");
content = content.replace("by Nextsem", "by NextSem");

fs.writeFileSync(file, content, 'utf8');
console.log('NavigationDrawer successfully updated with new logo');

