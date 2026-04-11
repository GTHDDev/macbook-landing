'use client'

import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function GsapRegistry() {
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger, useGSAP)
		ScrollTrigger.config({
			limitCallbacks: true,
			ignoreMobileResize: true
		})
	}, [])

	return null
}
