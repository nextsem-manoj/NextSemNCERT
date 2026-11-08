const sharp = require('sharp');
const path = require('path');

async function generateThemedLogos() {
  const rootDir = 'c:/Users/Manoj/nextsemorg/NextSemNCERT';
  const ncertImagePath = path.join(rootDir, 'docs/images for reference/NCERT.png');

  // ==========================================
  // 🌙 1. DARK THEME LOGO
  // ==========================================
  const svgDark = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="darkBg" cx="50%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#16203d" stop-opacity="0.96"/>
          <stop offset="65%" stop-color="#0c1322" stop-opacity="0.98"/>
          <stop offset="100%" stop-color="#060912" stop-opacity="1"/>
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

      <!-- Clean White Emblem Disc -->
      <circle cx="256" cy="188" r="126" fill="#ffffff" filter="drop-shadow(0 8px 18px rgba(0,0,0,0.5))"/>
      <circle cx="256" cy="188" r="126" fill="none" stroke="#4f46e5" stroke-width="2.5" opacity="0.6"/>
      
      <!-- Text -->
      <text x="256" y="380" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="900" letter-spacing="0.08em" fill="#ffffff">NCERT</text>
      <text x="256" y="422" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" letter-spacing="0.22em" fill="#10b981">BY NEXTSEM</text>
      <text x="256" y="452" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.16em" fill="#94a3b8">NEP 2026 • DIGITAL REPOSITORY</text>
    </svg>
  `);

  // ==========================================
  // ☀️ 2. LIGHT THEME LOGO
  // ==========================================
  const svgLight = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lightBg" cx="50%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
          <stop offset="70%" stop-color="#f1f5f9" stop-opacity="1"/>
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

      <!-- Clean White Emblem Disc with Soft Shadow -->
      <circle cx="256" cy="188" r="126" fill="#ffffff" filter="drop-shadow(0 6px 14px rgba(0,0,0,0.12))"/>
      <circle cx="256" cy="188" r="126" fill="none" stroke="#4f46e5" stroke-width="2.5" opacity="0.4"/>
      
      <!-- Text (High contrast dark slate for light mode) -->
      <text x="256" y="380" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="900" letter-spacing="0.08em" fill="#0f172a">NCERT</text>
      <text x="256" y="422" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" letter-spacing="0.22em" fill="#059669">BY NEXTSEM</text>
      <text x="256" y="452" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.16em" fill="#64748b">NEP 2026 • DIGITAL REPOSITORY</text>
    </svg>
  `);

  const emblemBuffer = await sharp(ncertImagePath)
    .resize({ width: 145, height: 210, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toBuffer();

  // Dark Logo
  await sharp(svgDark)
    .composite([{ input: emblemBuffer, top: 83, left: 184 }])
    .png({ quality: 100 })
    .toFile(path.join(rootDir, 'public/ncert-logo-dark.png'));

  // Also maintain ncert-by-nextsem-logo.png as primary dark
  await sharp(svgDark)
    .composite([{ input: emblemBuffer, top: 83, left: 184 }])
    .png({ quality: 100 })
    .toFile(path.join(rootDir, 'public/ncert-by-nextsem-logo.png'));

  // Light Logo
  await sharp(svgLight)
    .composite([{ input: emblemBuffer, top: 83, left: 184 }])
    .png({ quality: 100 })
    .toFile(path.join(rootDir, 'public/ncert-logo-light.png'));

  console.log('Successfully generated public/ncert-logo-dark.png and public/ncert-logo-light.png');
}

generateThemedLogos().catch(console.error);

