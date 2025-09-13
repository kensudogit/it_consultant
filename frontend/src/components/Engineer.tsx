import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, User, Tag } from 'lucide-react';

export default function Engineer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBlogSlide, setCurrentBlogSlide] = useState(0);
  
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

  const blogArticles = [
    {
      id: 1,
      title: "React 18の新機能とパフォーマンス最適化の実践",
      excerpt: "React 18で導入されたConcurrent Features、Suspense、Automatic Batchingなどの新機能を実際のプロジェクトで活用する方法を解説します。",
      author: "須藤技術士",
      date: "2024-01-15",
      category: "フロントエンド",
      tags: ["React", "JavaScript", "パフォーマンス"],
      readTime: "8分",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      link: "https://frontend-2rxetsy1j-kensudogits-projects.vercel.app/"
    },
    {
      id: 2,
      title: "マイクロサービスアーキテクチャの設計パターンとベストプラクティス",
      excerpt: "大規模システムにおけるマイクロサービス設計の実践的なアプローチと、よくある課題への対処法について詳しく解説します。",
      author: "須藤技術士",
      date: "2024-01-10",
      category: "アーキテクチャ",
      tags: ["マイクロサービス", "Docker", "Kubernetes"],
      readTime: "12分",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      link: "https://frontend-2rxetsy1j-kensudogits-projects.vercel.app/"
    },
    {
      id: 3,
      title: "TypeScript 5.0の新機能と型安全性の向上",
      excerpt: "TypeScript 5.0で追加された新機能と、より安全で保守性の高いコードを書くためのテクニックを紹介します。",
      author: "須藤技術士",
      date: "2024-01-05",
      category: "プログラミング",
      tags: ["TypeScript", "型安全性", "開発効率"],
      readTime: "6分",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
      link: "https://frontend-2rxetsy1j-kensudogits-projects.vercel.app/"
    },
    {
      id: 4,
      title: "AWS LambdaとServerless Architectureの実践的活用法",
      excerpt: "サーバーレスアーキテクチャの設計から実装まで、実際のプロジェクトでの経験を基にした実践的なガイドです。",
      author: "須藤技術士",
      date: "2024-01-01",
      category: "クラウド",
      tags: ["AWS", "Lambda", "Serverless"],
      readTime: "10分",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      link: "https://frontend-2rxetsy1j-kensudogits-projects.vercel.app/"
    },
    {
      id: 5,
      title: "データベース設計とパフォーマンス最適化の実践",
      excerpt: "PostgreSQLとMySQLを使った効率的なデータベース設計と、クエリ最適化のテクニックを詳しく解説します。",
      author: "須藤技術士",
      date: "2023-12-28",
      category: "データベース",
      tags: ["PostgreSQL", "MySQL", "最適化"],
      readTime: "15分",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
      link: "https://frontend-2rxetsy1j-kensudogits-projects.vercel.app/"
    },
    {
      id: 6,
      title: "DevOpsとCI/CDパイプラインの構築と運用",
      excerpt: "GitHub Actions、Docker、Kubernetesを活用した現代的なCI/CDパイプラインの構築方法を実例とともに紹介します。",
      author: "須藤技術士",
      date: "2023-12-25",
      category: "DevOps",
      tags: ["CI/CD", "Docker", "Kubernetes"],
      readTime: "11分",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
      link: "https://frontend-2rxetsy1j-kensudogits-projects.vercel.app/"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [achievements.length]);

  useEffect(() => {
    const blogTimer = setInterval(() => {
      setCurrentBlogSlide((prev) => (prev + 1) % Math.ceil(blogArticles.length / 3));
    }, 6000);

    return () => clearInterval(blogTimer);
  }, [blogArticles.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const goToBlogSlide = (index: number) => {
    setCurrentBlogSlide(index);
  };

  const nextBlogSlide = () => {
    setCurrentBlogSlide((prev) => (prev + 1) % Math.ceil(blogArticles.length / 3));
  };

  const prevBlogSlide = () => {
    setCurrentBlogSlide((prev) => (prev - 1 + Math.ceil(blogArticles.length / 3)) % Math.ceil(blogArticles.length / 3));
  };

  return (
    <section id="engineer" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="heading-2 mb-8 heading-gradient">技術士紹介</h2>
          <p className="body-large text-slate-600 max-w-4xl mx-auto leading-relaxed">
            情報工学部門の技術士として、豊富な経験と専門知識を活かし、
            <br className="hidden md:block" />
            お客様のビジネス課題を技術的視点から解決いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 技術士プロフィール */}
          <div className="order-2 lg:order-1">
            <div className="card">
              <div className="text-center mb-10">
                <div className="w-36 h-36 bg-gradient-to-br from-slate-900 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="heading-2 mb-3 text-slate-900">須藤 技術士</h3>
                <p className="text-slate-600 font-medium text-lg">技術士（情報工学部門）</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="heading-3 mb-4 text-slate-900">専門分野</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'システム設計', 'アーキテクチャ設計', 'データベース設計',
                      'Webアプリケーション開発', 'クラウドインフラ', 'DevOps',
                      'プロジェクト管理', '技術指導'
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-200 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                    <a 
                      href="https://github.com/kensudogit/it_consultant" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>GitHubリポジトリを確認</span>
                    </a>
                  </div>

                <div>
                  <h4 className="heading-3 mb-3 text-slate-800">技術スタック</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-2">バックエンド</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li> Java / Spring Boot</li>
                        <li> Python / Django</li>
                        <li> Node.js / Express</li>
                        <li> PostgreSQL / MySQL</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-2">フロントエンド</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li> React / Next.js</li>
                        <li> TypeScript</li>
                        <li> Tailwind CSS</li>
                        <li> Vue.js</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-2">インフラ・ツール</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li> Docker / Kubernetes</li>
                        <li> AWS / Azure</li>
                        <li> Git / GitHub</li>
                        <li> CI/CD</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-2">その他</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
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
            <h3 className="heading-2 mb-8 text-slate-800">経歴・実績</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="heading-3 mb-4 text-slate-800">職歴</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <div className="font-semibold text-slate-800">2020年 - 現在</div>
                    <div className="text-blue-600 font-medium">須藤技術士事務所 代表</div>
                    <p className="text-slate-600 mt-1">
                      情報工学部門の技術士として独立。システム設計・開発・コンサルティングサービスを提供。
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-4">
                    <div className="font-semibold text-slate-800">2015年 - 2020年</div>
                    <div className="text-slate-700 font-medium">大手IT企業 シニアエンジニア</div>
                    <p className="text-slate-600 mt-1">
                      大規模システムの設計・開発に従事。プロジェクトマネージャーとしても活躍。
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-4">
                    <div className="font-semibold text-slate-800">2010年 - 2015年</div>
                    <div className="text-slate-700 font-medium">システム開発会社 エンジニア</div>
                    <p className="text-slate-600 mt-1">
                      様々な業界向けシステム開発に携わり、幅広い技術と経験を習得。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="heading-3 mb-4 text-slate-800">資格・認定</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-slate-700">技術士（情報工学部門）</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-slate-700">PMP（プロジェクトマネジメント・プロフェッショナル）</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-slate-700">AWS認定ソリューションアーキテクト</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-slate-700">Microsoft認定Azure開発者</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="heading-3 mb-4 text-slate-800">主な実績</h4>
                <div className="relative">
                  {/* スライダーコンテナ */}
                  <div className="overflow-hidden rounded-xl">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {achievements.map((achievement, index) => (
                        <div key={`achievement-${achievement.title}`} className="w-full flex-shrink-0">
                          <div className="card-medical mx-2">
                            <h5 className="font-semibold text-slate-800 mb-2">{achievement.title}</h5>
                            <p className="text-sm text-slate-700">{achievement.description}</p>
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
                    {achievements.map((achievement, index) => (
                      <button
                        key={`dot-${achievement.title}`}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-blue-600 scale-110' 
                            : 'bg-blue-300 hover:bg-blue-400'
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
                      className="btn-medical inline-flex items-center space-x-3 px-6 py-3 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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

      {/* 技術ブログセクション */}
      <div className="mt-20">
        <div className="text-center mb-16">
          <h3 className="heading-2 mb-6 heading-gradient">技術ブログ</h3>
          <p className="body-large text-slate-600 max-w-4xl mx-auto leading-relaxed">
            IT技術に関する最新の知見と実践的なノウハウをブログで発信しています。
            <br className="hidden md:block" />
            開発実績や技術的な課題解決の経験を共有し、エンジニアコミュニティに貢献しています。
          </p>
        </div>

        <div className="relative">
          {/* ブログ記事スライダー */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentBlogSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(blogArticles.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {blogArticles.slice(slideIndex * 3, (slideIndex + 1) * 3).map((article) => (
                      <motion.article
                        key={article.id}
                        className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-slate-200/60"
                        whileHover={{ y: -8, scale: 1.02 }}
                        onClick={() => window.open(article.link, '_blank')}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                              {article.category}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="bg-white/90 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center text-sm text-slate-500 mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{article.date}</span>
                            <User className="w-4 h-4 ml-4 mr-2" />
                            <span>{article.author}</span>
                          </div>
                          
                          <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
                            {article.title}
                          </h4>
                          
                          <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-indigo-600 text-sm font-medium group-hover:text-indigo-700 transition-colors duration-200">
                              続きを読む
                            </span>
                            <ExternalLink className="w-4 h-4 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200" />
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ブログスライダーナビゲーション */}
          <button
            onClick={prevBlogSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="前のブログ記事"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextBlogSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="次のブログ記事"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* ブログスライダードットインジケーター */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(blogArticles.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToBlogSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBlogSlide 
                    ? 'bg-indigo-600 scale-110' 
                    : 'bg-indigo-300 hover:bg-indigo-400'
                }`}
                aria-label={`ブログ記事 ${index + 1} に移動`}
              />
            ))}
          </div>

          {/* 開発実績へのリンク */}
          <div className="text-center mt-12">
            <a 
              href="https://frontend-2rxetsy1j-kensudogits-projects.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              <span>開発実績・ポートフォリオを見る</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 