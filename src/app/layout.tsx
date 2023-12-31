import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";

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
			<body className={inter.className + " no-scrollbar"}>{children}</body>
		</html>
	);
}
