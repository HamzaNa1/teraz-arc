import Contact from "@/components/Contact";
import Goals from "@/components/Goals";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Vision from "@/components/Vision";

export default function Home() {
	return (
		<main className="w-screen overflow-hidden">
			<Main />
			<Vision />
			<Goals />
			<Services />
			<Portfolio />
			<Contact />
		</main>
	);
}
