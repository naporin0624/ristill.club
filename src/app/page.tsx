import Image from "next/image";

import ogp from "@assets/ogp.jpg";

import { HeroSection } from "./_components/hero-section";

const Home = () => {
	return (
		<main>
			<HeroSection />
			<Image src={ogp} alt="Hero Section" width={1920} height={1080} />
		</main>
	);
};

export default Home;
