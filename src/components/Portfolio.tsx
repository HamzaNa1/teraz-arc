"use client";

import { useZact } from "zact/client";
import ImageSlider from "./ImageSlider";
import { GetImages } from "@/utils/ImageHelper";
import { useEffect } from "react";
import { MoonLoader } from "react-spinners";
export default function Portfolio() {
	const { mutate, data } = useZact(GetImages);

	useEffect(() => {
		mutate(null);
	}, []);

	return (
		<div className="container flex max-w-full max-h-screen min-h-screen bg-primaryPage">
			<div className="absolute w-full min-h-screen">
				{/* stars */}
				<img
					src="/images/whitestar.svg"
					className="hidden md:block w-16 h-16 absolute bottom-[40px] left-[60px] rotate-45 drop-shadow-lg"
				></img>

				<img
					src="/images/whitestar.svg"
					className="hidden md:block w-16 h-16 absolute bottom-[120px] left-[96px] drop-shadow-lg"
				></img>

				<img
					src="/images/whitestar.svg"
					className="hidden md:block w-16 h-16 absolute top-[40px] right-[60px] drop-shadow-lg"
				></img>

				<img
					src="/images/whitestar.svg"
					className="hidden md:block w-16 h-16 absolute top-[120px] right-[96px] rotate-45 drop-shadow-lg"
				></img>

				<img
					src="/images/whitestar.svg"
					className="hidden md:block w-16 h-16 absolute translate-y-[200px] right-[60px] drop-shadow-lg"
				></img>
			</div>
			<div className="relative w-full flex flex-col items-center pt-10 pb-16 md:px-6 gap-12 z-10">
				<span className="text-4xl text-black ">بعض الأعمال المنفذة</span>
				{!data && (
					<div className="w-full h-full self-center flex justify-center items-center">
						<MoonLoader color={"#BF971B"} size={100} speedMultiplier={0.5} />
					</div>
				)}
				{data && (
					<div className="w-full h-full">
						<ImageSlider images={data?.images}></ImageSlider>
					</div>
				)}
			</div>
		</div>
	);
}
