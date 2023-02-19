import { expressAdapter } from "@builder.io/qwik-city/adapters/express/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      target: "es2022",
      rollupOptions: {
        input: ["src/server/entry.express.tsx", "@qwik-city-plan"],
      },
    },
    plugins: [expressAdapter()],
  };
});
