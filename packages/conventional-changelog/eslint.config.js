import deopea from "@deopea.os/eslint-config";

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export default [
  ...deopea.configs.node, 
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
