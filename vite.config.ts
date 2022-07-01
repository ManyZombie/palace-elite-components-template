import { defineConfig } from "vite";
import path from "path";
import { createVuePlugin } from "vite-plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin({ target: "esnext" })],
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname
    },
    extensions: ['.mjs', '.mdx', '.js', '.ts', '.json', '.vue', '.scss', '.sass', '.css'],
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
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "PalaceEliteComponents",
      fileName: (format) => `pe-components.${format}.js`
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
