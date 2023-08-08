"use client";

import { useZact } from "zact/client";
import ImageSlider from "./ImageSlider";
import { GetImages } from "@/utils/ImageHelper";
import { useEffect } from "react";

export default function Portfolio() {
	const { mutate, data } = useZact(GetImages);

	useEffect(() => {
		mutate(null);
	}, []);

	return (
		<div className="container max-w-full min-h-[500px] bg-primaryPage">
			<div className="h-full flex flex-col justify-center items-center py-8 px-6 gap-5">
				<span className="text-4xl text-black">بعض الأعمال المنفذة</span>
				{!data && <span>Loading...</span>}
				{data && <ImageSlider images={data?.images}></ImageSlider>}
			</div>
		</div>
	);
}
