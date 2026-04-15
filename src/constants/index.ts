const navLinks: Array<{ label: string }> = [
	{ label: 'Store' },
	{ label: 'Mac' },
	{ label: 'iPhone' },
	{ label: 'Watch' },
	{ label: 'Vision' },
	{ label: 'AirPods' }
]

const noChangeParts: string[] = [
	'Object_84',
	'Object_37',
	'Object_34',
	'Object_12',
	'Object_80',
	'Object_35',
	'Object_36',
	'Object_13',
	'Object_125',
	'Object_76',
	'Object_33',
	'Object_42',
	'Object_58',
	'Object_52',
	'Object_21',
	'Object_10'
]

const performanceImages: Array<{ id: string; src: string; alt: string }> = [
	{ id: 'p1', src: '/performance1.png', alt: 'performance1' },
	{ id: 'p2', src: '/performance2.png', alt: 'performance2' },
	{ id: 'p3', src: '/performance3.png', alt: 'performance3' },
	{ id: 'p4', src: '/performance4.png', alt: 'performance4' },
	{ id: 'p5', src: '/performance5.jpg', alt: 'performance5' },
	{ id: 'p6', src: '/performance6.png', alt: 'performance6' },
	{ id: 'p7', src: '/performance7.png', alt: 'performance7' }
]

const performanceImgPositions: Array<{
	id: string
	left?: number
	right?: number
	bottom: number
}> = [
	{
		id: 'p1',
		left: 5,
		bottom: 65
	},
	{
		id: 'p2',
		right: 10,
		bottom: 60
	},
	{
		id: 'p3',
		right: -5,
		bottom: 45
	},
	{
		id: 'p4',
		right: -10,
		bottom: 0
	},
	{
		id: 'p5',
		left: 20,
		bottom: 50
	},
	{
		id: 'p6',
		left: 2,
		bottom: 30
	},
	{
		id: 'p7',
		left: -5,
		bottom: 0
	}
]

const features: Array<{
	id: number
	icon: string
	highlight: string
	text: string
	styles: string
}> = [
	{
		id: 1,
		icon: '/feature-icon1.svg',
		highlight: 'Email AI.',
		text: 'Summarize and draft replies to emails instantly, so you stay on top of your inbox.',
		styles: 'left-5 md:left-20 top-[20%] opacity-0 translate-y-5'
	},
	{
		id: 2,
		icon: '/feature-icon2.svg',
		highlight: 'Image AI.',
		text: 'Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.',
		styles: 'right-5 md:right-20 top-[30%] opacity-0 translate-y-5'
	},
	{
		id: 3,
		icon: '/feature-icon3.svg',
		highlight: 'Summarize AI.',
		text: 'Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.',
		styles: 'left-5 md:left-20 top-[50%] opacity-0 translate-y-5'
	},
	{
		id: 4,
		icon: '/feature-icon4.svg',
		highlight: 'AirDrop.',
		text: 'Wirelessly share photos, large files, and more between your iPhone, Mac, & other devices.',
		styles: 'right-5 md:right-20 top-[70%] opacity-0 translate-y-5'
	},
	{
		id: 5,
		icon: '/feature-icon5.svg',
		highlight: 'Writing Tool.',
		text: 'Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.',
		styles: 'left-5 md:left-20 top-[90%] opacity-0 translate-y-5'
	}
]

const featureSequence: Array<{
	videoPath: string
	boxClass: string
	delay: number
}> = [
	{ videoPath: '/videos/feature-1.mp4 ', boxClass: ',box1 ', delay: 1 },
	{ videoPath: '/videos/feature-2.mp4 ', boxClass: ',box2 ', delay: 0 },
	{ videoPath: '/videos/feature-3.mp4 ', boxClass: ',box3 ', delay: 0 },
	{ videoPath: '/videos/feature-4.mp4 ', boxClass: ',box4 ', delay: 0 },
	{ videoPath: '/videos/feature-5.mp4 ', boxClass: ',box5 ', delay: 0 }
]

const footerLinks: Array<{ label: string; link: string }> = [
	{ label: 'Privacy Policy ', link: '#' },
	{ label: 'Terms of Use ', link: '#' },
	{ label: 'Sales Policy ', link: '#' },
	{ label: 'Legal ', link: '#' },
	{ label: 'Site Map ', link: '#' }
]

export {
	features,
	featureSequence,
	footerLinks,
	navLinks,
	noChangeParts,
	performanceImages,
	performanceImgPositions
}
