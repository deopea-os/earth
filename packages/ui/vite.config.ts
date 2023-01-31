import { qwikVite } from "@builder.io/qwik/optimizer";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      plugins: [qwikVite()],
      target: "es2017",
      outDir: "lib",
      rollupOptions: {
        external: ["@builder.io/qwik"],
        output: { preserveModules: true },
      },
      lib: {
        entry: "./src/index.ts",
        formats: ["es"],
        fileName: (_format, entry) => {
          if (entry.endsWith("@builder.io/qwik/core.prod")) {
            return "index.qwik.js";
          }
          return `${entry.replace(/^.+\/src\//, "")}.js`;
        },
      },
    },
  };
});