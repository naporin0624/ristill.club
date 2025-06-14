// This component uses motion animations, form state management, and interactive effects which require client-side JavaScript
"use client";

import { motion } from "motion/react";
import React, { useState, useCallback, type FormEvent } from "react";

import * as styles from "./styles.css";

export const MessageForm = () => {
	const [message, setMessage] = useState("");
	const [submittedMessages, setSubmittedMessages] = useState<{ id: string; text: string }[]>([
		{ id: "msg-1", text: "おてぃるちゃん、お誕生日おめでとう！🎂" },
		{ id: "msg-2", text: "いつも可愛くて癒されています✨" },
		{ id: "msg-3", text: "素敵な一年になりますように💖" },
		{ id: "msg-4", text: "君の輝きが大好きです🌟" },
		{ id: "msg-5", text: "これからも応援してます！" },
	]);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = useCallback(
		async (e: FormEvent) => {
			e.preventDefault();
			if (!message.trim() || isSubmitting) return;

			setIsSubmitting(true);

			// メッセージ送信のシミュレーション
			await new Promise((resolve) => setTimeout(resolve, 1500));

			setSubmittedMessages((prev) => [{ id: `msg-${Date.now()}`, text: message.trim() }, ...prev]);
			setMessage("");
			setIsSubmitting(false);
		},
		[message, isSubmitting],
	);

	const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.currentTarget.value);
	}, []);

	const particleElements = Array.from({ length: 12 }, (_, i) => ({ id: `particle-${i}` }));

	return (
		<section className={styles.root}>
			{/* Background Sparkles */}
			{particleElements.map((particle) => (
				<motion.div
					key={particle.id}
					className={styles.sparkle}
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: [0, 1, 0],
						scale: [0, 1, 0],
						y: [0, -150],
						x: [0, Math.random() * 300 - 150],
					}}
					transition={{
						default: {
							duration: 4,
							delay: Math.random() * 3,
							repeat: Number.POSITIVE_INFINITY,
							repeatDelay: Math.random() * 2,
						},
					}}
				>
					✨
				</motion.div>
			))}

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ default: { duration: 0.8 } }}
				viewport={{ once: true }}
			>
				<h2 className={styles.title}>💝 おてぃるに想いを届けよう 💝</h2>
			</motion.div>

			<motion.form
				className={styles.formRoot}
				onSubmit={handleSubmit}
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ default: { duration: 0.6, delay: 0.2 } }}
				viewport={{ once: true }}
			>
				<div className={styles.inputRoot}>
					<textarea
						className={styles.textarea}
						value={message}
						onChange={handleMessageChange}
						placeholder="お誕生日のメッセージを書いてください..."
						rows={4}
						maxLength={200}
					/>
					<div className={styles.charCount}>{message.length}/200</div>
				</div>

				<motion.button
					type="submit"
					className={styles.submitButton}
					disabled={!message.trim() || isSubmitting}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					{isSubmitting ? (
						<>
							<motion.div
								className={styles.loadingSpinner}
								animate={{ rotate: 360 }}
								transition={{ default: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" } }}
							>
								✨
							</motion.div>
							送信中...
						</>
					) : (
						<>💌 想いを送る</>
					)}
				</motion.button>
			</motion.form>

			<motion.div
				className={styles.counterRoot}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 0.6, delay: 0.4 } }}
				viewport={{ once: true }}
			>
				<p>💌 既に届いた想い: {submittedMessages.length}件</p>
			</motion.div>

			<motion.div
				className={styles.messageWall}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 0.8, delay: 0.6 } }}
				viewport={{ once: true }}
			>
				<h3 className={styles.messageWallTitle}>みんなからの想い</h3>
				<div className={styles.messageList}>
					{submittedMessages.map((msg, index) => (
						<motion.div
							key={msg.id}
							className={styles.messageItem}
							initial={{ opacity: 0, y: 20, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ default: { duration: 0.5, delay: index * 0.1 } }}
						>
							<span className={styles.messageIcon}>💕</span>
							<span className={styles.messageText}>{msg.text}</span>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};
