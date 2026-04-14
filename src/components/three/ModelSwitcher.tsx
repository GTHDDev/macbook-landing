'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { PresentationControls } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { Macbook16Model } from '@/components/models/Macbook-16'
import { Macbook14Model } from '@/components/models/Macbook-14'

const ANIMATION_DURATION = 1
const OFFSET_DISTANCE = 5

interface ModelSwitcherProps {
	scale: number
	isMobile: boolean
}

const fadeMeshes = (group: THREE.Group | null, opacity: number) => {
	if (!group) return

	group.traverse((child) => {
		// Type Guard para asegurar que es un Mesh y tiene material
		if (child instanceof THREE.Mesh) {
			const material = child.material as THREE.Material
			material.transparent = true
			gsap.to(material, { opacity, duration: ANIMATION_DURATION })
		}
	})
}

const moveGroup = (group: THREE.Group | null, x: number) => {
	if (!group) return
	gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

export default function ModelSwitcher({ scale, isMobile }: ModelSwitcherProps) {
	const SCALE_LARGE_DESKTOP = 0.08
	const SCALE_LARGE_MOBILE = 0.05

	const smallMacbookRef = useRef<THREE.Group>(null)
	const largeMacbookRef = useRef<THREE.Group>(null)

	const showLargeMacbook =
		scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE

	useGSAP(() => {
		if (showLargeMacbook) {
			moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE)
			moveGroup(largeMacbookRef.current, 0)

			fadeMeshes(smallMacbookRef.current, 0)
			fadeMeshes(largeMacbookRef.current, 1)
		} else {
			moveGroup(smallMacbookRef.current, 0)
			moveGroup(largeMacbookRef.current, OFFSET_DISTANCE)

			fadeMeshes(smallMacbookRef.current, 1)
			fadeMeshes(largeMacbookRef.current, 0)
		}
	}, [scale])

	const controlsConfig = {
		snap: true,
		speed: 1,
		zoom: 1,
		azimuth: [-Infinity, Infinity] as [number, number],
		config: { mass: 1, tension: 0, friction: 26 }
	}

	return (
		<>
			<PresentationControls {...controlsConfig}>
				<group ref={largeMacbookRef}>
					<Macbook16Model scale={isMobile ? 0.05 : 0.08} />
				</group>
			</PresentationControls>

			<PresentationControls {...controlsConfig}>
				<group ref={smallMacbookRef}>
					<Macbook14Model scale={isMobile ? 0.03 : 0.06} />
				</group>
			</PresentationControls>
		</>
	)
}
