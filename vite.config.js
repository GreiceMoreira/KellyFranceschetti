import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        form: resolve(__dirname, "src/form.html"),
        gallery: resolve(__dirname, "src/gallery.html"),
        colorPalette: resolve(__dirname, "src/colorPalette.html"),
        thankyou: resolve(__dirname, "src/thankyou.html"),
      },
    },
  },
});
