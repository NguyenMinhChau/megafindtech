'use client';
import { Footer, Header, ScrollToTop } from '../../components';
import { Providers } from './providers';
const AOS = require('aos');
import './globals.css';
import { useEffect } from 'react';

export const metadata = {
	title: `IFX EXPO - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<html suppressHydrationWarning lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
				<meta
					name="description"
					content="Broker Compare • Trader & Investments"
				/>
				<link rel="icon" href="./images/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
				/>
				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				/>
				<meta property="og:image" content="./images/favicon.ico" />
				<script
					defer
					src="https://kit.fontawesome.com/cc3041f69f.js"
					crossOrigin="anonymous"
				></script>
				<script
					defer
					src="https://unpkg.com/aos@2.3.1/dist/aos.js"
				></script>
				<title>{`IFX EXPO - ${process.env.NEXT_PUBLIC_TITLE_APP}`}</title>
			</head>
			<body className="dark:bg-black">
				<Providers>
					<Header />
					{children}
					<Footer />
					<ScrollToTop />
				</Providers>
			</body>
		</html>
	);
}
