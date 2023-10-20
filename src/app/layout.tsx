import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Script from "next/script";

const inter = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
	title: "Teraz",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-BRZVEE1FND" />
			<Script id="google-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-BRZVEE1FND');
        `}
			</Script>
			<body className={inter.className + " no-scrollbar"}>{children}</body>
		</html>
	);
}
