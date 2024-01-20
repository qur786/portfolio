import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/", // Ref: https://vitejs.dev/guide/static-deploy#github-pages
  plugins: [react()],
});
