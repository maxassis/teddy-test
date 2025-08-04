import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    federation({
      name: "app-host",
      remotes: {
        "mfe-design-system":
          "https://yvievpygnysrufdcakbz.supabase.co/storage/v1/object/public/teddy-teste/mfe-design-system/assets/design-system-entry.js",
        "mfe-store":
          "https://yvievpygnysrufdcakbz.supabase.co/storage/v1/object/public/teddy-teste/mfe-store/assets/store-entry.js",
      },
      shared: {
        react: "^19.1.0",
        "react-dom": "^19.1.0",
        zustand: "^5.0.7",
      },
    }),
  ],
  server: {
    cors: true,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    cssCodeSplit: false,
  },
});
