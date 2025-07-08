import { ImageResponse } from "@vercel/og";

import materialsData from "../materials.json";

import notoSansJPFont from "./_assets/NotoSansJP-Medium.ttf";

export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

type MaterialData = {
	id: string;
	displayName: string;
	size: number;
	url: string;
	modTime: string;
	originalName: string;
	width: number;
	height: number;
};

type Props = {
	params: Promise<{ id: string }>;
};

// Helper function to convert image URL to data URI for Cloudflare Workers compatibility
async function urlToDataUri(url: string): Promise<string> {
	try {
		const response = await fetch(url, {
			headers: {
				Accept: "image/png,image/jpeg;q=0.9,*/*;q=0.1",
				"User-Agent":
					"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
			},
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch image: ${response.status}`);
		}

		const contentType = response.headers.get("content-type") ?? "image/png";
		const arrayBuffer = await response.arrayBuffer();
		const uint8Array = new Uint8Array(arrayBuffer);
		const base64 = btoa(String.fromCharCode(...uint8Array));

		return `data:${contentType};base64,${base64}`;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error("Error converting image to data URI:", error);
		throw error;
	}
}

export default async function OGImage({ params }: Props) {
	const { id } = await params;

	// Get the base URL for absolute image paths
	const baseUrl =
		process.env.VERCEL_URL !== undefined
			? `https://${process.env.VERCEL_URL}`
			: process.env.NODE_ENV === "production"
				? "https://ristill.club"
				: "http://localhost:3000";

	if (id === "") {
		return new Response("Missing id parameter", { status: 400 });
	}

	const material = (materialsData as MaterialData[]).find((m) => m.id === id);

	if (!material) {
		return new Response("Material not found", { status: 404 });
	}

	// OGP画像のサイズ (1200x630 固定)
	const ogWidth = 1200;
	const ogHeight = 630;

	// レイアウト設定
	const padding = 40;
	const borderWidth = 12;
	const captionHeight = 60;

	// 画像エリアのサイズ計算（パディング、キャプションを考慮）
	const availableWidth = ogWidth - padding * 2;
	const availableHeight = ogHeight - padding * 2 - captionHeight;

	const getImageDisplaySize = () => {
		const availableAspectRatio = availableWidth / availableHeight;
		const materialAspectRatio = material.width / material.height;

		if (materialAspectRatio > availableAspectRatio) {
			// 横長画像: 幅を基準に調整
			const width = availableWidth - borderWidth * 2;
			const height = width / materialAspectRatio;

			return { width, height };
		} else {
			// 縦長画像: 高さを基準に調整
			const height = availableHeight - borderWidth * 2;
			const width = height * materialAspectRatio;

			return { width, height };
		}
	};

	const imageDisplaySize = getImageDisplaySize();

	// Convert images to data URIs for Cloudflare Workers compatibility
	const backgroundImageDataUri = await urlToDataUri(`${baseUrl}/images/mosaic_24000_6.jpg`);
	const materialImageDataUri = await urlToDataUri(material.url);

	try {
		return new ImageResponse(
			(
				<div
					style={{
						position: "relative",
						display: "flex",
						flexDirection: "column",
						width: "100%",
						height: "100%",
						// backgroundColor: "#5EC9FF",
						padding,
						fontFamily: "Noto Sans JP",
						overflow: "hidden",
					}}
				>
					{/* Blurred background image */}
					<img
						src={backgroundImageDataUri}
						alt=""
						style={{
							position: "absolute",
							width: size.width,
							height: size.height,
							objectFit: "cover",
							filter: "blur(5px)",
							opacity: 0.3,
						}}
					/>
					{/* 画像エリア */}
					<div
						style={{
							display: "flex",
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							marginBottom: "16px",
							position: "relative",
						}}
					>
						<img
							src={materialImageDataUri}
							alt={material.displayName}
							style={{
								width: imageDisplaySize.width,
								height: imageDisplaySize.height,
								objectFit: "cover",
								border: `${borderWidth}px solid #ffffff`,
								borderRadius: "8px",
								boxShadow: "4px 8px 12px 0px rgba(45, 45, 45, 0.25)",
								transform: "rotate(1deg)",
							}}
						/>
					</div>

					{/* figcaption */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							height: captionHeight,
							position: "relative",
						}}
					>
						<div
							style={{
								fontSize: "24px",
								fontWeight: "500",
								color: "#2d2d2d",
								textAlign: "center",
								lineHeight: "1.2",
								display: "flex",
							}}
						>
							{material.displayName} - RISTILL BIRTHDAY 2025
						</div>
					</div>
				</div>
			),
			{
				width: ogWidth,
				height: ogHeight,
				fonts: [
					{
						name: "Noto Sans JP",
						data: notoSansJPFont,
						style: "normal",
						weight: 500,
					},
				],
			},
		);
	} catch {
		return new Response("Failed to generate OG image", { status: 500 });
	}
}
