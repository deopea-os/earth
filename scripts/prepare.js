if (!process.env.CI) {
  const husky = await import("husky");
  husky.install();

  const { exec } = await import("child_process");
  const proc = exec(
    [
      "npm run",
      "-w packages/commitlint-config",
      "-w packages/conventional-changelog",
      "-w packages/eslint-config",
      "-w packages/prettier-config",
      "-w packages/semantic-release-config",
      "build",
    ].join(" "),
  );
  proc.stdout?.pipe(process.stdout);
}
