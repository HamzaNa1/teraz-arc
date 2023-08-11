"use client";
import { Image } from "@/utils/ImageHelper";

import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function ImageSlider({ images }: { images: Image[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<div className="flex h-full justify-center">
			<div className="w-full md:w-auto h-full md:min-w-[512px] md:aspect-video py-16 md:px-4 relative group">
				<div className="md:rounded-2xl md:border-[#BF971B] md:border-[4px] md:p-2 w-full h-full">
					<div
						style={{ backgroundImage: `url(${images[currentIndex].url})` }}
						className="w-full h-full md:rounded-2xl bg-center bg-cover duration-500 drop-shadow-2xl"
					></div>
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactLeft onClick={prevSlide} size={30} />
					</div>
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactRight onClick={nextSlide} size={30} />
					</div>
				</div>
			</div>
		</div>
	);
}
