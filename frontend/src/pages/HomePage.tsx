import XLayout from '@/components/XLayout'
import XFeed from '@/components/XFeed'
import Hero from '@/components/Hero'
//import Services from '@/components/Services'
//import Engineer from '@/components/Engineer'
//import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <XLayout>
        <XFeed />
      </XLayout>
      
      {/* メインコンテンツ */}
      <main>
        <Hero />
        {/*<Services />*/}
        {/*<Engineer />*/}
        {/*<About />*/}
        <Contact />
      </main>
      
      <Footer />
    </>
  )
} 