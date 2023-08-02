import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";

const inter = Cairo({ subsets: ["arabic"] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
