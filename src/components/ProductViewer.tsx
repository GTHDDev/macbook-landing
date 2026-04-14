'use client'

import { useMemo } from 'react'
import useMacbookStore from '@/store'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { useMediaQuery } from 'react-responsive'
import StudioLights from './three/StudioLights'
import ModelSwitcher from './three/ModelSwitcher'

export default function ProductViewer() {
	const { color, setColor, scale, setScale } = useMacbookStore()

	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

	const controls = useMemo(
		() => [
			{
				id: 'color-space-gray',
				label: 'Space Gray',
				value: '#adb5bd',
				className: 'bg-[#adb5bd]'
			},
			{
				id: 'color-dark',
				label: 'Midnight',
				value: '#2e2c2e',
				className: 'bg-[#2e2c2e]'
			}
		],
		[]
	)

	const sizes = useMemo(
		() => [
			{ label: '14', value: 0.06 },
			{ label: '16', value: 0.08 }
		],
		[]
	)

	return (
		<section id='product-viewer' aria-labelledby='viewer-heading'>
			<h2 id='viewer-heading'>Take a closer look</h2>

			<div
				className='controls'
				role='region'
				aria-label='Product customization'
			>
				<p className='info'>
					MacBook Pro | Available in 14 & 16 in Space Gray & Midnight
				</p>

				<div className='flex flex-col sm:flex-row items-center justify-center gap-5 mt-5'>
					<div className='color-control' role='group' aria-label='Select color'>
						{controls.map((item) => (
							<button
								key={item.id}
								type='button'
								aria-label={item.label}
								aria-pressed={color === item.value}
								className={clsx(
									'size-7 rounded-full cursor-pointer transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
									item.className,
									color === item.value &&
										'ring-4 ring-offset-2 ring-white scale-110'
								)}
								onClick={() => setColor(item.value)}
							/>
						))}
					</div>

					<div className='size-control' role='group' aria-label='Select size'>
						{sizes.map((size) => (
							<button
								key={size.label}
								type='button'
								aria-label={`${size.label} inch model`}
								aria-pressed={scale === size.value}
								className={clsx(
									'size-10 rounded-full cursor-pointer flex-center transition-all duration-300 font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
									scale === size.value
										? 'bg-white text-black'
										: 'bg-neutral-800 text-white hover:bg-neutral-700'
								)}
								onClick={() => setScale(size.value)}
							>
								{size.label}
							</button>
						))}
					</div>
				</div>
			</div>

			<Canvas
				id='canvas'
				camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
			>
				<StudioLights />

				<ModelSwitcher
					scale={isMobile ? scale - 0.03 : scale}
					isMobile={isMobile}
				/>
			</Canvas>

			<div className='sr-only' aria-live='polite'>
				Viewing Apple MacBook Pro model {scale === 0.06 ? '14' : '16'} inch in{' '}
				{color === '#adb5bd' ? 'Space Gray' : 'Midnight'} color.
			</div>
		</section>
	)
}
