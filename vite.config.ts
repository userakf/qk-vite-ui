/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'
// https://vitejs.dev/config/
const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};
export default defineConfig({
    
    plugins: [
        vue(),
        // 添加JSX插件
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        // 添加UnoCSS插件
        Unocss(),
        
    ],
    build: {
        rollupOptions,
        minify: 'terser',
        sourcemap:true, // 输出单独 source 文件
        brotliSize:true, // 生成压缩大小报告
        lib: {
            entry: "./src/entry.ts",
            name: "QkUi",
            fileName: "qk-ui",
            // 导出模块格式
            //@ts-ignore
            formats: ["esm", "umd", "iife"],
        },
        cssCodeSplit:true,
        
    },
    resolve:{
        alias:{
            vue:'vue/dist/vue.esm-bundler.js'
        }
    },
    test:{
        globals:true,

        environment:'happy-dom',
        // 支持tsx组件，很关键
        transformMode: {
            web: [/.[tj]sx$/]
        }
    }

});
