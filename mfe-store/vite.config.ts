import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe-store",
      filename: "store-entry.js",
      exposes: {
        "./ClientsStore": "./src/store/clients-store.tsx",
        "./SidebarStore": "./src/store/ui-store.tsx",
        "./SelectedStore": "./src/store/selected-store.tsx",
      },
      shared: {
        react: {
          requiredVersion: "^19.1.0",
        },
        "react-dom": {
          requiredVersion: "^19.1.0",
        },
        zustand: {
          requiredVersion: "^5.0.7",
        },
        sonner: {
          requiredVersion: "^2.0.7",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5002,
    cors: true,
  },
});
