const fs = require("fs");
const path = require("path");

function safeCopy(src, dest) {
  try {
    if (fs.existsSync(src)) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
      console.log(`Copied ${src} -> ${dest}`);
    } else {
      console.warn(`Source not found: ${src}`);
    }
  } catch (err) {
    console.error(`Failed to copy ${src} -> ${dest}:`, err.message);
  }
}

const projectRoot = path.join(__dirname, "..");
const distFolder = path.join(projectRoot, "dist", "folder");
const browserFolder = path.join(distFolder, "browser");

const csrIndex = path.join(browserFolder, "index.csr.html");
const browserIndex = path.join(browserFolder, "index.html");
const rootIndex = path.join(distFolder, "index.html");
const browser404 = path.join(browserFolder, "404.html");
const root404 = path.join(distFolder, "404.html");

safeCopy(csrIndex, browserIndex);
// copy browser index to root so angular-cli-ghpages finds it when using dist/folder
safeCopy(csrIndex, rootIndex);

// if browser/404.html exists, copy it as well
safeCopy(browser404, root404);

console.log("postbuild script completed");

// Also copy all files from browserFolder into distFolder root so assets (main-*.js, polyfills-*.js, styles-*.css)
// are available at the root where index.html expects them.
try {
  if (fs.existsSync(browserFolder)) {
    const entries = fs.readdirSync(browserFolder, { withFileTypes: true });
    entries.forEach((entry) => {
      const srcPath = path.join(browserFolder, entry.name);
      const destPath = path.join(distFolder, entry.name);
      if (entry.isDirectory()) {
        // copy directory recursively
        fs.cpSync(srcPath, destPath, { recursive: true });
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
    console.log(`Copied browser/ contents into ${distFolder}`);
  }
} catch (err) {
  console.error("Failed to copy browser contents to dist root:", err.message);
}
