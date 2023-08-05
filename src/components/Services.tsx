import { MdVerified } from "react-icons/md";

export default function Services() {
	return (
		<div className="container max-w-full h-[1024px] bg-services flex flex-row justify-center items-center gap-x-72">
			<div className="rounded-2xl border-[#BF971B] border-[4px] p-2">
				<img
					src="/images/bad9454e-a349-441c-848f-486d21eed8ca.jpg"
					alt=""
					className="drop-shadow-2xl rounded-2xl object-contain"
				/>
			</div>
			<div className="flex flex-col gap-y-10  text-primary text-5xl ">
				<div className="flex flex-row gap-x-10 justify-end items-center  ">
					<span>دراسة التصاميم و تقديم حلول</span>
					<MdVerified className=" fill-primary w-36 h-36 " />
				</div>

				<div className="flex flex-row gap-x-10 justify-end items-center  ">
					<span>أعمال ترميم واعادة تأهيل</span>
					<MdVerified className=" fill-primary w-36 h-36  " />
				</div>

				<div className="flex flex-row gap-x-10 justify-end items-center  ">
					<span>أعمال الديكور والتشطيبات</span>
					<MdVerified className=" fill-primary w-36 h-36 " />
				</div>

				<div className="flex flex-row gap-x-10 justify-end items-center ">
					<span> أعمال البناء والتشييد</span>
					<MdVerified className=" fill-primary w-36 h-36  " />
				</div>
			</div>
		</div>
	);
}
