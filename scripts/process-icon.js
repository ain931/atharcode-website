/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processStandaloneIcon() {
  const inputPath = 'C:/Users/A-Nassar/.gemini/antigravity/brain/7b47f42d-a125-49dd-a39f-8ae97d26f10b/.user_uploaded/media_1790349952735.png';
  
  const targetDir = path.join(__dirname, '../public/brand');
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  fs.copyFileSync(inputPath, path.join(targetDir, 'icon-uploaded-original.png'));

  // Extract the exact mark from the uploaded standalone icon image
  const { data, info } = await sharp(inputPath)
    .extract({ left: 32, top: 36, width: 153, height: 136 })
    .resize(459, 408, { kernel: sharp.kernel.lanczos3 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const len = info.width * info.height;
  const darkBuf = Buffer.alloc(len * 4);
  const lightBuf = Buffer.alloc(len * 4);

  const bgLum = 244;
  const minLum = 36;

  // Target brand Ebony (#414833 -> 65, 72, 51) and Bone (#FDFCF9 -> 253, 252, 249)
  const darkR = 65, darkG = 72, darkB = 51;
  const lightR = 253, lightG = 252, lightB = 249;

  for (let i = 0; i < len; i++) {
    const srcIdx = i * info.channels;
    const dstIdx = i * 4;
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    let alpha = 0;
    if (lum < bgLum - 8) {
      alpha = Math.min(255, Math.max(0, ((bgLum - 8 - lum) / (bgLum - 8 - minLum)) * 255));
    }
    alpha = Math.pow(alpha / 255, 0.9) * 255;
    const a = Math.round(alpha);

    darkBuf[dstIdx] = darkR;
    darkBuf[dstIdx + 1] = darkG;
    darkBuf[dstIdx + 2] = darkB;
    darkBuf[dstIdx + 3] = a;

    lightBuf[dstIdx] = lightR;
    lightBuf[dstIdx + 1] = lightG;
    lightBuf[dstIdx + 2] = lightB;
    lightBuf[dstIdx + 3] = a;
  }

  const darkIconPath = path.join(targetDir, 'icon-standalone-dark.png');
  const lightIconPath = path.join(targetDir, 'icon-standalone-light.png');

  await sharp(darkBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(darkIconPath);

  await sharp(lightBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(lightIconPath);

  // Create clean 512x512 rounded square App/Favicon matching the exact uploaded image
  const size = 512;
  const svgStr = '<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="12" width="488" height="488" rx="96" fill="#FAF6EC" stroke="#E2DAC7" stroke-width="6"/></svg>';
  const svgRoundedBg = Buffer.from(svgStr);

  const resizedMark = await sharp(darkIconPath)
    .resize({ width: 360, height: 360, fit: 'inside' })
    .toBuffer();

  const markMeta = await sharp(resizedMark).metadata();
  const leftOff = Math.round((size - markMeta.width) / 2);
  const topOff = Math.round((size - markMeta.height) / 2);

  const appIconPath = path.join(targetDir, 'app-icon-512.png');
  await sharp(svgRoundedBg)
    .composite([{ input: resizedMark, left: leftOff, top: topOff }])
    .png()
    .toFile(appIconPath);

  const iconPngPath = path.join(__dirname, '../src/app/icon.png');
  const faviconIcoPublic = path.join(__dirname, '../public/favicon.ico');
  const faviconIcoSrc = path.join(__dirname, '../src/app/favicon.ico');

  await sharp(appIconPath).resize(64, 64).png().toFile(iconPngPath);
  await sharp(appIconPath).resize(32, 32).png().toFile(faviconIcoPublic);
  fs.copyFileSync(faviconIcoPublic, faviconIcoSrc);

  console.log('Successfully generated exact standalone icons and favicons from uploaded image!');
}

processStandaloneIcon().catch(console.error);
