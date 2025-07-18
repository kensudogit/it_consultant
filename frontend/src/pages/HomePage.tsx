import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Engineer from '@/components/Engineer'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <Header />

      {/* スキップリンク */}
      <a href="#main-content" className="skip-link">
        メインコンテンツにスキップ
      </a>

      {/* ヒーローセクション */}
      <Hero />

      {/* メインコンテンツ */}
      <div id="main-content">
        {/* サービス紹介 */}
        <section id="services">
          <Services />
        </section>

        {/* 技術士紹介 */}
        <section id="engineer">
          <Engineer />
        </section>

        {/* 会社概要 */}
        <section id="about">
          <About />
        </section>

        {/* お問い合わせ */}
        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* フッター */}
      <Footer />
    </div>
  )
} 