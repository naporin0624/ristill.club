import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: false,
	},
	eslint: {
		ignoreDuringBuilds: false,
	},
	images: {
		deviceSizes: [320, 375, 414, 480, 640, 750, 828, 1080, 1280, 1440, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "storage.ristill.club",
				port: "",
				pathname: "/2025/materials/**",
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.txt$/,
			use: "raw-loader",
		});

		config.module.rules.push({
			test: /\.(ttf|otf|woff|woff2)$/,
			type: "javascript/auto",
			use: "arraybuffer-loader",
		});

		return config;
	},
};

export default withVanillaExtract(nextConfig);
void initOpenNextCloudflareForDev();
