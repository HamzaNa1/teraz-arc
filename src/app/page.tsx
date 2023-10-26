import Contact from "@/components/Contact";
import Goals from "@/components/Goals";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
	return (
		<>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-G9LLQX596V" />
			<Script id="google-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-G9LLQX596V');
        `}
			</Script>
			<main className="w-screen max-w-[100vw] overflow-hidden">
				<Main />
				<div id="vision">
					<Vision />
				</div>
				<div id="goals">
					<Goals />
				</div>
				<div id="services">
					<Services />
				</div>
				<div id="portfolio">
					<Portfolio />
				</div>
				<div id="contact">
					<Contact />
				</div>
				<ScrollToTop />
			</main>
		</>
	);
}
