export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">須</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">須藤技術士事務所</h3>
                <p className="text-gray-400">情報工学部門</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              情報工学部門の技術士として、お客様のビジネス課題を技術的視点から解決いたします。
              システム設計・開発・コンサルティングを通じて、お客様の成功をサポートします。
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>〒000-0000 東京都○○区○○ 0-0-0</p>
              <p>TEL: 03-0000-0000</p>
              <p>Email: info@kensudo.jp</p>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  システム設計・開発
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  ITコンサルティング
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  技術指導・研修
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  システム保守・運用
                </a>
              </li>
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#engineer" className="hover:text-white transition-colors duration-200">
                  技術士紹介
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors duration-200">
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 技術スタック */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-4 text-center">対応技術</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            {[
              'Java', 'Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'Docker',
              'AWS', 'Azure', 'Kubernetes', 'TypeScript', 'Python', 'Node.js'
            ].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} 須藤技術士事務所. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            技術士（情報工学部門）須藤技術士事務所
          </p>
        </div>
      </div>
    </footer>
  );
} 