const fs = require("fs");
const path = require("path");

const browserDir = path.join(__dirname, "..", "dist", "folder", "browser");
const csr = path.join(browserDir, "index.csr.html");
const idx = path.join(browserDir, "index.html");
const f404 = path.join(browserDir, "404.html");

try {
  if (fs.existsSync(csr) && !fs.existsSync(idx)) {
    fs.copyFileSync(csr, idx);
    console.log("Copied index.csr.html -> index.html");
  }
  if (!fs.existsSync(f404) && fs.existsSync(idx)) {
    fs.copyFileSync(idx, f404);
    console.log("Copied index.html -> 404.html");
  }
  // Make base href relative in generated index files to avoid absolute-root asset URLs that break on GitHub Pages
  [idx, f404, csr].forEach((file) => {
    try {
      if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, "utf8");
        // replace occurrences of <base href="/..."> or <base href="/"> with a relative base
        const replaced = content.replace(
          /<base\s+href=("|')\/.*?("|')\s*\/?>/i,
          '<base href="./" />'
        );
        if (replaced !== content) {
          fs.writeFileSync(file, replaced, "utf8");
          console.log(`Rewrote base href in ${path.basename(file)} -> ./`);
        }
      }
    } catch (e) {
      console.error(`failed to rewrite base in ${file}:`, e.message);
    }
  });
} catch (e) {
  console.error("ensure-index failed:", e.message);
}
