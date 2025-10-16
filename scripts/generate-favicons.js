const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const publicDir = path.join(__dirname, '../public');
  
  // Create a base logo with white background for favicon
  const logoSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="white"/>
      <g transform="translate(128, 128) scale(6.4, 6.4)">
        <!-- Left side: Data bars -->
        <g>
          <rect x="8" y="22" width="3" height="8" fill="#6366f1" opacity="0.4" />
          <rect x="13" y="18" width="3" height="12" fill="#6366f1" opacity="0.6" />
          <rect x="18" y="14" width="3" height="16" fill="#6366f1" opacity="0.8" />
        </g>
        
        <!-- Right side: Heart shape -->
        <g transform="translate(24, 14)">
          <path
            d="M 6 2
               C 6 0.5, 4.5 0, 3 0
               C 1.5 0, 0 0.5, 0 2
               C 0 3.5, 3 7, 6 10
               C 9 7, 12 3.5, 12 2
               C 12 0.5, 10.5 0, 9 0
               C 7.5 0, 6 0.5, 6 2 Z"
            fill="#ec4899"
            opacity="0.9"
          />
        </g>
        
        <!-- Transformation indicator: gradient fade -->
        <defs>
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#ec4899;stop-opacity:0" />
          </linearGradient>
        </defs>
        
        <!-- Connecting element -->
        <rect x="21" y="20" width="3" height="2" fill="url(#fadeGradient)" />
      </g>
    </svg>
  `;

  // Generate base PNG from SVG
  const basePng = await sharp(Buffer.from(logoSvg))
    .png()
    .toBuffer();

  // Generate various favicon sizes
  const sizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' }
  ];

  for (const { size, name } of sizes) {
    await sharp(basePng)
      .resize(size, size)
      .toFile(path.join(publicDir, name));
    console.log(`Generated ${name}`);
  }

  // Generate favicon.ico (multi-resolution)
  await sharp(basePng)
    .resize(32, 32)
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Generated favicon.ico');

  // Generate Open Graph image
  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <!-- Gradient background -->
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f0f4ff" />
          <stop offset="100%" style="stop-color:#fce7f3" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bgGradient)"/>
      
      <!-- Logo centered -->
      <g transform="translate(480, 200) scale(6, 6)">
        <!-- Left side: Data bars -->
        <g>
          <rect x="8" y="22" width="3" height="8" fill="#6366f1" opacity="0.4" />
          <rect x="13" y="18" width="3" height="12" fill="#6366f1" opacity="0.6" />
          <rect x="18" y="14" width="3" height="16" fill="#6366f1" opacity="0.8" />
        </g>
        
        <!-- Right side: Heart shape -->
        <g transform="translate(24, 14)">
          <path
            d="M 6 2
               C 6 0.5, 4.5 0, 3 0
               C 1.5 0, 0 0.5, 0 2
               C 0 3.5, 3 7, 6 10
               C 9 7, 12 3.5, 12 2
               C 12 0.5, 10.5 0, 9 0
               C 7.5 0, 6 0.5, 6 2 Z"
            fill="#ec4899"
            opacity="0.9"
          />
        </g>
        
        <!-- Gradient fade -->
        <defs>
          <linearGradient id="fadeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#ec4899;stop-opacity:0" />
          </linearGradient>
        </defs>
        
        <!-- Connecting element -->
        <rect x="21" y="20" width="3" height="2" fill="url(#fadeGradient2)" />
      </g>
      
      <!-- Text -->
      <text x="600" y="480" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="bold" text-anchor="middle" fill="#1f2937">Wivvy</text>
      <text x="600" y="530" font-family="system-ui, -apple-system, sans-serif" font-size="28" text-anchor="middle" fill="#6b7280">Turn User Behavior into Emotional Insights</text>
    </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png');

  // Create site.webmanifest
  const manifest = {
    name: 'Wivvy',
    short_name: 'Wivvy',
    description: 'Turn User Behavior into Emotional Insights',
    theme_color: '#6366f1',
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };

  await fs.writeFile(
    path.join(publicDir, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('Generated site.webmanifest');
}

generateFavicons().catch(console.error);