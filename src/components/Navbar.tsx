"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
	const [menuShown, setMenuShown] = useState(false);

	return (
		<>
			<div className="container max-w-full h-[5rem] bg-white">
				<div className="w-full h-full flex justify-between">
					<div className="hidden lg:flex w-full justify-center items-center text-3xl gap-20 text-primary">
						<button
							className="hover:text-darkPrimary transition duration-100"
							onClick={() =>
								document
									.getElementById("contact")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							تواصل
						</button>
						<button
							className="hover:text-darkPrimary transition duration-100"
							onClick={() =>
								document
									.getElementById("portfolio")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							أعمالنا
						</button>
						<button
							className="hover:text-darkPrimary transition duration-100"
							onClick={() =>
								document
									.getElementById("services")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							خدماتنا
						</button>
						<button
							className="hover:text-darkPrimary transition duration-100"
							onClick={() =>
								document
									.getElementById("goals")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							أهدافنا
						</button>
						<button
							className="hover:text-darkPrimary transition duration-100"
							onClick={() =>
								document
									.getElementById("vision")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							رؤيتنا
						</button>
					</div>
					<div
						className="lg:hidden w-20 h-full p-4"
						onClick={() => setMenuShown(!menuShown)}
					>
						<GiHamburgerMenu className="fill-primary w-full h-full" />
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
			{menuShown ? (
				<div className="flex flex-col p-2 bg-white text-black">
					<button
						className="text-start active:bg-primary active:text-white p-2 transition duration-100 rounded-md"
						onClick={() => {
							setMenuShown(false);
							document
								.getElementById("vision")
								?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						رؤيتنا
					</button>
					<button
						className="text-start active:bg-primary active:text-white p-2 transition duration-100 rounded-md"
						onClick={() => {
							setMenuShown(false);
							document
								.getElementById("goals")
								?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						أهدافنا
					</button>
					<button
						className="text-start active:bg-primary active:text-white p-2 transition duration-100 rounded-md"
						onClick={() => {
							setMenuShown(false);
							document
								.getElementById("services")
								?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						خدماتنا
					</button>
					<button
						className="text-start active:bg-primary active:text-white p-2 transition duration-100 rounded-md"
						onClick={() => {
							setMenuShown(false);
							document
								.getElementById("portfolio")
								?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						أعمالنا
					</button>
					<button
						className="text-start active:bg-primary active:text-white p-2 transition duration-100 rounded-md"
						onClick={() => {
							setMenuShown(false);
							document
								.getElementById("contact")
								?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						تواصل
					</button>
				</div>
			) : (
				<></>
			)}
		</>
	);
}
