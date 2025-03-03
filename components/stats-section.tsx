"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface StatProps {
	value: number;
	label: string;
	duration?: number;
	suffix?: string;
}

function StatCounter({
	value,
	label,
	duration = 2000,
	suffix = "",
}: StatProps) {
	const [count, setCount] = useState(0);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	useEffect(() => {
		let start = 0;
		const end = value;

		if (!inView) return;

		// Calculate animation duration based on value size
		const totalDuration = duration;
		const incrementTime = totalDuration / end;

		const timer = setInterval(() => {
			start += 1;
			setCount(start);
			if (start >= end) clearInterval(timer);
		}, incrementTime);

		return () => clearInterval(timer);
	}, [inView, value, duration]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
			transition={{ duration: 0.6 }}
			className="text-center"
		>
			<div className="text-4xl md:text-5xl font-bold text-white mb-2">
				{count}
				{suffix}
			</div>
			<div className="text-gray-400">{label}</div>
		</motion.div>
	);
}

export default function StatsSection() {
	const { t } = useLanguage();

	const stats = [
		{ value: 250, label: t("stats.projects"), suffix: "+" },
		{ value: 120, label: t("stats.clients"), suffix: "+" },
		{ value: 10, label: t("stats.years"), suffix: "+" },
		{ value: 45, label: t("stats.team"), suffix: "" },
	];

	return (
		<section className="py-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20  ">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, index) => (
						<StatCounter
							key={index}
							value={stat.value}
							label={stat.label}
							suffix={stat.suffix}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
