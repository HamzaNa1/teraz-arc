import { RiMedalLine } from "react-icons/ri";
import { MdOutlineShoppingCart, MdOutlineHandshake } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { LiaWrenchSolid } from "react-icons/lia";

export default function Goals() {
	return (
		<div className="container relative max-w-full min-h-fit h-fit bg-primaryPage flex flex-col justify-start items-center gap-y-11 p-10">
			<div className="absolute w-full h-full">
				{/* stars */}
				<img
					src="/images/whitestar.svg"
					className="w-16 h-16 absolute top-[340px] left-[60px] rotate-45"
				></img>
			</div>

			<span className="text-[rgb(81,81,81)] text-4xl z-10">أهداف المؤسسة</span>
			<div className="h-full hidden md:flex flex-col justify-center items-center z-10">
				<div className="flex gap-[6rem]">
					<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
						<LiaWrenchSolid className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
						<span className="text-secondary group-hover:text-white">
							تنفيذ الأعمال
						</span>
						<span className="text-secondary group-hover:text-white">
							بأحدث التقنيات
						</span>
					</div>
					<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
						<RiMedalLine className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
						<span className="text-secondary group-hover:text-white">
							ضمان جودة
						</span>
						<span className="text-secondary group-hover:text-white">
							الأعمال
						</span>
					</div>
					<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
						<MdOutlineShoppingCart className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
						<span className="text-secondary group-hover:text-white">
							انتقاء أفضل
						</span>
						<span className="text-secondary group-hover:text-white">
							المواد
						</span>
					</div>
				</div>
				<div className="flex gap-[6rem]">
					<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
						<MdOutlineHandshake className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
						<span className="text-secondary group-hover:text-white">
							بناء الثقة
						</span>
						<span className="text-secondary group-hover:text-white">
							بين العملاء
						</span>
					</div>
					<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
						<IoMdStopwatch className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
						<span className="text-secondary group-hover:text-white">
							توفير الوقت
						</span>
						<span className="text-secondary group-hover:text-white">
							و الجهد
						</span>
					</div>
				</div>
			</div>

			<div className="md:hidden h-fit w-full min-h-fit flex flex-col gap-8 justify-center items-center">
				<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
					<LiaWrenchSolid className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
					<span className="text-secondary group-hover:text-white">
						تنفيذ الأعمال
					</span>
					<span className="text-secondary group-hover:text-white">
						بأحدث التقنيات
					</span>
				</div>
				<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
					<RiMedalLine className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
					<span className="text-secondary group-hover:text-white">
						ضمان جودة
					</span>
					<span className="text-secondary group-hover:text-white">الأعمال</span>
				</div>
				<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
					<MdOutlineShoppingCart className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
					<span className="text-secondary group-hover:text-white">
						انتقاء أفضل
					</span>
					<span className="text-secondary group-hover:text-white">المواد</span>
				</div>
				<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
					<MdOutlineHandshake className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
					<span className="text-secondary group-hover:text-white">
						بناء الثقة
					</span>
					<span className="text-secondary group-hover:text-white">
						بين العملاء
					</span>
				</div>
				<div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
					<IoMdStopwatch className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
					<span className="text-secondary group-hover:text-white">
						توفير الوقت
					</span>
					<span className="text-secondary group-hover:text-white">و الجهد</span>
				</div>
			</div>
		</div>
	);
}
