export const metadata = {
  title: '3BSLab',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import FaqPage from '@/components/faq'
import Pricing from '@/components/pricing'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Pricing />
      <FaqPage/>
      <Newsletter />
    </>
  )
}
