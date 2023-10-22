"use client";

import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function ScrollToTop() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{scrollPosition != 0 ? (
				<div
					className="fixed bottom-5 right-5 cursor-pointer z-50"
					onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
				>
					<BsFillArrowUpCircleFill className="fill-primary w-10 h-10 drop-shadow-md hover:fill-darkPrimary active:fill-darkPrimary transition duration-300" />
				</div>
			) : (
				<></>
			)}
		</>
	);
}
