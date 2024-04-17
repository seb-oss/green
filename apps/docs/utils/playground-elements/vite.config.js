/** @type {import('vite').UserConfig} */
import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
    build: {
        outDir: 'public/playground-elements',
        copyPublicDir: false,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'index.ts'),
            name: 'PlayGroundElements',
            // the proper extensions will be added
            fileName: 'playground-elements',
        }
    },
})
