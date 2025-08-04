import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import federation from "@originjs/vite-plugin-federation";

const getRemoteUrl = (remoteName: string, devPort: number): string => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.VITE_APP_ENV === "development"
  ) {
    return `http://localhost:${devPort}/assets/${remoteName}-entry.js`;
  } else {
    if (remoteName === "design-system") {
      return "https://yvievpygnysrufdcakbz.supabase.co/storage/v1/object/public/teddy-teste/mfe-design-system/assets/design-system-entry.js";
    }
    if (remoteName === "store") {
      return "https://yvievpygnysrufdcakbz.supabase.co/storage/v1/object/public/teddy-teste/mfe-store/assets/store-entry.js";
    }
    return "";
  }
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    federation({
      name: "app-host",
      remotes: {
        "mfe-design-system": getRemoteUrl("design-system", 5001),
        "mfe-store": getRemoteUrl("store", 5002),
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
