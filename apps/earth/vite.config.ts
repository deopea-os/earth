import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { resolve } from "path";
import { Alias, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const aliases = ["components", "css", "routes", "utils"].map<Alias>((id) => ({
  find: id,
  replacement: resolve("src", id),
}));

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite({ ssr: { input: "src/server/entry.ssr.tsx" } }),
      tsconfigPaths(),
    ],
    resolve: {
      alias: [
        ...aliases,
        {
          find: "@builder.io/qwik/core",
          replacement: "@builder.io/qwik",
        },
      ],
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
