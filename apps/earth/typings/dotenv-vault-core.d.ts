declare module "dotenv-vault-core" {
  import dotenv = require("dotenv");
  declare function decrypt(encrypted: string, key: string): string;
  export = { config: dotenv.config, decrypt };
}
