import { HiWrenchScrewdriver } from "react-icons/hi2";
import { RiMedalFill } from "react-icons/ri";
import { MdOutlineShoppingCart, MdOutlineHandshake } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";

export default function Goals() {
	return (
		<div className="container max-w-full h-[1024px] bg-[#EEEEEE] flex flex-col justify-center items-center gap-y-11">
			<span className="text-[rgb(81,81,81)] text-4xl">أهداف المؤسسة</span>
			<div className=" flex gap-32">
				<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center">
					<HiWrenchScrewdriver className="fill-primary h-[40%] w-full p-5" />
					<span className="text-secondary">تنفيذ الأعمال</span>
					<span className="text-secondary">بأحدث التقنيات</span>
				</div>
				<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center">
					<RiMedalFill className="fill-primary h-[40%] w-full p-5" />
					<span className="text-secondary">ضمان جودة</span>
					<span className="text-secondary">الأعمال</span>
				</div>
				<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center">
					<MdOutlineShoppingCart className="fill-primary h-[40%] w-full p-5" />
					<span className="text-secondary">انتقاء أفضل</span>
					<span className="text-secondary">المواد</span>
				</div>
			</div>
			<div className="flex gap-32">
				<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center">
					<MdOutlineHandshake className="fill-primary h-[40%] w-full p-5" />
					<span className="text-secondary">بناء الثقة</span>
					<span className="text-secondary">بين العملاء</span>
				</div>
				<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center">
					<IoMdStopwatch className="fill-primary h-[40%] w-full p-5" />
					<span className="text-secondary">توفير الوقت</span>
					<span className="text-secondary">و الجهد</span>
				</div>
			</div>
		</div>
	);
}
