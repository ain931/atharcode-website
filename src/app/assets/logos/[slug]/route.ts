import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const UPLOADED_DIR =
  "C:/Users/A-Nassar/.gemini/antigravity/brain/7b47f42d-a125-49dd-a39f-8ae97d26f10b/.user_uploaded";
const PUBLIC_LOGOS_DIR = "D:/atharcode/wibsite/public/assets/logos";

const LOGO_FILES: Record<
  string,
  { sourceFile: string; publicFile: string; contentType: string }
> = {
  "mawani.png": {
    sourceFile: "media_1790422064839.png",
    publicFile: "mawani.png",
    contentType: "image/png",
  },
  "logo-mawani.png": {
    sourceFile: "media_1790422064839.png",
    publicFile: "mawani.png",
    contentType: "image/png",
  },
  "lucid.png": {
    sourceFile: "media_1790422148871.png",
    publicFile: "lucid.png",
    contentType: "image/png",
  },
  "logo-lucid.png": {
    sourceFile: "media_1790422148871.png",
    publicFile: "lucid.png",
    contentType: "image/png",
  },
  "sanad.png": {
    sourceFile: "media_1790422335297.jpg",
    publicFile: "sanad.png",
    contentType: "image/jpeg",
  },
  "logo-sanad.jpg": {
    sourceFile: "media_1790422335297.jpg",
    publicFile: "sanad.png",
    contentType: "image/jpeg",
  },
  "sica.png": {
    sourceFile: "media_1790422405844.png",
    publicFile: "sica.png",
    contentType: "image/png",
  },
  "logo-sica.png": {
    sourceFile: "media_1790422405844.png",
    publicFile: "sica.png",
    contentType: "image/png",
  },
  "officers-club.png": {
    sourceFile: "media_1790422413201.jpg",
    publicFile: "officers-club.png",
    contentType: "image/jpeg",
  },
  "logo-officers-club.jpg": {
    sourceFile: "media_1790422413201.jpg",
    publicFile: "officers-club.png",
    contentType: "image/jpeg",
  },
};

function syncAllUploadedLogos() {
  try {
    fs.mkdirSync(PUBLIC_LOGOS_DIR, { recursive: true });
    const dataUriMap: Record<string, string> = {};

    for (const [key, meta] of Object.entries(LOGO_FILES)) {
      const src = path.join(UPLOADED_DIR, meta.sourceFile);
      const dest = path.join(PUBLIC_LOGOS_DIR, meta.publicFile);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        const buf = fs.readFileSync(src);
        dataUriMap[key] = `data:${meta.contentType};base64,${buf.toString("base64")}`;
      }
    }

    const tsFilePath = "D:/atharcode/wibsite/src/data/clientLogosData.ts";
    const tsContent = `// Auto-generated from user-uploaded client logos\nexport const CLIENT_LOGO_DATA_URIS: Record<string, string> = ${JSON.stringify(
      dataUriMap,
      null,
      2
    )};\n`;
    fs.writeFileSync(tsFilePath, tsContent, "utf8");
  } catch {
    // Ignore fs errors
  }
}

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(LOGO_FILES).map((slug) => ({ slug }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  syncAllUploadedLogos();

  const { slug } = await context.params;
  if (slug === "sync") {
    const info: Record<string, unknown> = {};
    for (const [k, meta] of Object.entries(LOGO_FILES)) {
      const src = path.join(UPLOADED_DIR, meta.sourceFile);
      if (fs.existsSync(src)) {
        const buf = fs.readFileSync(src);
        if (meta.contentType === "image/png") {
          const w = buf.readUInt32BE(16);
          const h = buf.readUInt32BE(20);
          info[k] = { w, h, size: buf.length };
        } else {
          // JPEG SOF0/SOF2 search
          let w = 0;
          let h = 0;
          let i = 2;
          while (i < buf.length - 8) {
            if (buf[i] === 0xff) {
              const marker = buf[i + 1];
              if (marker >= 0xc0 && marker <= 0xc3) {
                h = buf.readUInt16BE(i + 5);
                w = buf.readUInt16BE(i + 7);
                break;
              }
              const len = buf.readUInt16BE(i + 2);
              i += 2 + len;
            } else {
              i++;
            }
          }
          info[k] = { w, h, size: buf.length };
        }
      }
    }
    return NextResponse.json({ synced: true, info });
  }

  const entry = LOGO_FILES[slug];
  if (entry) {
    try {
      const uploadedSource = path.join(UPLOADED_DIR, entry.sourceFile);
      const publicTarget = path.join(PUBLIC_LOGOS_DIR, entry.publicFile);
      const fileToRead = fs.existsSync(uploadedSource)
        ? uploadedSource
        : publicTarget;

      if (fs.existsSync(fileToRead)) {
        const fileBuffer = fs.readFileSync(fileToRead);
        return new NextResponse(fileBuffer, {
          status: 200,
          headers: {
            "Content-Type": entry.contentType,
            "Cache-Control": "no-store, no-cache, must-revalidate",
          },
        });
      }
    } catch {
      // Ignore read errors
    }
  }

  return new NextResponse("Not Found", { status: 404 });
}
