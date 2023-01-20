import assert from "node:assert";
import { describe, it } from "node:test";
import commitlintConfig from "../commitlint-config";
import changelogOptions from "./index";

describe("conventional-changelog config", () => {
  const changelogTypes = changelogOptions.config.types
    ?.map(({ type }) => type)
    .sort();
  const commitlintTypeEnumRule = commitlintConfig.rules?.["type-enum"];
  const commitlintTypes =
    Array.isArray(commitlintTypeEnumRule) &&
    (commitlintTypeEnumRule[2] as string[]).sort();

  it("commitlint types and conventional-changelog types should both exist", () => {
    assert.ok(changelogTypes);
    assert.ok(commitlintTypes);
  });

  it("should match commitlint types enum config", () => {
    assert.deepEqual(changelogTypes, commitlintTypes);
  });
});
