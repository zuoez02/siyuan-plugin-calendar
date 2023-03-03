// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [cssInjectedByJsPlugin(), vue()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src', "index.ts"),
            },
            output: {
                name: 'main',
                format: 'commonjs',
                // exports: 'default',
                esModule: 'if-default-prop',
                manualChunks: undefined,
            },
            external: ['siyuan'],
        },
        //构建后是否生成 source map 文件
        sourcemap: false,
        // minify: "terser", //terser 构建后文件体积更小
    },
})
