'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const videoRef = useRef<HTMLVideoElement>(null)

	useGSAP(
		() => {
			const tl = gsap.timeline({
				defaults: { ease: 'power3.out', duration: 1.5 }
			})

			tl.fromTo(
				'#hero-title',
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, delay: 0.5 }
			)
				.fromTo('#hero-video', { opacity: 0 }, { opacity: 1 }, '<')
				.fromTo(
					'#hero-cta',
					{ opacity: 0, scale: 0.9 },
					{ opacity: 1, scale: 1 },
					'-=1'
				)
		},
		{ scope: containerRef }
	)

	return (
		<section
			ref={containerRef}
			id='hero'
			className='relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-black'
			aria-label='MacBook Pro Introduction'
		>
			<div
				id='hero-title'
				className='z-10 flex flex-col items-center text-center'
			>
				<h1 className='text-3xl font-semibold text-white md:text-5xl'>
					MacBook Pro
				</h1>
				<div className='relative h-[100px] w-[300px] md:h-[200px] md:w-[800px]'>
					<Image
						src='/title.png'
						alt='Built for Apple Intelligence'
						fill
						priority
						sizes='(max-width: 768px) 300px, 800px'
						className='object-contain'
					/>
				</div>
			</div>

			<div className='relative mt-10 w-full max-w-[1200px] px-4'>
				<video
					id='hero-video'
					ref={videoRef}
					autoPlay
					muted
					playsInline
					preload='auto'
					className='w-full rounded-xl object-cover pointer-events-none'
					aria-hidden='true'
				>
					<source
						src='/videos/hero.mp4'
						type='video/mp4'
						media='(max-width: 768px)'
					/>
					<source src='/videos/hero.mp4' type='video/mp4' />
				</video>
			</div>

			<div id='hero-cta' className='z-10 mt-8 flex flex-col items-center gap-4'>
				<button className='rounded-full bg-primary px-8 py-3 text-white transition-all hover:bg-[#0077ed]'>
					Buy
				</button>
				<p className='text-sm text-gray-400'>
					From $1599 or $133/mo for 12 months
				</p>
			</div>
		</section>
	)
}

export default Hero
