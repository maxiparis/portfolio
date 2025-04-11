import fs from "fs";
import path from "path";

// Directory to process (change this as needed)
const directory = "./service/dist"; // Update this to your folder containing the `.ts` files

// Regex pattern to find imports missing the `.js` extension
const importRegex = /import\s+.*?\s+from\s+['"](\..*?)['"];?/g;

/**
 * Recursively process all files in a directory
 * @param {string} dirPath The directory path
 */
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      // Process subdirectories
      processDirectory(fullPath);
    } else if (file.endsWith(".js") || file.endsWith(".ts")) {
      // Process .js or .ts files
      processFile(fullPath);
    }
  });
}

/**
 * Process a single file to update import paths
 * @param {string} filePath The path to the file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  // Replace imports that are missing a `.js` extension
  const updatedContent = content.replace(importRegex, (match, importPath) => {
    // Add `.js` extension only if it's not already there or not a special package
    if (!importPath.endsWith(".js") && !importPath.startsWith("/") && !importPath.match(/\.[a-z]+$/)) {
      return match.replace(importPath, `${importPath}.js`);
    }
    return match;
  });

  // Write back only if content was modified
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, "utf8");
    console.log(`[FIXED] ${filePath}`);
  }
}

// Start processing the directory
processDirectory(directory);

console.log("Import fixes completed!");