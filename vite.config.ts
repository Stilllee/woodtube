import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  define: {
    "process.env.YOUTUBE_API_KEY": JSON.stringify(process.env.YOUTUBE_API_KEY),
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    host: "localhost",
    port: 3000,
    open: true,
    strictPort: true,
  },
  build: {
    outDir: "build",
  },
});
