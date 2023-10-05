"use client";
import { Image } from "@/utils/ImageHelper";

import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function ImageSlider({ images }: { images: Image[] }) {
	const prevSlide = () => {
		instanceRef.current?.prev();
	};

	const nextSlide = () => {
		instanceRef.current?.next();
	};

	const [sliderRef, instanceRef] = useKeenSlider(
		{
			loop: true,
		},
		[
			(slider) => {
				let timeout: NodeJS.Timeout;

				function clearNextTimeout() {
					clearTimeout(timeout);
				}

				function nextTimeout() {
					clearTimeout(timeout);
					timeout = setTimeout(() => {
						slider.next();
					}, 2000);
				}

				slider.on("dragStarted", clearNextTimeout);
				slider.on("animationEnded", nextTimeout);
				slider.on("updated", nextTimeout);

				nextTimeout();
			},
		]
	);

	return (
		<div className="flex w-full h-full justify-center">
			<div className="container lg:aspect-video md:aspect-auto py-16 md:px-4 relative group">
				<div className="md:rounded-2xl md:border-[#BF971B] md:border-[4px] md:p-2 w-full h-full">
					<div ref={sliderRef} className="keen-slider w-full h-full">
						{images.map((img, i) => (
							<div key={i} className="keen-slider__slide w-full h-full">
								<div
									style={{ backgroundImage: `url(${img.url})` }}
									className="w-full h-full md:rounded-2xl bg-center bg-cover drop-shadow-2xl"
								></div>
							</div>
						))}
					</div>
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 mx-3 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactLeft onClick={prevSlide} size={30} />
					</div>
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 mx-3 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactRight onClick={nextSlide} size={30} />
					</div>
				</div>
			</div>
		</div>
	);
}
