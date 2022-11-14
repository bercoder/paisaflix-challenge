module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:@next/next/recommended",
    "next",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {},
};
