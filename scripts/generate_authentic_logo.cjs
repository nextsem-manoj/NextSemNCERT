const sharp = require('sharp');
const path = require('path');

async function processOfficialLogo() {
  const rootDir = 'c:/Users/Manoj/nextsemorg/NextSemNCERT';
  const ncertImagePath = path.join(rootDir, 'docs/images for reference/NCERT.png');

  // Modern circular emblem with subtle inner gradient and crisp text typography
  const svgOverlay = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#182344" stop-opacity="0.95"/>
          <stop offset="65%" stop-color="#0b101d" stop-opacity="0.98"/>
          <stop offset="100%" stop-color="#060912" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6366f1"/>
          <stop offset="50%" stop-color="#4f46e5"/>
          <stop offset="100%" stop-color="#10b981"/>
        </linearGradient>
      </defs>

      <!-- Background Squircle / Rounded Container -->
      <rect x="16" y="16" width="480" height="480" rx="112" fill="url(#bgGrad)"/>
      <rect x="16" y="16" width="480" height="480" rx="112" fill="none" stroke="url(#ringGrad)" stroke-width="4.5" opacity="0.95"/>
      <rect x="22" y="22" width="468" height="468" rx="106" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5"/>

      <!-- Clean Crisp White Disc for the authentic NCERT emblem (properly proportioned) -->
      <circle cx="256" cy="188" r="128" fill="#ffffff" filter="drop-shadow(0 8px 18px rgba(0,0,0,0.45))"/>
      <circle cx="256" cy="188" r="128" fill="none" stroke="#4f46e5" stroke-width="2.5" opacity="0.6"/>
      
      <!-- Brand Typography: NCERT -->
      <text x="256" y="380" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="900" letter-spacing="0.08em" fill="#ffffff">NCERT</text>
      
      <!-- Sub-Branding: by NextSem -->
      <text x="256" y="422" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" letter-spacing="0.22em" fill="#10b981">BY NEXTSEM</text>
      
      <!-- Tagline -->
      <text x="256" y="452" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.16em" fill="#94a3b8">NEP 2026 • DIGITAL REPOSITORY</text>
    </svg>
  `);

  // Resize authentic NCERT emblem so it fits cleanly with breathing margins inside the white disc
  const emblemBuffer = await sharp(ncertImagePath)
    .resize({ width: 145, height: 210, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toBuffer();

  const outputPath = path.join(rootDir, 'public/ncert-by-nextsem-logo.png');

  await sharp(svgOverlay)
    .composite([
      {
        input: emblemBuffer,
        top: 83,
        left: 184
      }
    ])
    .png({ quality: 100 })
    .toFile(outputPath);

  console.log('Successfully created refined authentic logo at', outputPath);
}

processOfficialLogo().catch(console.error);
