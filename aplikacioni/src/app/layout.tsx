import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "RideShare",
	description: "Udhëtime për studentët e AAB-së",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="sq">
			<body>{children}</body>
		</html>
	);
}
