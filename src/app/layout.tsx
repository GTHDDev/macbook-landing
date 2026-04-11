import type { Metadata } from 'next'
import './globals.css'
import 'lenis/dist/lenis.css'
import LenisProvider from '@/components/providers/LenisProvider'
import GsapRegistry from '@/components/providers/GsapRegistry'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
	title: 'Apple Macbook M4',
	description: 'Know more about Apple Macbook M4 in 3D view - GTHDDev'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className='antialiased'>
			<body>
				<GsapRegistry />
				<LenisProvider>
					<Navbar />
					{children}
				</LenisProvider>
			</body>
		</html>
	)
}
