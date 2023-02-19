import { join } from "node:path";
import { fileURLToPath } from "node:url";

// eslint-disable-next-line turbo/no-undeclared-env-vars
export const PORT = parseInt(process.env.PORT ?? "3000");

// Directories where the static assets are located
export const DIST_DIR = join(
  fileURLToPath(import.meta.url),
  "..",
  "..",
  "dist",
);
export const BUILD_DIR = join(DIST_DIR, "build");
