module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};
