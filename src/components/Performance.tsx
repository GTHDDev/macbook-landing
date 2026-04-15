/* eslint-disable @next/next/no-img-element */
'use client'

import { performanceImages, performanceImgPositions } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Performance() {
	const containerRef = useRef<HTMLElement>(null)
	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

	useGSAP(
		() => {
			if (!isMobile) {
				const containerElement = containerRef.current
				if (!containerElement) return

				gsap.fromTo(
					'.content p',
					{ opacity: 0, y: 10 },
					{
						opacity: 1,
						y: 0,
						ease: 'power1.out',
						scrollTrigger: {
							trigger: '.content p',
							start: 'top bottom',
							end: 'top center',
							scrub: true,
							invalidateOnRefresh: true
						}
					}
				)

				if (isMobile) return

				const timeline = gsap.timeline({
					defaults: { duration: 2, ease: 'power1.inOut', overwrite: 'auto' },
					scrollTrigger: {
						trigger: containerElement,
						start: 'top bottom',
						end: 'bottom top',
						scrub: 1,
						invalidateOnRefresh: true
					}
				})

				performanceImgPositions.forEach((item) => {
					if (item.id === 'p5') return

					const selector = `.${item.id}`
					const vars = {}

					if (typeof item.left === 'number') {
						vars.left = `${item.left}%`
					}
					if (typeof item.right === 'number') vars.right = `${item.right}%`
					if (typeof item.bottom === 'number') vars.bottom = `${item.bottom}%`

					if (item.transform) vars.transform = item.transform

					timeline.to(selector, vars, 0)
				})
			}
		},
		{ scope: containerRef, dependencies: [isMobile] }
	)

	return (
		<section id='performance' ref={containerRef}>
			<h2>Next-level graphics performance. Game on.</h2>

			<div className='wrapper'>
				{performanceImages.map(({ src, id, alt }) => (
					<img key={id} alt={alt} className={id} src={src} />
				))}
			</div>

			<div className='content'>
				<p className='text'>
					Run graphics-intensive workflows with a responsiveness that keeps up
					with your imagination. The M4 family of chips features a GPU with a
					second-generation hardware-accelerated ray tracing engine that renders
					images faster, so{' '}
					<span className='text-white'>
						gaming feels more immersive and realistic than ever.
					</span>{' '}
					And Dynamic Caching optimizes fast on-chip memory to dramatically
					increase average GPU utilization — driving a huge performance boost
					for the most demanding pro apps and games.
				</p>
			</div>
		</section>
	)
}
