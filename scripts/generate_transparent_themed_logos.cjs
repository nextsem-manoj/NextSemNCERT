const sharp = require('sharp');
const path = require('path');

async function makeTransparentEmblems() {
  const rootDir = 'c:/Users/Manoj/nextsemorg/NextSemNCERT';
  const ncertImagePath = path.join(rootDir, 'docs/images for reference/NCERT.png');

  // Load raw pixels of NCERT.png
  const { data, info } = await sharp(ncertImagePath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;

  // 1. Create Transparent Dark Version (white artwork, transparent bg)
  const darkData = Buffer.alloc(width * height * 4);
  // 2. Create Transparent Light Version (black/dark-indigo artwork, transparent bg)
  const lightData = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    const brightness = (r + g + b) / 3;

    // In NCERT.png, background is white (~255) and emblem artwork is black (~0)
    // Opacity of the artwork is inverted brightness: 255 - brightness
    const alpha = Math.max(0, Math.min(255, 255 - brightness));

    // Dark Mode Emblem: Crisp pure white artwork on transparent background
    darkData[i * 4] = 255;       // R
    darkData[i * 4 + 1] = 255;   // G
    darkData[i * 4 + 2] = 255;   // B
    darkData[i * 4 + 3] = alpha > 40 ? Math.min(255, Math.floor(alpha * 1.2)) : 0; // Alpha

    // Light Mode Emblem: Deep Slate (#0f172a) artwork on transparent background
    lightData[i * 4] = 15;       // R
    lightData[i * 4 + 1] = 23;   // G
    lightData[i * 4 + 2] = 42;   // B
    lightData[i * 4 + 3] = alpha > 40 ? Math.min(255, Math.floor(alpha * 1.2)) : 0; // Alpha
  }

  // Save isolated transparent emblems
  const darkEmblemPath = path.join(rootDir, 'public/emblem-ncert-white.png');
  const lightEmblemPath = path.join(rootDir, 'public/emblem-ncert-dark.png');

  await sharp(darkData, { raw: { width, height, channels: 4 } }).png().toFile(darkEmblemPath);
  await sharp(lightData, { raw: { width, height, channels: 4 } }).png().toFile(lightEmblemPath);

  console.log('Saved transparent emblems:', darkEmblemPath, lightEmblemPath);

  // ========================================================
  // 🌙 MASTER LOGO: DARK THEME (Pure Dark Background without white circle!)
  // ========================================================
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
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      <rect x="16" y="16" width="480" height="480" rx="112" fill="url(#darkBg)"/>
      <rect x="16" y="16" width="480" height="480" rx="112" fill="none" stroke="url(#darkBorder)" stroke-width="4.5" opacity="0.95"/>
      <rect x="22" y="22" width="468" height="468" rx="106" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5"/>

      <!-- Ambient glow behind emblem -->
      <circle cx="256" cy="180" r="100" fill="#4f46e5" opacity="0.22" filter="blur(20px)"/>
      
      <!-- Text -->
      <text x="256" y="375" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="900" letter-spacing="0.08em" fill="#ffffff">NCERT</text>
      <text x="256" y="420" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" letter-spacing="0.22em" fill="#10b981">BY NEXTSEM</text>
      <text x="256" y="450" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.16em" fill="#94a3b8">NEP 2026 • DIGITAL REPOSITORY</text>
    </svg>
  `);

  // Resize white emblem for dark background
  const darkEmblemResized = await sharp(darkEmblemPath)
    .resize({ width: 170, height: 245, fit: 'contain' })
    .toBuffer();

  await sharp(svgDark)
    .composite([{ input: darkEmblemResized, top: 62, left: 171 }])
    .png({ quality: 100 })
    .toFile(path.join(rootDir, 'public/ncert-logo-dark.png'));

  // Also write to ncert-by-nextsem-logo.png
  await sharp(svgDark)
    .composite([{ input: darkEmblemResized, top: 62, left: 171 }])
    .png({ quality: 100 })
    .toFile(path.join(rootDir, 'public/ncert-by-nextsem-logo.png'));

  // ========================================================
  // ☀️ MASTER LOGO: LIGHT THEME (Clean Pure Light Background)
  // ========================================================
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

      <!-- Subtle Soft Ambient under emblem -->
      <circle cx="256" cy="180" r="100" fill="#4f46e5" opacity="0.06"/>
      
      <!-- Text (Deep Slate & Forest Emerald for Light Mode) -->
      <text x="256" y="375" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="900" letter-spacing="0.08em" fill="#0f172a">NCERT</text>
      <text x="256" y="420" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" letter-spacing="0.22em" fill="#059669">BY NEXTSEM</text>
      <text x="256" y="450" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="0.16em" fill="#64748b">NEP 2026 • DIGITAL REPOSITORY</text>
    </svg>
  `);

  // Resize dark emblem for light background
  const lightEmblemResized = await sharp(lightEmblemPath)
    .resize({ width: 170, height: 245, fit: 'contain' })
    .toBuffer();

  await sharp(svgLight)
    .composite([{ input: lightEmblemResized, top: 62, left: 171 }])
    .png({ quality: 100 })
    .toFile(path.join(rootDir, 'public/ncert-logo-light.png'));

  console.log('Seamless Dark & Light theme-adaptive logos created successfully!');
}

makeTransparentEmblems().catch(console.error);

