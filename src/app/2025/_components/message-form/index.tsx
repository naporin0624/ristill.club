// This component uses minimal animations and form state management which require client-side JavaScript
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

	return (
		<section className={styles.root}>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 2 } }}
				viewport={{ once: true }}
			>
				<h2 className={styles.title}>おてぃるに想いを届けよう</h2>
			</motion.div>

			<motion.form
				className={styles.formRoot}
				onSubmit={handleSubmit}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 2, delay: 0.5 } }}
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

				<button type="submit" className={styles.submitButton} disabled={!message.trim() || isSubmitting}>
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
				</button>
			</motion.form>

			<motion.div
				className={styles.counterRoot}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 2, delay: 1 } }}
				viewport={{ once: true }}
			>
				<p>💌 既に届いた想い: {submittedMessages.length}件</p>
			</motion.div>

			<motion.div
				className={styles.messageWall}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 2, delay: 1.5 } }}
				viewport={{ once: true }}
			>
				<h3 className={styles.messageWallTitle}>みんなからの想い</h3>
				<div className={styles.messageList}>
					{submittedMessages.map((msg, index) => (
						<motion.div
							key={msg.id}
							className={styles.messageItem}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ default: { duration: 1, delay: 2 + index * 0.1 } }}
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
