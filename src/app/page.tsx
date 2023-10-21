"use client";

import Contact from "@/components/Contact";
import Goals from "@/components/Goals";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import { useEffect, useRef, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Script from "next/script";

export default function Home() {
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

	const vision = useRef<HTMLDivElement>(null);
	const goals = useRef<HTMLDivElement>(null);
	const services = useRef<HTMLDivElement>(null);
	const portfolio = useRef<HTMLDivElement>(null);
	const contact = useRef<HTMLDivElement>(null);

	const elements = [vision, goals, services, portfolio, contact];

	return (
		<>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-BRZVEE1FND" />
			<Script id="google-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-BRZVEE1FND');
        `}
			</Script>{" "}
			<main className="w-screen max-w-[100vw] overflow-hidden">
				<Main elements={elements} />
				<div ref={vision}>
					<Vision />
				</div>
				<div ref={goals}>
					<Goals />
				</div>
				<div ref={services}>
					<Services />
				</div>
				<div ref={portfolio}>
					<Portfolio />
				</div>
				<div ref={contact}>
					<Contact />
				</div>
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
			</main>
		</>
	);
}
