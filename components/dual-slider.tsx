import React from "react";
import { motion } from "framer-motion";
import "./dual-slider.css";

// Lista combinată cu imaginile pentru slider
const imagesCombined = [
	"/images/projects/Project 1.webp",
	"/images/projects/Mobile 1.webp",
	"/images/projects/Project 2.webp",
	"/images/projects/Mobile 2.webp",
	"/images/projects/Project 3.webp",
	"/images/projects/Mobile 3.webp",
	"/images/projects/Project 4.webp",
	"/images/projects/Mobile 4.webp",
	"/images/projects/Project 1.webp",
	"/images/projects/Mobile 1.webp",
	"/images/projects/Project 5.webp",
	"/images/projects/Mobile 5.webp",
];

const DualSlider: React.FC = () => {
	return (
		<div className="dual-slider-container">
			<h2>Some Text Above</h2> {/* Textul deasupra slider-ului */}
			{/* Wrapper pentru imagini */}
			<div className="image-row-wrapper">
				{/* Slider pentru imaginile de sus */}
				<motion.div
					className="image-row"
					initial={{ x: "0%" }}
					animate={{ x: "-100%" }}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "linear",
						repeatType: "loop",
					}}
				>
					{[...imagesCombined, ...imagesCombined].map((src, index) => (
						<img
							key={`combined-${index}`}
							src={src}
							alt={`Image ${index + 1}`}
						/>
					))}
				</motion.div>

				{/* Slider pentru imaginile de jos */}
				<motion.div
					className="image-row"
					initial={{ x: "-100%" }}
					animate={{ x: "0%" }}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "linear",
						repeatType: "loop",
					}}
				>
					{[...imagesCombined, ...imagesCombined].map((src, index) => (
						<img
							key={`combined-inverted-${index}`}
							src={src}
							alt={`Image ${index + 1}`}
						/>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default DualSlider;
