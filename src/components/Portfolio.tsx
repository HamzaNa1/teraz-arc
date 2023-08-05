import GetImages from "@/utils/ImageHelper";
import ImageSlider from "./ImageSlider";

export default async function Portfolio() {
	const images = await GetImages();

	return (
		<div className="container max-w-full h-fit bg-[#585858]">
			<div className="h-full flex flex-col justify-center items-center p-12 gap-5">
				<span className="text-3xl">بعض الأعمال المنفذة</span>
				<ImageSlider images={images}></ImageSlider>
			</div>
		</div>
	);
}
