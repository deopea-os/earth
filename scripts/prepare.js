if (!process.env.CI) {
  const husky = await import("husky");
  husky.install();

  const { exec } = await import("child_process");
  const proc = exec("npm run -w packages/commitlint-config build");
  proc.stdout?.pipe(process.stdout);
}
