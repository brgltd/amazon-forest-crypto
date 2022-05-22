function generateFilename(filename) {
  return `${Date.now()}-${filename}`;
}

module.exports = generateFilename;
