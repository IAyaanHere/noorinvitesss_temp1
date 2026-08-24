const axios = require('axios');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://syedsaimatasneem-syednizamuddin-wedding.vercel.app';
const URL_PATHS = [
  '/assets/index---pnKFX2.js',
  '/assets/index-AtXG-c85.css',
  '/assets/bg-CjLQzhxh.jpg',
  '/assets/masjid-CpSqpTFh.png',
  '/assets/ring1-Zb6HDysx.png',
  '/assets/ros-ph1UdlgP.png',
  '/assets/tq-DoE2cUgm.png',
  '/assets/venue-DNGKp-8E.png',
  '/media/curtain-video1.mp4'
];

async function downloadFiles() {
  for (const urlPath of URL_PATHS) {
    // Determine local file path
    const localPath = path.join(__dirname, urlPath.replace(/\//g, path.sep));
    const dir = path.dirname(localPath);

    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    try {
      console.log(`Downloading ${urlPath}...`);
      const response = await axios({
        url: BASE_URL + urlPath,
        method: 'GET',
        responseType: 'stream'
      });

      const writer = fs.createWriteStream(localPath);
      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
      console.log(`Successfully saved ${urlPath}`);
    } catch (error) {
      console.error(`Error downloading ${urlPath}:`, error.message);
    }
  }
  console.log('All downloads completed!');
}

downloadFiles();
