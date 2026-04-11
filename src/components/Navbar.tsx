import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
	return (
		<header role='banner'>
			<nav aria-label='main navigation'>
				<Link href='/' aria-label='Home - Apple' tabIndex={0}>
					<Image
						src='/logo.svg'
						alt='Logo de Apple'
						width={24}
						height={24}
						loading='eager'
					/>
				</Link>

				<ul role='menubar' aria-label='Navigation links'>
					{navLinks.map(({ label }) => (
						<li key={label} role='none'>
							<Link
								href={`/${label.toLowerCase()}`}
								tabIndex={0}
								role='menuitem'
								aria-current={label === 'Home' ? 'page' : undefined}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>

				<div className='flex-center gap-3' role='toolbar' aria-label='Actions'>
					<button
						type='button'
						aria-label='Open Search'
						aria-expanded='false'
						tabIndex={0}
					>
						<Image
							src='/search.svg'
							alt=''
							aria-hidden='true'
							width={24}
							height={24}
						/>
					</button>
					<button type='button' aria-label='Open Cart' tabIndex={0}>
						<Image
							src='/cart.svg'
							alt=''
							aria-hidden='true'
							width={24}
							height={24}
						/>
					</button>
				</div>
			</nav>
		</header>
	)
}
