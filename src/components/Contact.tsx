import Link from "next/link";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

export default function Contact() {
	return (
		<div className="container max-w-full h-fit min-h-[720px] bg-secondaryPage p-10">
			<div className="h-full flex flex-col justify-center items-center gap-10">
				<div className="md:w-[25%] w-[50%] flex justify-center">
					<img src="/images/icon.svg" alt="" className="w-[45vh]" />
				</div>

				<div className="flex flex-col gap-5 text-center">
					<span className="text-3xl md:text-4xl text-black">
						بكل تأكيد هناك المزيد من الأعمال والتفاصيل
					</span>
					<span className="text-3xl md:text-4xl text-black justify-center">
						لا تتردد بالتواصل معنا
					</span>
				</div>

				<div className="grid md:grid-cols-2 grid-cols-1 gap-x-32 gap-y-16 place-items-start ">
					<div className="flex flex-row gap-3 justify-center items-center">
						<img src="/images/home.svg"></img>
						<span className="text-black text-3xl md:text-4xl">
							Saudi Arabia
						</span>
					</div>

					<div className="flex flex-row gap-3 justify-center items-center	">
						<img src="/images/call.svg"></img>
						<span className="text-black text-3xl md:text-4xl">0504518753</span>
					</div>

					<div className="flex flex-row gap-3 justify-center items-center">
						<img src="/images/mail.svg"></img>
						<span className="text-black text-3xl md:text-4xl text-justify">
							info@terazart.com
						</span>
					</div>

					<div className="flex flex-row gap-3 justify-center items-center">
						<img src="/images/call.svg"></img>
						<span className="text-black text-3xl md:text-4xl">011-470098</span>
					</div>

					<Link
						href="https://www.instagram.com/terazarc/"
						rel="noopener noreferrer"
						target="_blank"
						className="flex flex-row gap-3 justify-center items-center group"
					>
						<AiOutlineInstagram className="fill-black w-14 h-full group-hover:fill-primary transition duration-200" />
						<span className="text-black text-3xl md:text-4xl group-hover:text-primary transition duration-200">
							@Terazarc
						</span>
					</Link>

					<Link
						href="https://api.whatsapp.com/send?phone=966504518753"
						rel="noopener noreferrer"
						target="_blank"
						className="flex flex-row gap-3 justify-center items-center group"
					>
						<AiOutlineWhatsApp className="fill-black w-14 h-full group-hover:fill-primary transition duration-200" />
						<span className="text-black text-3xl md:text-4xl group-hover:text-primary transition duration-200">
							+966 504518753
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
