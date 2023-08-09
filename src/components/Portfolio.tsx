"use client";

import ImageSlider from "./ImageSlider";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { GetImagesResponse } from "@/types/Images";
export default function Portfolio() {
	const [data, setData] = useState<GetImagesResponse | undefined>(undefined);

	useEffect(() => {
		async function getImages() {
			const res = await fetch("/api/images", { next: { revalidate: 3600 } });

			const imageData: GetImagesResponse = await res.json();

			setData(imageData);
		}

		getImages();
	}, []);

	return (
		<div className="container max-w-full min-h-[500px] bg-primaryPage">
			<div className="flex flex-col justify-center items-center py-8 px-6 gap-5">
				<span className="text-4xl text-black">بعض الأعمال المنفذة</span>
				{data && <ImageSlider images={data?.images}></ImageSlider>}
			</div>
			{!data && (
				<div className="w-full min-h-[500px] flex justify-center items-center">
					<MoonLoader color={"#BF971B"} size={100} speedMultiplier={0.5} />
				</div>
			)}
		</div>
	);
}
