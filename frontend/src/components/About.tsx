export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 会社情報 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">会社概要</h2>
            <p className="text-lg text-gray-600 mb-8">
              須藤技術士事務所は、情報工学部門の技術士として、お客様のビジネス課題を技術的視点から解決する専門事務所です。
              豊富な経験と最新技術を組み合わせ、高品質なソリューションを提供いたします。
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">技術士資格</h3>
                  <p className="text-gray-600">
                    情報工学部門の技術士として、高度な技術力と豊富な経験を有しています。
                    技術士法に基づく技術士として、社会的責任を自覚し、技術を通じて社会の発展に貢献します。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">豊富な実績</h3>
                  <p className="text-gray-600">
                    大手企業から中小企業まで、様々な規模のプロジェクトに携わってきました。
                    各業界の特性を理解し、お客様のニーズに最適化されたソリューションを提供します。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">継続的なサポート</h3>
                  <p className="text-gray-600">
                    システム導入後も継続的なサポートを提供し、お客様のビジネスの成長をサポートします。
                    技術の進歩に合わせて、常に最新のソリューションをご提案いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 会社詳細情報 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">会社情報</h3>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-900 mb-1">会社名</dt>
                <dd className="text-gray-600">須藤技術士事務所</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-1">代表者</dt>
                <dd className="text-gray-600">須藤 技術士（情報工学部門）</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-1">所在地</dt>
                <dd className="text-gray-600">
                  〒000-0000<br />
                  東京都○○区○○ 0-0-0
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-1">電話番号</dt>
                <dd className="text-gray-600">03-0000-0000</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-1">メールアドレス</dt>
                <dd className="text-gray-600">info@kensudo.jp</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-1">事業内容</dt>
                <dd className="text-gray-600">
                  • システム設計・開発<br />
                  • ITコンサルティング<br />
                  • 技術指導・研修<br />
                  • システム保守・運用
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-1">資格</dt>
                <dd className="text-gray-600">技術士（情報工学部門）</dd>
              </div>
            </dl>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href="#contact"
                className="w-full text-center inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                aria-label="会社概要についてお問い合わせ"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>

        {/* 実績・事例 */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">実績・事例</h3>
            <p className="text-lg text-gray-600">
              これまでに携わったプロジェクトの一部をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '製造業向け生産管理システム',
                description: '生産計画から在庫管理まで、製造プロセス全体を統合管理するシステムを構築。生産性向上とコスト削減を実現。',
                industry: '製造業',
                duration: '6ヶ月'
              },
              {
                title: '金融機関向けリスク管理システム',
                description: '複雑な金融商品のリスク評価と管理を行うシステムを開発。リアルタイム監視と自動アラート機能を実装。',
                industry: '金融業',
                duration: '12ヶ月'
              },
              {
                title: '小売業向けECサイト構築',
                description: 'モダンな技術スタックを使用したECサイトを構築。レスポンシブデザインと高速なパフォーマンスを実現。',
                industry: '小売業',
                duration: '4ヶ月'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 transform hover:-translate-y-1">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {project.industry}
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                    {project.duration}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 