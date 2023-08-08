import { MdVerified } from "react-icons/md";

export default function Services() {
	return (
		<div className="container max-w-full min-h-fit bg-secondaryPage p-4 lg:p-10 text-primary flex flex-col gap-7">
			<div className="w-full h-full flex justify-center items-center text-4xl">
				<span className="text-black">الخدمات التي نقدمها</span>
			</div>
			<div className="flex lg:flex-row flex-col justify-center items-center gap-10">
				<div className="lg:w-[50%] w-full rounded-2xl border-[#BF971B] border-[4px] p-2">
					<img
						src="/images/bad9454e-a349-441c-848f-486d21eed8ca.jpg"
						alt=""
						className="drop-shadow-2xl rounded-2xl object-contain"
					/>
				</div>
				<div className="lg:w-[50%] w-full flex flex-col gap-y-5 text-xl md:text-4xl">
					<div className="flex flex-row gap-x-2 justify-end items-center">
						<span>دراسة التصاميم و تقديم حلول</span>
						<MdVerified className="fill-primary w-[20%] md:w-[15%] h-full" />
					</div>

					<div className="flex flex-row gap-x-2 justify-end items-center">
						<span>أعمال ترميم واعادة تأهيل</span>
						<MdVerified className="fill-primary w-[20%] md:w-[15%] h-full" />
					</div>

					<div className="flex flex-row gap-x-2 justify-end items-center">
						<span>أعمال الديكور والتشطيبات</span>
						<MdVerified className="fill-primary w-[20%] md:w-[15%] h-full" />
					</div>

					<div className="flex flex-row gap-x-2 justify-end items-center">
						<span> أعمال البناء والتشييد</span>
						<MdVerified className="fill-primary w-[20%] md:w-[15%] h-full" />
					</div>
				</div>
			</div>
		</div>
	);
}
