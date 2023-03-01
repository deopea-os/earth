import { join, resolve } from "node:path";
import dotenv = require("dotenv-vault-core");

const { error, parsed } = dotenv.config();

if (error || !parsed) {
  console.error("config_not_initialised");
  process.exit(1);
}

export const {
  PORT = "4040",
  DIST_DIR = resolve("dist"),
  BUILD_DIR = join(DIST_DIR, "build"),
} = parsed;
