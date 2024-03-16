# Deopea Earth

Repository for the core of Deopea.

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `eslint-config`: `eslint` configurations for [@deopea](https://github.com/deopea)
- `prettier-config`: `prettier` configuration for [@deopea](https://github.com/deopea)
- `tsconfig`: `typescript` configurations for [@deopea](https://github.com/deopea)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [commitlint]

## Commits

This repo follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

### Commit Types

The commit types are based on [Conventional Changelog Metahub](https://github.com/pvdlg/conventional-changelog-metahub).

| Commit Type | Title                    | Description                                                                                                 | Emoji | Release                  | Include in changelog |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | ----- | ------------------------ | -------------------- |
| feat        | Features                 | A new feature                                                                                               | ✨    | minor                    | true                 |
| fix         | Bug Fixes                | A bug Fix                                                                                                   | 🐛    | patch                    | true                 |
| docs        | Documentation            | Documentation only changes                                                                                  | 📚    | patch if scope is readme | true                 |
| style       | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      | 💎    | -                        | true                 |
| refactor    | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   | 📦    | -                        | true                 |
| perf        | Performance Improvements | A code change that improves performance                                                                     | 🚀    | patch                    | true                 |
| test        | Tests                    | Adding missing tests or correcting existing tests                                                           | 🚨    | -                        | true                 |
| build       | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         | 🛠    | patch                    | true                 |
| ci          | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) | ⚙️    | -                        | true                 |
| config      | Config Changes           | Changes to config files with a scope of the tool the config relates to (e.g. `config(eslint): ....`)        | ⚙️    | -                        | true                 |
| chore       | Chores                   | Other changes that don't modify src or test files                                                           | ♻️    | -                        | true                 |
| revert      | Reverts                  | Reverts a previous commit                                                                                   | 🗑    | -                        | true                 |

### Commit Scopes

Scopes should match the path(s) to the package/app the commit alters.

#### Examples

```markdown
feat(apps/earth): this is a commit for the earth app

....

feat(packages/eslint-config,packages/tsconfig): this is a commit to multiple packages (multi-scoped commits should be avoided when possible)

....

config(apps/earth,eslint): this is a commit that changes the eslint config for the earth app
```

## Commands

### Build

To build all apps and packages, run the following command:

```sh
cd earth
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd earth
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```sh
cd earth
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```sh
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
