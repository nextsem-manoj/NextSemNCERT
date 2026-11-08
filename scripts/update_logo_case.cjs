const sharp = require('sharp');
const path = require('path');

async function updateLogoCase() {
  const rootDir = 'c:/Users/Manoj/nextsemorg/NextSemNCERT';
  const darkEmblemPath = path.join(rootDir, 'public/emblem-ncert-white.png');
  const lightEmblemPath = path.join(rootDir, 'public/emblem-ncert-dark.png');

  // Dark Logo
  const svgDark = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="darkBg" cx="50%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#141c33" stop-opacity="0.95"/>
          <stop offset="65%" stop-color="#0b101d" stop-opacity="0.98"/>
          <stop offset="100%" stop-color="#070a13" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="darkBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6366f1"/>
          <stop offset="50%" stop-color="#4f46e5"/>
          <stop offset="100%" stop-color="#10b981"/>
        </linearGradient>
      </defs>

      <rect x="16" y="16" width="480" height="480" rx="112" fill="url(#darkBg)"/>
      <rect x="16" y="16" width="480" height="480" rx="112" fill="none" stroke="url(#darkBorder)" stroke-width="4.5" opacity="0.95"/>
      <rect x="22" y="22" width="468" height="468" rx="106" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5"/>

      <!-- Ambient glow behind emblem -->
      <circle cx="256" cy="180" r="100" fill="#4f46e5" opacity="0.22" filter="blur(20px)"/>
      
      <!-- Text: NCERT by NextSem -->
      <text x="256" y="375" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="900" letter-spacing="0.08em" fill="#ffffff">NCERT</text>
      <text x="256" y="420" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" letter-spacing="0.08em" fill="#10b981">by NextSem</text>
      <text x="256" y="450" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.16em" fill="#94a3b8">NEP 2026 • DIGITAL REPOSITORY</text>
    </svg>
  `);

  const darkEmblemResized = await sharp(darkEmblemPath)
    .resize({ width: 170, height: 245, fit: 'contain' })
    .toBuffer();

  await sharp(svgDark)
    .composite([{ input: darkEmblemResized, top: 62, left: 171 }])
    .png({ quality: 100 })
    .toFile(path.join(rootDir, 'public/ncert-logo-dark.png'));

  await sharp(svgDark)
    .composite([{ input: darkEmblemResized, top: 62, left: 171 }])
    .png({ quality: 100 })
    .toFile(path.join(rootDir, 'public/ncert-by-nextsem-logo.png'));

  // Light Logo
  const svgLight = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lightBg" cx="50%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
          <stop offset="70%" stop-color="#f8fafc" stop-opacity="1"/>
          <stop offset="100%" stop-color="#e2e8f0" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="lightBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4f46e5"/>
          <stop offset="60%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#10b981"/>
        </linearGradient>
      </defs>

      <rect x="16" y="16" width="480" height="480" rx="112" fill="url(#lightBg)"/>
      <rect x="16" y="16" width="480" height="480" rx="112" fill="none" stroke="url(#lightBorder)" stroke-width="4.5" opacity="0.85"/>
      <rect x="22" y="22" width="468" height="468" rx="106" fill="none" stroke="rgba(79, 70, 229, 0.12)" stroke-width="1.5"/>

      <!-- Ambient under emblem -->
      <circle cx="256" cy="180" r="100" fill="#4f46e5" opacity="0.06"/>
      
      <!-- Text: NCERT by NextSem -->
      <text x="256" y="375" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="900" letter-spacing="0.08em" fill="#0f172a">NCERT</text>
      <text x="256" y="420" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" letter-spacing="0.08em" fill="#059669">by NextSem</text>
      <text x="256" y="450" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.16em" fill="#64748b">NEP 2026 • DIGITAL REPOSITORY</text>
    </svg>
  `);

  const lightEmblemResized = await sharp(lightEmblemPath)
    .resize({ width: 170, height: 245, fit: 'contain' })
    .toBuffer();

  await sharp(svgLight)
    .composite([{ input: lightEmblemResized, top: 62, left: 171 }])
    .png({ quality: 100 })
    .toFile(path.join(rootDir, 'public/ncert-logo-light.png'));

  console.log('Successfully updated logo text to "by NextSem"');
}

updateLogoCase().catch(console.error);

