const fs = require('fs');

// Read the package.json file
const packageJsonPath = 'dist/libs/core/src/package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Replace the exported paths
const updatedPaths = Object.keys(packageJson.exports).reduce((acc, key) => {
  const updatedPath = packageJson.exports[key].replace('src/', '');
  acc[key] = updatedPath;
  return acc;
}, {});

// Update the package.json file
packageJson.exports = updatedPaths;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Export paths updated successfully!');
