const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'components', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.startsWith('Page') && f.endsWith('.tsx'));

for (const file of files) {
    if (file === 'Page1Opening.tsx' || file === 'PageRenderer.tsx') continue;
    
    // Extract the expected name from filename, e.g., Page3Objectives
    const expectedName = file.replace('.tsx', '');
    
    // Previous number is expected number - 1
    const match = expectedName.match(/Page(\d+)/);
    if (!match) continue;
    
    const currentNum = parseInt(match[1], 10);
    const oldNum = currentNum - 1;
    const oldName = expectedName.replace(`Page${currentNum}`, `Page${oldNum}`);
    
    const filePath = path.join(pagesDir, file);
    let code = fs.readFileSync(filePath, 'utf8');
    
    // Replace oldName with expectedName in the file
    // e.g. export const Page2Objectives -> export const Page3Objectives
    const regex = new RegExp(oldName, 'g');
    if (regex.test(code)) {
        code = code.replace(regex, expectedName);
        fs.writeFileSync(filePath, code);
        console.log(`Updated export in ${file}: ${oldName} -> ${expectedName}`);
    }
}
