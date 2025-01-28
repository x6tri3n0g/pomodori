import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        // 팝업 HTML
        popup: resolve(__dirname, "src/popup/index.html"),
        // 백그라운드 스크립트
        background: resolve(__dirname, "src/background/background.ts"),
      },
      output: {
        // 파일명 규칙 지정
        entryFileNames: (asset) => {
          return asset.name === "background"
            ? "background/background.js"
            : "popup/[name].js";
        },
        chunkFileNames: "assets/chunk-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
  // public 폴더 안의 파일들이 dist로 복사되도록 base 설정
  base: "",
});
