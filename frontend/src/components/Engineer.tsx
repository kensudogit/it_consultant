export default function Engineer() {
  return (
    <section id="engineer" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">技術士紹介</h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            情報工学部門の技術士として、豊富な経験と専門知識を活かし、
            <br className="hidden md:block" />
            お客様のビジネス課題を技術的視点から解決いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 技術士プロフィール */}
          <div className="order-2 lg:order-1">
            <div className="card">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-4xl font-bold"></span>
                </div>
                <h3 className="heading-2 mb-2">須藤 技術士</h3>
                <p className="text-primary-600 font-semibold">技術士（情報工学部門）</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="heading-3 mb-3">専門分野</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'システム設計', 'アーキテクチャ設計', 'データベース設計',
                      'Webアプリケーション開発', 'クラウドインフラ', 'DevOps',
                      'プロジェクト管理', '技術指導'
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="heading-3 mb-3">技術スタック</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">バックエンド</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li> Java / Spring Boot</li>
                        <li> Python / Django</li>
                        <li> Node.js / Express</li>
                        <li> PostgreSQL / MySQL</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">フロントエンド</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li> React / Next.js</li>
                        <li> TypeScript</li>
                        <li> Tailwind CSS</li>
                        <li> Vue.js</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">インフラ・ツール</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li> Docker / Kubernetes</li>
                        <li> AWS / Azure</li>
                        <li> Git / GitHub</li>
                        <li> CI/CD</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">その他</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li> プロジェクト管理</li>
                        <li> 要件定義</li>
                        <li> テスト設計</li>
                        <li> 技術文書作成</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 経歴・実績 */}
          <div className="order-1 lg:order-2">
            <h3 className="heading-2 mb-8">経歴・実績</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="heading-3 mb-4">職歴</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <div className="font-semibold text-gray-900">2020年 - 現在</div>
                    <div className="text-primary-600 font-medium">須藤技術士事務所 代表</div>
                    <p className="text-gray-600 mt-1">
                      情報工学部門の技術士として独立。システム設計・開発・コンサルティングサービスを提供。
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <div className="font-semibold text-gray-900">2015年 - 2020年</div>
                    <div className="text-gray-700 font-medium">大手IT企業 シニアエンジニア</div>
                    <p className="text-gray-600 mt-1">
                      大規模システムの設計・開発に従事。プロジェクトマネージャーとしても活躍。
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <div className="font-semibold text-gray-900">2010年 - 2015年</div>
                    <div className="text-gray-700 font-medium">システム開発会社 エンジニア</div>
                    <p className="text-gray-600 mt-1">
                      様々な業界向けシステム開発に携わり、幅広い技術と経験を習得。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="heading-3 mb-4">資格・認定</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">技術士（情報工学部門）</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">PMP（プロジェクトマネジメント・プロフェッショナル）</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">AWS認定ソリューションアーキテクト</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Microsoft認定Azure開発者</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="heading-3 mb-4">主な実績</h4>
                <div className="space-y-4">
                  <div className="card">
                    <h5 className="font-semibold text-gray-900 mb-2">製造業向け統合システム</h5>
                    <p className="text-sm text-gray-600">
                      年間売上100億円規模の製造業向けに、生産管理・在庫管理・販売管理を統合したシステムを構築。
                      生産性向上30%、コスト削減20%を実現。
                    </p>
                  </div>
                  <div className="card">
                    <h5 className="font-semibold text-gray-900 mb-2">金融機関向けリスク管理システム</h5>
                    <p className="text-sm text-gray-600">
                      大手銀行向けに、複雑な金融商品のリスク評価システムを開発。
                      リアルタイム監視と自動アラート機能により、リスク管理の効率化を実現。
                    </p>
                  </div>
                  <div className="card">
                    <h5 className="font-semibold text-gray-900 mb-2">スタートアップ向け技術指導</h5>
                    <p className="text-sm text-gray-600">
                      複数のスタートアップ企業に対して技術指導を実施。
                      開発チームの技術力向上とプロダクト品質向上に貢献。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 