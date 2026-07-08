import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);
function argValue(name, fallback) {
  const idx = args.indexOf(`--${name}`);
  if (idx === -1) return fallback;
  return args[idx + 1];
}

const inputPath = argValue("input");
const outRoot = argValue("out");
const slugsFilter = argValue("slugs");
const apiKey = process.env.GOOGLE_PLACES_API_KEY;

if (!inputPath || !outRoot) {
  console.error("Usage: node scripts/download-business-photos.mjs --input <businesses.json> --out <data/frontends/<run>> [--slugs slug1,slug2]");
  process.exit(1);
}
if (!apiKey) {
  console.error("GOOGLE_PLACES_API_KEY is not set.");
  process.exit(1);
}

const businesses = JSON.parse(await readFile(inputPath, "utf8"));
const filterSet = slugsFilter ? new Set(slugsFilter.split(",")) : null;

function contentTypeToExtension(contentType) {
  if (!contentType) return "jpg";
  if (contentType.includes("png")) return "png";
  if (contentType.includes("webp")) return "webp";
  return "jpg";
}

for (const business of businesses) {
  if (filterSet && !filterSet.has(business.slug)) continue;
  const assetsDir = path.join(outRoot, business.slug, "assets");
  await mkdir(assetsDir, { recursive: true });
  const photos = (business.photos || []).filter((p) => p.usage_status === "allowed");
  let count = 0;
  for (const photo of photos) {
    count += 1;
    const url = new URL(photo.url);
    url.searchParams.set("key", apiKey);
    try {
      const response = await fetch(url.toString(), { redirect: "follow" });
      if (!response.ok) {
        console.warn(`${business.slug}: foto-${count} failed with ${response.status}`);
        continue;
      }
      const ext = contentTypeToExtension(response.headers.get("content-type"));
      const bytes = new Uint8Array(await response.arrayBuffer());
      const filePath = path.join(assetsDir, `foto-${count}.${ext}`);
      await writeFile(filePath, bytes);
      console.log(`${business.slug}: wrote foto-${count}.${ext} (${bytes.length} bytes)`);
    } catch (err) {
      console.warn(`${business.slug}: foto-${count} error`, err.message);
    }
  }
}
