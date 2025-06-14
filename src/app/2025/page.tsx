// This component uses motion animations which require client-side JavaScript
"use client";

import { motion } from "motion/react";

import { BirthdayHero } from "./_components/birthday-hero";
import { GrowthTimeline } from "./_components/growth-timeline";
import { HeartMessage } from "./_components/heart-message";
import { MessageForm } from "./_components/message-form";
import { MosaicViewer } from "./_components/mosaic-viewer";
import { PersonProfile } from "./_components/person-profile";
import * as styles from "./styles.css";

const BirthdayPage = () => {
	return (
		<motion.main
			className={styles.root}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ default: { duration: 0.8 } }}
		>
			<BirthdayHero />
			<PersonProfile />
			<MosaicViewer />
			<MessageForm />
			<GrowthTimeline />
			<HeartMessage />
		</motion.main>
	);
};

export default BirthdayPage;
