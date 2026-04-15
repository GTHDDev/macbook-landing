'use client'

import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

export default function Highlights() {
	const containerRef = useRef<HTMLElement>(null)
	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

	useGSAP(
		() => {
			gsap.to(['.left-column', '.right-column'], {
				scrollTrigger: {
					trigger: containerRef.current,
					start: isMobile ? 'top 80%' : 'top center'
				},
				y: 0,
				opacity: 1,
				stagger: 0.2,
				duration: 1,
				ease: 'power2.out'
			})
		},
		{ scope: containerRef, dependencies: [isMobile] }
	)

	return (
		<section
			id='highlights'
			ref={containerRef}
			aria-label='MacBook Pro Features Highlights'
		>
			<h2>There’s never been a better time to upgrade.</h2>
			<h3>Here’s what you get with the new MacBook Pro.</h3>

			<div className='masonry'>
				<div className='left-column'>
					<div>
						<Image
							src='/laptop.png'
							alt=''
							aria-hidden='true'
							width={106}
							height={106}
							loading='lazy'
							className='object-contain'
						/>
						<p>Fly through demanding tasks up to 9.8x faster.</p>
					</div>
					<div>
						<Image
							src='/sun.png'
							alt=''
							aria-hidden='true'
							width={87}
							height={113}
							loading='lazy'
							className='object-contain'
						/>
						<p>
							A stunning <br />
							Liquid Retina XDR <br />
							display.
						</p>
					</div>
				</div>

				<div className='right-column'>
					<div className='apple-gradient'>
						<Image
							src='/ai.png'
							alt=''
							aria-hidden='true'
							width={100}
							height={78}
							loading='lazy'
							className='object-contain'
						/>
						<p>
							Built for <br />
							<span>Apple Intelligence.</span>
						</p>
					</div>
					<div>
						<Image
							src='/battery.png'
							alt=''
							aria-hidden='true'
							width={93}
							height={100}
							loading='lazy'
							className='object-contain'
						/>
						<p>
							Up to
							<span className='green-gradient'> 14 more hours </span>
							battery life.
							<span className='text-dark-100'> (Up to 24 hours total.)</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
