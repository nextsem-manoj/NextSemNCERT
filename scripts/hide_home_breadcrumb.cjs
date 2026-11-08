const fs = require('fs');
const file = 'c:/Users/Manoj/nextsemorg/NextSemNCERT/src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace BreadcrumbAddressBar invocation so that on DASHBOARD and CLASSES (when section is not drilled down) it returns empty array
const oldBreadcrumbCall = '<BreadcrumbAddressBar breadcrumbs={getBreadcrumbs()} />';
const newBreadcrumbCall = '<BreadcrumbAddressBar breadcrumbs={(viewMode === \'DASHBOARD\' || (viewMode === \'CLASSES\' && !activeSection)) ? [] : getBreadcrumbs()} />';

content = content.replace(oldBreadcrumbCall, newBreadcrumbCall);

// Also in getBreadcrumbs, return empty array when on DASHBOARD or root CLASSES
const oldGetBreadcrumbs = 'const getBreadcrumbs = (): Array<{ label: string; onClick?: () => void }> => {\r\n    const crumbs: Array<{ label: string; onClick?: () => void }> = [\r\n      { label: \'Home\', onClick: () => navigateTo({ viewMode: \'CLASSES\' }) }\r\n    ];';
const newGetBreadcrumbs = 'const getBreadcrumbs = (): Array<{ label: string; onClick?: () => void }> => {\r\n    if (viewMode === \'DASHBOARD\' || (viewMode === \'CLASSES\' && !activeSection)) return [];\r\n    const crumbs: Array<{ label: string; onClick?: () => void }> = [\r\n      { label: \'Home\', onClick: () => navigateTo({ viewMode: \'CLASSES\' }) }\r\n    ];';

if (content.includes('const getBreadcrumbs = (): Array<{ label: string; onClick?: () => void }> => {')) {
  content = content.replace(
    'const getBreadcrumbs = (): Array<{ label: string; onClick?: () => void }> => {\n    const crumbs:',
    'const getBreadcrumbs = (): Array<{ label: string; onClick?: () => void }> => {\n    if (viewMode === \'DASHBOARD\' || (viewMode === \'CLASSES\' && !activeSection)) return [];\n    const crumbs:'
  );
  content = content.replace(
    'const getBreadcrumbs = (): Array<{ label: string; onClick?: () => void }> => {\r\n    const crumbs:',
    'const getBreadcrumbs = (): Array<{ label: string; onClick?: () => void }> => {\r\n    if (viewMode === \'DASHBOARD\' || (viewMode === \'CLASSES\' && !activeSection)) return [];\r\n    const crumbs:'
  );
}

fs.writeFileSync(file, content, 'utf8');
console.log('App.tsx updated to hide breadcrumb on home/first visit');

