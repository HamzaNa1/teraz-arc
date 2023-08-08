"use client";

import Contact from "@/components/Contact";
import Goals from "@/components/Goals";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import { useRef } from "react";

export default function Home() {
	const vision = useRef<HTMLDivElement>(null);
	const goals = useRef<HTMLDivElement>(null);
	const services = useRef<HTMLDivElement>(null);
	const portfolio = useRef<HTMLDivElement>(null);
	const contact = useRef<HTMLDivElement>(null);

	const elements = [vision, goals, services, portfolio, contact];

	return (
		<main className="w-screen overflow-hidden">
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
		</main>
	);
}
