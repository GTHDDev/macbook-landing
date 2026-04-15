import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Performance from '@/components/Performance'
import ProductViewer from '@/components/ProductViewer'
import Showcase from '@/components/Showcase'

export default function Home() {
	return (
		<main>
			<Hero />
			<ProductViewer />
			<Showcase />
			<Performance />
			<Features />
		</main>
	)
}
