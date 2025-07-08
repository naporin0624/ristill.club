declare module "*.txt" {
	const ref: string;
	export default ref;
}

declare module "*.ttf" {
	const data: ArrayBuffer;
	export default data;
}
