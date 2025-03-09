import React from "react";
import { motion } from "framer-motion";

interface DualSliderProps {
	imagesTop: string[];
	imagesBottom: string[];
}

const DualSlider: React.FC<DualSliderProps> = ({ imagesTop, imagesBottom }) => {
	const animationDuration = 20;

	return (
		<div className="w-full overflow-hidden py-0 mt-10">
			{/* Slider pentru imaginile de sus */}
			<div className="container-card mb-4">
				<motion.div
					className="flex"
					style={{
						margin: 0,
						padding: 0,
						alignItems: "flex-start",
						lineHeight: 1,
					}}
					initial={{ x: "0%" }}
					animate={{ x: "-100%" }}
					transition={{
						duration: animationDuration,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					{imagesTop.concat(imagesTop).map((src, index) => (
						<div
							key={`top-${index}`}
							className="relative h-[15vh] flex-shrink-0 mx-[0.5vw]"
						>
							<img
								src={src}
								alt={`Project ${index + 1}`}
								className="w-full h-full object-cover rounded-lg"
							/>
						</div>
					))}
				</motion.div>
			</div>

			{/* Slider pentru imaginile de jos */}
			<div className="relative h-[15vh]">
				<motion.div
					className="flex"
					style={{
						margin: 0,
						padding: 0,
						alignItems: "flex-start",
						lineHeight: 1,
					}}
					initial={{ x: "-100%" }}
					animate={{ x: "0%" }}
					transition={{
						duration: animationDuration,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					{imagesBottom.concat(imagesBottom).map((src, index) => (
						<div
							key={`bottom-${index}`}
							className="relative h-[13vh] flex-shrink-0 mx-[0.5vw]"
						>
							<img
								src={src}
								alt={`Mobile ${index + 1}`}
								className="w-full h-full object-cover rounded-lg"
							/>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default DualSlider;
