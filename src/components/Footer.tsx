import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer>
			<div className='info'>
				<p>
					More ways to shop: Find an Apple Store or other retailer near you. Or
					call 000800 040 1966.
				</p>
				<Image src='/logo.svg' alt='Apple logo' fill />
			</div>

			<hr />

			<div className='links'>
				<p>Copyright © 2024 Apple Inc. All rights reserved.</p>

				<ul>
					{footerLinks.map(({ label, link }) => (
						<li key={label}>
							<Link href={link}>{label}</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
