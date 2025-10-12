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
} catch (e) {
  console.error("ensure-index failed:", e.message);
}
