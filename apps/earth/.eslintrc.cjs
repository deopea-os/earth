/**
 * @type {import("@typescript-eslint/utils").TSESLint.Linter.Config}
 */
module.exports = {
  extends: ["@deopea.os/eslint-config/qwik"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json",
      "./tsconfig.eslint.json",
      "./src/server/tsconfig.json",
    ],
  },
};
