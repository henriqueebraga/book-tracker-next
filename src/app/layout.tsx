import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import CookieContextProvider from "@/context-api/Cookie/CookieContextProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Book Tracker"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true} className={`${inter.className} bg-slate-800 text-slate-100 mx-auto px-32`}>
				<CookieContextProvider>
					<Header />
					{children}
				</CookieContextProvider>
			</body>
		</html>
	);
}
