module.exports = {
  "**/*.{js,jsx,ts,tsx}": [
    "npm run check-format",
    "npm run format",
    "npm run check-lint:fix",
    "npm run check-lint",
  ],
};
