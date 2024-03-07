import { defineConfig } from "vite";

export default defineConfig({
	root: "src",
	base: "./",
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		rollupOptions: {
			output: {
				assetFileNames: assetInfo => {
					let extType = assetInfo.name.split(".").at(1);
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						extType = "img";
					}
					if (/woff2?|ttf/i.test(extType)) {
						extType = "fonts";
					}
					return `assets/${extType}/[name][extname]`;
				},
				chunkFileNames: "assets/js/[name].js",
				entryFileNames: "assets/js/[name].js",
			},
		},
	},
});
