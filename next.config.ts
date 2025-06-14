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
};

export default withVanillaExtract(nextConfig);
void initOpenNextCloudflareForDev();
