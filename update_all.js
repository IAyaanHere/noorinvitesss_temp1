const fs = require('fs');

function updateJS() {
  const path = './assets/index---pnKFX2.js';
  if (!fs.existsSync(path)) return;
  let text = fs.readFileSync(path, 'utf8');

  // Replace family names
  text = text.replace(/Syed(?:\\x20|\s+)Aqib/g, 'Tariq Sheikh');
  text = text.replace(/Syed(?:\\x20|\s+)Farhan/g, 'Imran Khan');
  text = text.replace(/Syed(?:\\x20|\s+)Zaker(?:\\x20|\s+)Arif/g, 'Zakir Qureshi');
  text = text.replace(/Mrs\.(?:\\x20|\s+)&(?:\\x20|\s+)Mr\.(?:\\x20|\s+)Dr\.(?:\\x20|\s+)Syed(?:\\x20|\s+)Shaker(?:\\x20|\s+)Arif/g, 'Mrs. & Mr. Dr. Shakir Qureshi');
  text = text.replace(/Syed(?:\\x20|\s+)Atif/g, 'Atif Ansari');
  text = text.replace(/Mrs\.(?:\\x20|\s+)&(?:\\x20|\s+)Mr\.(?:\\x20|\s+)Syed(?:\\x20|\s+)Azam(?:\\x20|\s+)Sahab/g, 'Mrs. & Mr. Azam Baig');
  text = text.replace(/Syed(?:\\x20|\s+)Sajid(?:\\x20|\s+)Arif/g, 'Sajid Qureshi');
  
  // Generic replacements
  text = text.replace(/Syed/g, 'Sheikh');
  text = text.replace(/Arif/g, 'Qureshi');

  // Locations
  text = text.replace(/Nanded/g, 'Nagpur');
  text = text.replace(/Shobha(?:\\x20|\s+)Nagar/g, 'Sadar Bazar');
  text = text.replace(/Maltekdi/g, 'Mominpura');
  text = text.replace(/Prince(?:\\x20|\s+)Lawns(?:\\x20|\s+)Function(?:\\x20|\s+)Hall/g, 'Taj Mahal Function Hall');
  text = text.replace(/Nizam(?:\\x20|\s+)Palace(?:\\x20|\s+)Function(?:\\x20|\s+)Hall/g, 'Royal Palace Function Hall');
  text = text.replace(/Masjid-e-Ilahi/g, 'Jama Masjid');

  fs.writeFileSync(path, text, 'utf8');
  console.log('JS updated successfully.');
}

function updateCSS() {
  const cssPath = './assets/index-AtXG-c85.css';
  if (!fs.existsSync(cssPath)) return;
  let text = fs.readFileSync(cssPath, 'utf8');

  // Change theme colors from Pink/Magenta to Green/Gold
  text = text.replace(/#c43360/gi, '#2c5f2d');
  text = text.replace(/#e5a0ae/gi, '#97bc62');
  text = text.replace(/#ff758c/gi, '#d4af37');
  text = text.replace(/#f3b6c3/gi, '#f3e5ab');
  text = text.replace(/#ffb6c1/gi, '#ffd700');

  fs.writeFileSync(cssPath, text, 'utf8');
  console.log('CSS theme updated successfully.');
}

updateJS();
updateCSS();
