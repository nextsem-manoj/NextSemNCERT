/**
 * Google Drive Auto-Sync Tool for NextSem NCERT
 * Extracts real Google Drive File IDs from local DriveFS SQLite database
 * and generates mapped drivePdfMap.json for instant in-app previews
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SQLITE_BIN = 'C:\\Android\\sdk\\platform-tools\\sqlite3.exe';
const DRIVEFS_BASE = 'C:\\Users\\Manoj\\AppData\\Local\\Google\\DriveFS\\102336277083674656028\\metadata_sqlite_db';
const TEMP_DB = path.join(__dirname, 'temp_sync_meta.db');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'drivePdfMap.json');

console.log('🔍 Starting Google Drive Real IDs Extractor...');

if (!fs.existsSync(DRIVEFS_BASE)) {
  console.error(`❌ DriveFS database not found at: ${DRIVEFS_BASE}`);
  process.exit(1);
}

// Copy DB to avoid lock conflicts
fs.copyFileSync(DRIVEFS_BASE, TEMP_DB);

try {
  const query = "SELECT id, local_title FROM items WHERE local_title LIKE '%.pdf' AND trashed = 0;";
  const rawOutput = execSync(`"${SQLITE_BIN}" "${TEMP_DB}" "${query}"`, { encoding: 'utf-8', maxBuffer: 1024 * 1024 * 50 });
  
  const lines = rawOutput.split('\n');
  const fileMap = {};
  let totalCount = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const [driveId, title] = trimmed.split('|');
    if (!driveId || !title) continue;

    const lowerTitle = title.toLowerCase().trim();
    const baseCode = path.basename(lowerTitle, '.pdf');

    fileMap[baseCode] = {
      name: title,
      driveId: driveId.trim(),
      previewUrl: `https://drive.google.com/file/d/${driveId.trim()}/preview`,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${driveId.trim()}`
    };
    totalCount++;
  }

  const outputData = {
    lastSyncedAt: new Date().toISOString(),
    totalPdfs: totalCount,
    files: fileMap
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(outputData, null, 2), 'utf-8');
  console.log(`✅ Success! Extracted ${totalCount} real Google Drive File IDs into:`);
  console.log(`   ${OUTPUT_FILE}`);
} finally {
  if (fs.existsSync(TEMP_DB)) {
    fs.unlinkSync(TEMP_DB);
  }
}
