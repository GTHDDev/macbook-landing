import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import 'lenis/dist/lenis.css'
import LenisProvider from '@/components/providers/LenisProvider'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Apple Macbook M4',
	description: 'Know more about Apple Macbook M4 in 3D view - GTHDDev'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body>
				<LenisProvider>{children}</LenisProvider>
			</body>
		</html>
	)
}
