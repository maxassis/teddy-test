import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe-design-system",
      filename: "design-system-entry.js",
      exposes: {
        "./ButtonOrange": "./src/components/BtnOrange.tsx",
        "./Input": "./src/components/Input.tsx",
        "./SideBar": "./src/components/SideBar.tsx",
      },
      shared: {
        react: "^19.1.0",
        "react-dom": "^19.1.0",
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
    cors: true,
  },
});
