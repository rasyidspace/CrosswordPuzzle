const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'components', 'pages');

// 1. Rename files backwards from 30 down to 2
for (let i = 30; i >= 2; i--) {
    const files = fs.readdirSync(pagesDir).filter(f => {
        // match exactly Page + i + not a digit
        const regex = new RegExp(`^Page${i}(?!\\d)`);
        return regex.test(f);
    });
    for (const file of files) {
        const oldPath = path.join(pagesDir, file);
        const newFile = file.replace(`Page${i}`, `Page${i + 1}`);
        const newPath = path.join(pagesDir, newFile);
        console.log(`Renaming ${file} to ${newFile}`);
        fs.renameSync(oldPath, newPath);
    }
}

// 2. Replace occurrences in PageRenderer.tsx
const rendererPath = path.join(__dirname, 'src', 'components', 'pages', 'PageRenderer.tsx');
let rendererCode = fs.readFileSync(rendererPath, 'utf8');

for (let i = 30; i >= 2; i--) {
    // Page2(not a digit) -> Page3
    const regex1 = new RegExp(`Page${i}(?!\\d)`, 'g');
    rendererCode = rendererCode.replace(regex1, `Page${i + 1}`);
    
    const regex2 = new RegExp(`case ${i}:`, 'g');
    rendererCode = rendererCode.replace(regex2, `case ${i + 1}:`);
    
    const regex3 = new RegExp(`key="p-${i}"`, 'g');
    rendererCode = rendererCode.replace(regex3, `key="p-${i + 1}"`);
}
fs.writeFileSync(rendererPath, rendererCode);
console.log('Updated PageRenderer.tsx');

// 3. Update Page1Opening.tsx (goToPage(3) -> goToPage(4))
const openingPath = path.join(__dirname, 'src', 'components', 'pages', 'Page1Opening.tsx');
if (fs.existsSync(openingPath)) {
    let openingCode = fs.readFileSync(openingPath, 'utf8');
    openingCode = openingCode.replace('goToPage(3)', 'goToPage(4)');
    fs.writeFileSync(openingPath, openingCode);
    console.log('Updated Page1Opening.tsx');
}

// 4. Update BottomNav.tsx
const bottomNavPath = path.join(__dirname, 'src', 'components', 'layout', 'BottomNav.tsx');
if (fs.existsSync(bottomNavPath)) {
    let bottomNavCode = fs.readFileSync(bottomNavPath, 'utf8');
    for (let i = 30; i >= 2; i--) {
        const regex1 = new RegExp(`case ${i}:`, 'g');
        bottomNavCode = bottomNavCode.replace(regex1, `case ${i + 1}:`);
        
        const regex2 = new RegExp(`goToPage\\(${i}\\)`, 'g');
        bottomNavCode = bottomNavCode.replace(regex2, `goToPage(${i + 1})`);
    }
    fs.writeFileSync(bottomNavPath, bottomNavCode);
    console.log('Updated BottomNav.tsx');
}

// 5. Update HeaderNav.tsx
const headerNavPath = path.join(__dirname, 'src', 'components', 'layout', 'HeaderNav.tsx');
if (fs.existsSync(headerNavPath)) {
    let headerNavCode = fs.readFileSync(headerNavPath, 'utf8');
    for (let i = 30; i >= 2; i--) {
        const regex1 = new RegExp(`currentPage === ${i}`, 'g');
        headerNavCode = headerNavCode.replace(regex1, `currentPage === ${i + 1}`);
        const regex2 = new RegExp(`currentPage >= ${i}`, 'g');
        headerNavCode = headerNavCode.replace(regex2, `currentPage >= ${i + 1}`);
    }
    fs.writeFileSync(headerNavPath, headerNavCode);
    console.log('Updated HeaderNav.tsx');
}

// 6. Update storyboardData.ts
const storyboardPath = path.join(__dirname, 'src', 'data', 'storyboardData.ts');
if (fs.existsSync(storyboardPath)) {
    let storyboardCode = fs.readFileSync(storyboardPath, 'utf8');
    storyboardCode = storyboardCode.replace('totalPages: 30', 'totalPages: 31');
    for (let i = 30; i >= 5; i--) {
        // pageNumber: 5 -> pageNumber: 6
        const regex = new RegExp(`pageNumber: ${i}(?!\\d)`, 'g');
        storyboardCode = storyboardCode.replace(regex, `pageNumber: ${i + 1}`);
    }
    fs.writeFileSync(storyboardPath, storyboardCode);
    console.log('Updated storyboardData.ts');
}

console.log('Shift complete!');
