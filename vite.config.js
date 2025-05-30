import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        pricing: resolve(__dirname, "pricing.html"),
        signin: resolve(__dirname, "signin.html"),
        signup: resolve(__dirname, "signup.html"),
        blogDetails: resolve(__dirname, "blog-details.html"),
        blogGrids: resolve(__dirname, "blog-grids.html"),
        notFound: resolve(__dirname, "404.html"),
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
  server: {
    open: true,
    port: 3000,
  },
});
