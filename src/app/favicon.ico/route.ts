import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

// Force the browser/CDN to re-fetch the favicon without stale caching.
// This helps when older HTML deployments are still cached at the edge.
export async function GET() {
  const filePath = path.join(process.cwd(), "public", "favicon.ico");
  if (!fs.existsSync(filePath)) {
    return new Response(null, { status: 404 });
  }

  const buffer = fs.readFileSync(filePath);

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/x-icon",
      // Safari/iOS can be aggressive about favicon caching and may ignore query params.
      "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}

