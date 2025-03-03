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
			<div className="mb-4 relative h-[150px]">
				<motion.div
					className="flex absolute"
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
							className="relative h-[150px] w-[260px] mx-2 rounded-lg overflow-hidden flex-shrink-0"
						>
							<img
								src={src}
								alt={`Project ${index + 1}`}
								className="absolute inset-0 w-full h-full object-contain"
							/>
						</div>
					))}
				</motion.div>
			</div>

			{/* Slider pentru imaginile de jos */}
			<div className="relative h-[200px]">
				<motion.div
					className="flex absolute"
					initial={{ x: "-100%" }}
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
							className="relative h-[200px] w-[120px] mx-2 rounded-lg overflow-hidden flex-shrink-0"
						>
							<img
								src={src}
								alt={`Mobile ${index + 1}`}
								className="absolute inset-0 w-full h-full object-contain"
							/>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default DualSlider;
