import React from "react";
import { motion } from "framer-motion";

interface DualSliderProps {
	imagesTop: string[];
	imagesBottom: string[];
}

const DualSlider: React.FC<DualSliderProps> = ({ imagesTop, imagesBottom }) => {
	return (
		<div className="w-full overflow-hidden py-8">
			{/* Slider pentru imaginile de sus */}
			<div className="mb-4 relative h-[190px]">
				<motion.div
					className="flex"
					initial={{ x: "0%" }}
					animate={{ x: "-100%" }}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					{imagesTop.concat(imagesTop).map((src, index) => (
						<div
							key={`top-${index}`}
							className="relative h-[180px] flex-shrink-0 mx-2"
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
			<div className="relative h-[190px]">
				<motion.div
					className="flex"
					initial={{ x: "-190%" }}
					animate={{ x: "0%" }}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					{imagesBottom.concat(imagesBottom).map((src, index) => (
						<div
							key={`bottom-${index}`}
							className="relative h-[180px] flex-shrink-0 mx-2"
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
