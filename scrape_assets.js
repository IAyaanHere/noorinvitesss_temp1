const axios = require('axios');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://syedsaimatasneem-syednizamuddin-wedding.vercel.app';

async function fetchURL(url) {
  try {
    const res = await axios.get(url, { responseType: 'text' });
    return res.data;
  } catch (e) {
    console.error('Error fetching ' + url + ':', e.message);
    return '';
  }
}

async function start() {
  console.log('Fetching index...');
  const html = await fetchURL(BASE_URL);
  
  const paths = new Set();
  const regex = /(?:assets|media)\/[^"'\s\)\\?#]+\.(?:png|jpg|jpeg|gif|svg|mp4|css|js|webp)/g;
  
  let match;
  while ((match = regex.exec(html)) !== null) {
    paths.add('/' + match[0]);
  }

  // Find all JS/CSS in HTML and fetch them to find more assets
  const jsCssPaths = Array.from(paths).filter(p => p.endsWith('.js') || p.endsWith('.css'));
  for (let p of jsCssPaths) {
    console.log('Scanning ' + p + ' for more assets...');
    const assetContent = await fetchURL(BASE_URL + p);
    let m;
    while ((m = regex.exec(assetContent)) !== null) {
      paths.add('/' + m[0]);
    }
  }
  
  console.log('Found assets:', Array.from(paths));
  
  for (let p of paths) {
    const localPath = path.join(__dirname, p.replace(/\//g, path.sep));
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    try {
      console.log(`Downloading ${p}...`);
      const response = await axios({
        url: BASE_URL + p,
        method: 'GET',
        responseType: 'stream'
      });
      const writer = fs.createWriteStream(localPath);
      response.data.pipe(writer);
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
      console.log(`Successfully saved ${p}`);
    } catch (e) {
      console.error(`Failed ${p}: ${e.message}`);
    }
  }
  console.log('Done downloading all discovered assets.');
}

start();
