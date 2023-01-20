declare module "conventional-changelog-conventionalcommits" {
  import type { Config } from "conventional-changelog-config-spec";
  import type {
    ParserOptions,
    WriterOptions,
  } from "conventional-changelog-core";
  import type { Options as RecommendedBumpOptions } from "conventional-recommended-bump";

  export interface ParserWriterOptions {
    parserOpts: ParserOptions;
    writerOpts: WriterOptions;
  }

  export interface ResolvedConfig extends ParserWriterOptions {
    conventionalChangelog: ParserWriterOptions;
    recommendedBumpOpts: RecommendedBumpOptions;
  }

  const config: (config: Config) => ResolvedConfig;
  export = config;
}
