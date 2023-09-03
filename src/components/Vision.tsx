import Image from "next/image";

export default function Vision() {
	return (
		<div className="container bg-white flex lg:flex-row flex-col max-w-full lg:h-screen h-fit py-16 lg:py-0 md:px-32 px-2 justify-center items-center md:gap-32 gap-10">
			<div className="drop-shadow-2xl">
				<Image
					src="/images/image1.jpg"
					alt=""
					width={900}
					height={900}
					className="rounded-2xl"
				/>
			</div>

			<div className="flex flex-col text-right lg:w-[50%] w-full gap-4">
				<span className="text-primary md:text-7xl text-5xl">رؤية المؤسسة</span>
				<span className="text-black md:text-3xl text-xl">
					إننا في مؤسسة الطراز المعماري للمقاولات العامة نسعى دائماً لتلبية
					احتياج الزبون بدءاً من مرحلة التنفيذ بجودة عالية و حرفية متقنة وبإشراف
					هندسي متكامل و فنين ذوي خبرة
				</span>
			</div>
		</div>
	);
}
