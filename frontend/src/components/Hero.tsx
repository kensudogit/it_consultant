'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Users, Star, Award, Clock, Shield, Code, Database, Cloud, Rocket } from 'lucide-react';
import { 
  EngineerIcon, 
  RocketIcon, 
  SupportIcon, 
  DetailedClockIcon, 
  ProjectIcon, 
  BusinessUserIcon, 
  SatisfactionStarIcon 
} from './RealisticIcons';
import { RealisticButton } from './RealisticButtons';
import toast from 'react-hot-toast';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast.success('お問い合わせフォームに移動しました');
    }
  };

  const handleServicesClick = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast.success('サービス詳細に移動しました');
    }
  };

  const features = [
    {
      icon: <Code className="w-7 h-7" />,
      title: 'システム開発',
      description: '最新技術を駆使した高品質なシステム開発で、お客様のビジネス課題を解決',
      colorClass: 'bg-gradient-to-br from-healthcare-500 to-blue-600'
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: 'データ分析',
      description: 'ビッグデータ活用とAI技術で、データドリブンな意思決定をサポート',
      colorClass: 'bg-gradient-to-br from-accent-emerald-500 to-green-600'
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      title: 'クラウド移行',
      description: '安全で効率的なクラウド移行で、ITコスト削減と業務効率化を実現',
      colorClass: 'bg-gradient-to-br from-accent-purple-500 to-purple-600'
    }
  ];

  const stats = [
    { number: '15+', label: '年の経験', icon: <DetailedClockIcon className="w-6 h-6" /> },
    { number: '100+', label: 'プロジェクト', icon: <ProjectIcon className="w-6 h-6" /> },
    { number: '50+', label: 'お客様', icon: <BusinessUserIcon className="w-6 h-6" /> },
    { number: '99%', label: '満足度', icon: <SatisfactionStarIcon className="w-6 h-6" /> }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-healthcare text-gray-900 overflow-hidden">
      {/* パーティクルエフェクト */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-healthcare-200 to-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-60"></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-gradient-to-br from-accent-amber-200 to-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-40 h-40 bg-gradient-to-br from-accent-emerald-200 to-green-300 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-60" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-accent-purple-200 to-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 左側: メインコンテンツ */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="animate-fade-in-left"
            >
              {/* ロゴ・タイトル */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-orange text-white font-bold text-2xl shadow-healthcare animate-pulse-glow">
                    IT
                  </div>
                  <span className="text-3xl font-bold gradient-text">TechConsult</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="badge-modern badge-success">技術士資格</span>
                  <span className="badge-modern badge-primary">15年経験</span>
                  <span className="badge-modern badge-secondary">100+プロジェクト</span>
                </div>
              </motion.div>

              {/* メインタイトル */}
              <motion.h1
                className="section-title mobile-title text-4xl md:text-6xl font-extrabold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                技術で未来を<br className="hidden md:block" />
                <span className="gradient-text">創造する</span>
              </motion.h1>

              {/* サブタイトル */}
              <motion.p
                className="mobile-text text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                情報工学部門の技術士として、最新技術を駆使したシステム開発から
                クラウド移行、データ分析まで、お客様のビジネス課題を解決します。
              </motion.p>

              {/* CTAボタン */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button
                  onClick={handleContactClick}
                  className="btn-gradient text-lg py-4 px-8 flex items-center justify-center gap-2 group"
                >
                  無料相談を始める
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  onClick={handleServicesClick}
                  className="btn-secondary text-lg py-4 px-8 flex items-center justify-center gap-2 group"
                >
                  サービス詳細
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>

              {/* 統計情報 */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-healthcare-100 to-healthcare-200 text-healthcare-600">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* 右側: リードフォーム */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative animate-fade-in-right"
            >
              <div className="card-modern shadow-2xl ring-1 ring-gray-100/50 animate-slide-in-bottom">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-healthcare-100 to-healthcare-200 p-3 text-healthcare-600 shadow-inner-healthcare animate-rotate-in">
                    <Rocket className="h-6 w-6"/>
                  </div>
                  <div className="text-base font-semibold text-gray-900">無料技術相談・見積もり（30分）</div>
                </div>
                
                <form className="space-y-4">
                  <div className="form-group">
                    <label className="form-label">
                      お客様の業種<span className="text-red-500 ml-1">*</span>
                    </label>
                    <select className="form-input" required>
                      <option value="">選択してください</option>
                      <option value="manufacturing">製造業</option>
                      <option value="retail">小売業</option>
                      <option value="finance">金融業</option>
                      <option value="healthcare">医療・ヘルスケア</option>
                      <option value="education">教育</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">
                      会社名・組織名<span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="例）株式会社〇〇"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="form-label">部署</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="例）IT部"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">役職</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="例）部長"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="form-label">
                        姓<span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="山田"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        名<span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="太郎"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">
                      メールアドレス<span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">
                      ご相談内容<span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      className="form-input"
                      rows={3}
                      placeholder="システム開発、クラウド移行、データ分析など、具体的なご相談内容をお聞かせください"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-gradient w-full text-lg py-4 mt-6 group"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.success('お問い合わせを受け付けました。担当者よりご連絡いたします。');
                    }}
                  >
                    無料相談を申し込む
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    送信により、プライバシーポリシーに同意したものとみなされます。
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 特徴カード */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card-modern interactive-card group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                onClick={() => toast.success(`${feature.title}について詳しく知りたい場合は、お問い合わせください。`)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${feature.colorClass} text-white shadow-inner-healthcare animate-rotate-in group-hover:shadow-lg transition-shadow duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg group-hover:text-healthcare-700 transition-colors duration-200">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-gray-600 mb-4">{feature.description}</p>
                <div className="text-healthcare-600 text-sm font-medium opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-200 flex items-center gap-2">
                  詳細を見る 
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 