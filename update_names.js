const fs = require('fs');
const path = './assets/index---pnKFX2.js';

let text = fs.readFileSync(path, 'utf8');

// Replace Syed Nizamuddin (and hex escaped variations) with Ali
text = text.replace(/Syed(?:\\x20|\s+)Nizamuddin/g, 'Ali');
// Replace Syed Saima Tasneem with Fatima
text = text.replace(/Syed(?:\\x20|\s+)Saima(?:\\x20|\s+)Tasneem/g, 'Fatima');

// Catch any remaining standalone occurrences just in case
text = text.replace(/Nizamuddin/g, 'Ali');
text = text.replace(/Saima(?:\\x20|\s+)Tasneem/g, 'Fatima');
text = text.replace(/Saima/g, 'Fatima');

fs.writeFileSync(path, text, 'utf8');
console.log('Successfully updated names in JS bundle.');
