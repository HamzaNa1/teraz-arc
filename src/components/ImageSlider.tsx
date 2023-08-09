"use client";
import { Image } from "@/types/Images";

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
		<div className="max-w-4xl w-full aspect-[9/16] lg:aspect-[16/14] m-auto py-16 px-4 relative group">
			<div className="rounded-2xl border-[#BF971B] border-[4px] p-2 w-full h-full">
				<div
					style={{ backgroundImage: `url(${images[currentIndex].url})` }}
					className="w-full h-full rounded-2xl bg-center bg-cover duration-500 drop-shadow-2xl"
				></div>
				<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactLeft onClick={prevSlide} size={30} />
				</div>
				<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactRight onClick={nextSlide} size={30} />
				</div>
			</div>
		</div>
	);
}
