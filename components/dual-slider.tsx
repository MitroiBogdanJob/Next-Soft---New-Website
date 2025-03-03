import React from "react";
import { motion } from "framer-motion";
import "./dual-slider.css";

// Componentele vor primi imagini din componenta părinte
interface DualSliderProps {
	imagesTop: string[];
	imagesBottom: string[];
}

const DualSlider: React.FC<DualSliderProps> = ({ imagesTop, imagesBottom }) => {
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
					{[...imagesTop, ...imagesTop].map((src, index) => (
						<img
							key={`top-${index}`}
							src={src}
							alt={`Top Image ${index + 1}`}
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
					{[...imagesBottom, ...imagesBottom].map((src, index) => (
						<img
							key={`bottom-${index}`}
							src={src}
							alt={`Bottom Image ${index + 1}`}
						/>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default DualSlider;
