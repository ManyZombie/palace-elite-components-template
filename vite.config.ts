import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import { resolve } from "path";
// New plugin for vue 2 compatibility when storybook-builder-vite-vue2 
// updates should remove vite-plugin-vue2 and vue-template-compiler
import vue from "@vitejs/plugin-vue2";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/styles/boot.scss";`,
      },
      sass: {
        additionalData: `@use "src/styles/boot.scss";`,
      },
    },
  },
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "pe-components",
      fileName: (format) => `pe-components.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],

      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
