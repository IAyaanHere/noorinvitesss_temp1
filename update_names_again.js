const fs = require('fs');
const path = './assets/index---pnKFX2.js';

let text = fs.readFileSync(path, 'utf8');

// Replace Groom
text = text.replace(/Syed(?:\\x20|\s+)Nizamuddin/g, 'Er Mohammad Ayaan');
text = text.replace(/Nizamuddin/g, 'Er Mohammad Ayaan');

// Replace Bride
text = text.replace(/Syed(?:\\x20|\s+)Saima(?:\\x20|\s+)Tasneem/g, 'MB Aliya Khan');
text = text.replace(/Saima(?:\\x20|\s+)Tasneem/g, 'MB Aliya Khan');
text = text.replace(/Saima/g, 'MB Aliya Khan'); // if Saima appears alone

// Replace Groom's Father (Assuming Dr. Syed Shaker Arif is Groom's father)
// The user asked for "Mohammad Aarif"
text = text.replace(/Dr\.(?:\\x20|\s+)Syed(?:\\x20|\s+)Shaker(?:\\x20|\s+)Arif/g, 'Mohammad Aarif');
text = text.replace(/Syed(?:\\x20|\s+)Shaker(?:\\x20|\s+)Arif/g, 'Mohammad Aarif');

// Replace Bride's Father (Assuming Syed Azam Sahab is Bride's father)
// The user asked for "Waqeel Khan"
text = text.replace(/Syed(?:\\x20|\s+)Azam(?:\\x20|\s+)Sahab/g, 'Waqeel Khan');

fs.writeFileSync(path, text, 'utf8');
console.log('Names updated successfully.');
