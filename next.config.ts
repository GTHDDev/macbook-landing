import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	// async headers() {
	// 	return [
	// 		{
	// 			source: '/(.*)',
	// 			headers: [
	// 				{ key: 'X-Content-Type-Options', value: 'nosniff' },
	// 				{ key: 'X-Frame-Options', value: 'DENY' },
	// 				{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
	// 				{
	// 					key: 'Content-Security-Policy',
	// 					value: [
	// 						"default-src 'self'",
	// 						"script-src 'self' 'unsafe-eval' 'unsafe-inline'",
	// 						"worker-src 'self' blob:",
	// 						"child-src 'self' blob:",
	// 						"img-src 'self' data: blob:",
	// 						"connect-src 'self' *.google-analytics.com",
	// 						"style-src 'self' 'unsafe-inline'"
	// 					].join('; ')
	// 				}
	// 			]
	// 		}
	// 	]
	// },

	transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],

	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [320, 420, 768, 1024, 1200, 1440, 1920, 2560],
		minimumCacheTTL: 31536000
	},

	experimental: {
		optimizeCss: true,
		nextScriptWorkers: true,
		scrollRestoration: true
	},

	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
	}
}

export default nextConfig
