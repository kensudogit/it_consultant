import { useState, useEffect } from 'react';

export default function Engineer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const achievements = [
    {
      title: "製造業向け統合システム",
      description: "年間売上100億円規模の製造業向けに、生産管理・在庫管理・販売管理を統合したシステムを構築。生産性向上30%、コスト削減20%を実現。"
    },
    {
      title: "金融機関向けリスク管理システム",
      description: "大手銀行向けに、複雑な金融商品のリスク評価システムを開発。リアルタイム監視と自動アラート機能により、リスク管理の効率化を実現。"
    },
    {
      title: "スタートアップ向け技術指導",
      description: "複数のスタートアップ企業に対して技術指導を実施。開発チームの技術力向上とプロダクト品質向上に貢献。"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [achievements.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

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

                <div className="flex justify-center mt-4">
                    <a 
                      href="https://github.com/kensudogit/it_consultant" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>GitHubリポジトリを確認</span>
                    </a>
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
                <div className="relative">
                  {/* スライダーコンテナ */}
                  <div className="overflow-hidden rounded-xl">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {achievements.map((achievement, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                          <div className="card mx-2">
                            <h5 className="font-semibold text-gray-900 mb-2">{achievement.title}</h5>
                            <p className="text-sm text-gray-700">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ナビゲーションボタン */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
                    aria-label="前の実績"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
                    aria-label="次の実績"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* ドットインジケーター */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {achievements.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-primary-600 scale-110' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`実績 ${index + 1} に移動`}
                      />
                    ))}
                  </div>

                  {/* GitHubボタン */}
                  <div className="flex justify-center mt-6">
                    <a 
                      href="https://github.com/kensudogit/it_consultant" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>GitHubリポジトリを確認</span>
                    </a>
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