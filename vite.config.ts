import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://nexus-backend-dev.onrender.com",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
  },
});
