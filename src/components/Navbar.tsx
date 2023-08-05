"use client";

import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
	return (
		<>
			<div className="container max-w-full h-[5rem] bg-white">
				<div className="w-full h-full flex justify-end">
					<div className="hidden md:flex w-full justify-center items-center text-primary text-3xl">
						<button className="m-auto">تواصل</button>
						<button className="m-auto">أعمالنا</button>
						<button className="m-auto">خدماتنا</button>
						<button className="m-auto">أهدافنا</button>
						<button className="m-auto">رؤيتنا</button>
					</div>
					<div className="md:hidden mr-auto">
						<GiHamburgerMenu className="fill-primary h-full w-full p-4" />
					</div>

					<div className="h-full p-2">
						<img
							src="/images/icon.svg"
							alt=""
							className="object-contain w-full h-full"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
