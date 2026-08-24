const axios = require('axios');
const fs = require('fs');

async function downloadAndReplace() {
  console.log('Downloading original JS...');
  const res = await axios.get('https://syedsaimatasneem-syednizamuddin-wedding.vercel.app/assets/index---pnKFX2.js');
  let text = res.data;

  console.log('Applying replacements...');

  // Bride & Groom
  text = text.replace(/Syed(?:\\x20|\s+)Nizamuddin/g, 'Zain Malik');
  text = text.replace(/Nizamuddin/g, 'Zain Malik');
  text = text.replace(/Syed(?:\\x20|\s+)Saima(?:\\x20|\s+)Tasneem/g, 'Ayesha Siddiqui');
  text = text.replace(/Saima(?:\\x20|\s+)Tasneem/g, 'Ayesha Siddiqui');
  
  // Fathers
  text = text.replace(/Mrs\.(?:\\x20|\s+)&(?:\\x20|\s+)Mr\.(?:\\x20|\s+)Dr\.(?:\\x20|\s+)Syed(?:\\x20|\s+)Shaker(?:\\x20|\s+)Arif/g, 'Salman Malik');
  text = text.replace(/Mrs\.(?:\\x20|\s+)&(?:\\x20|\s+)Mr\.(?:\\x20|\s+)Syed(?:\\x20|\s+)Azam(?:\\x20|\s+)Sahab/g, 'Riyaz Siddiqui');

  // Other Family Members
  text = text.replace(/Syed(?:\\x20|\s+)Aqib/g, 'Tariq Khan');
  text = text.replace(/Syed(?:\\x20|\s+)Farhan/g, 'Imran Shaikh');
  text = text.replace(/Syed(?:\\x20|\s+)Zaker(?:\\x20|\s+)Arif/g, 'Zakir Khan');
  text = text.replace(/Syed(?:\\x20|\s+)Atif/g, 'Atif Shaikh');
  text = text.replace(/Syed(?:\\x20|\s+)Sajid(?:\\x20|\s+)Arif/g, 'Sajid Khan');
  
  // Catch all remaining family names
  text = text.replace(/Syed/g, 'Shaikh');
  text = text.replace(/Arif/g, 'Khan');

  // Locations
  text = text.replace(/Nanded/g, 'Nagpur');
  text = text.replace(/Shobha(?:\\x20|\s+)Nagar/g, 'Sadar Bazar');
  text = text.replace(/Maltekdi/g, 'Mominpura');
  text = text.replace(/Prince(?:\\x20|\s+)Lawns(?:\\x20|\s+)Function(?:\\x20|\s+)Hall/g, 'Taj Mahal Function Hall');
  text = text.replace(/Nizam(?:\\x20|\s+)Palace(?:\\x20|\s+)Function(?:\\x20|\s+)Hall/g, 'Royal Palace Function Hall');
  text = text.replace(/Masjid-e-Ilahi/g, 'Jama Masjid');
  text = text.replace(/Hyderabad/g, 'Nagpur');
  text = text.replace(/Telangana/g, 'Maharashtra');

  // Footer / Instagram
  text = text.replace(/https:\/\/www\.instagram\.com\/awesome__creation\//g, 'https://www.instagram.com/noorinvitesss/');
  text = text.replace(/@awesome__creation/g, '@noorinvitesss');
  text = text.replace(/awesome__creation/g, 'noorinvitesss');

  fs.writeFileSync('./assets/index---pnKFX2.js', text, 'utf8');
  console.log('Successfully updated everything with random names.');
}

downloadAndReplace();
