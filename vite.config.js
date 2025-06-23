import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Nintendo_UI/",
  plugins: [react(), tailwindcss()],
  css: {
    postcss: true,
  },
});
