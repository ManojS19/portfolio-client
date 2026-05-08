const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = [
  { name: 'ahrefs.svg', url: 'https://cdn.simpleicons.org/ahrefs/FF6932' },
  { name: 'gsc.svg', url: 'https://cdn.simpleicons.org/googlesearchconsole/4285F4' },
  { name: 'bing.svg', url: 'https://cdn.simpleicons.org/microsoftbing/00B4F0' },
  { name: 'ga4.svg', url: 'https://cdn.simpleicons.org/googleanalytics/E37400' },
  { name: 'gtm.svg', url: 'https://cdn.simpleicons.org/googletagmanager/4285F4' },
  { name: 'looker.svg', url: 'https://cdn.simpleicons.org/looker/4285F4' },
  { name: 'meta.svg', url: 'https://cdn.simpleicons.org/meta/1877F2' },
  { name: 'instagram.svg', url: 'https://cdn.simpleicons.org/instagram/E1306C' },
  { name: 'linkedin.svg', url: 'https://cdn.simpleicons.org/linkedin/0A66C2' },
  { name: 'youtube.svg', url: 'https://cdn.simpleicons.org/youtube/FF0000' },
  { name: 'x.svg', url: 'https://cdn.simpleicons.org/x/ffffff' },
  { name: 'canva.svg', url: 'https://cdn.simpleicons.org/canva/00C4CC' },
  { name: 'msoffice.svg', url: 'https://cdn.simpleicons.org/microsoftoffice/D83B01' },
  { name: 'gmb.svg', url: 'https://cdn.simpleicons.org/google/4285F4' },
  { name: 'googleads.svg', url: 'https://cdn.simpleicons.org/googleads/34A853' },
  { name: 'schema.svg', url: 'https://cdn.simpleicons.org/json/000000' }, // generic code
  { name: 'webvitals.svg', url: 'https://cdn.simpleicons.org/lighthouse/F44B21' },
  { name: 'sitemap.svg', url: 'https://cdn.simpleicons.org/sitecore/EB1C24' },
  { name: 'robots.svg', url: 'https://cdn.simpleicons.org/android/3DDC84' },
  { name: 'link.svg', url: 'https://cdn.simpleicons.org/awesomelists/FC60A8' },
  { name: 'pagespeed.svg', url: 'https://cdn.simpleicons.org/pagespeedinsights/4285F4' },
  { name: 'redirect.svg', url: 'https://cdn.simpleicons.org/purescript/14161A' },
  { name: 'crawl.svg', url: 'https://cdn.simpleicons.org/spiderfoot/FF0000' }
];

const destDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

logos.forEach(logo => {
  const destPath = path.join(destDir, logo.name);
  https.get(logo.url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
    } else {
      console.log('Failed to download: ' + logo.name + ' - ' + res.statusCode);
    }
  }).on('error', (err) => {
    console.log('Error downloading: ' + logo.name, err);
  });
});
console.log("Download started...");
