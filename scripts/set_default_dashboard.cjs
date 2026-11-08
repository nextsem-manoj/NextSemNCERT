const fs = require('fs');
const file = 'c:/Users/Manoj/nextsemorg/NextSemNCERT/src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Change initialViewMode to DASHBOARD
content = content.replace("let initialViewMode: ViewMode = 'CLASSES';", "let initialViewMode: ViewMode = 'DASHBOARD';");

// 2. Change onHomeClick in Navbar
content = content.replace("onHomeClick={() => navigateTo({ viewMode: 'CLASSES' })}", "onHomeClick={() => navigateTo({ viewMode: 'DASHBOARD' })}");

// 3. Change MobileBottomNav onNavigateHome
content = content.replace("onNavigateHome={() => navigateTo({ viewMode: 'CLASSES' })}", "onNavigateHome={() => navigateTo({ viewMode: 'DASHBOARD' })}");

// 4. Change handleGoBack fallback
content = content.replace("if (viewMode !== 'CLASSES') {\r\n        setViewMode('CLASSES');", "if (viewMode !== 'DASHBOARD') {\r\n        setViewMode('DASHBOARD');");
content = content.replace("if (viewMode !== 'CLASSES') {\n        setViewMode('CLASSES');", "if (viewMode !== 'DASHBOARD') {\n        setViewMode('DASHBOARD');");

// 5. Update breadcrumbs home link to DASHBOARD
content = content.replace("{ label: 'Home', onClick: () => navigateTo({ viewMode: 'CLASSES' }) }", "{ label: 'Home', onClick: () => navigateTo({ viewMode: 'DASHBOARD' }) }");

fs.writeFileSync(file, content, 'utf8');
console.log('App.tsx successfully updated default landing view to DASHBOARD');

