import { join, resolve } from "node:path";

// eslint-disable-next-line turbo/no-undeclared-env-vars
export const PORT = parseInt(process.env.PORT ?? "3000");

// Directories where the static assets are located
export const DIST_DIR = resolve("dist");
export const BUILD_DIR = join(DIST_DIR, "build");
