'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Users, Star, Award, Clock, Shield } from 'lucide-react';
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
      icon: <EngineerIcon className="w-7 h-7" />,
      title: '技術士資格',
      description: '情報工学部門の技術士として、高度な技術力と豊富な経験を提供',
      color: 'blue'
    },
    {
      icon: <RocketIcon className="w-7 h-7" />,
      title: '迅速対応',
      description: 'お客様のニーズに迅速かつ柔軟に対応し、最適なソリューションを提案',
      color: 'green'
    },
    {
      icon: <SupportIcon className="w-7 h-7" />,
      title: '継続サポート',
      description: 'システム導入後も継続的なサポートとメンテナンスで安心を提供',
      color: 'purple'
    }
  ];

  const stats = [
    { number: '15+', label: '年の経験', icon: <DetailedClockIcon className="w-6 h-6" /> },
    { number: '100+', label: 'プロジェクト', icon: <ProjectIcon className="w-6 h-6" /> },
    { number: '50+', label: 'お客様', icon: <BusinessUserIcon className="w-6 h-6" /> },
    { number: '99%', label: '満足度', icon: <SatisfactionStarIcon className="w-6 h-6" /> }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden noise">
      {/* 高度な背景アニメーション */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{ y, opacity }}
      >
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-2xl animate-float morph"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl animate-float morph" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full mix-blend-multiply filter blur-2xl animate-float morph" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </motion.div>

      <div className="container-max section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左側: メインコンテンツ */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* ロゴ・タイトル */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center space-x-4 mb-6">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-glow-animated morph"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-white text-4xl font-bold"></span>
                  </motion.div>
                  <div>
                    <h1 className="heading-gradient text-gradient-animated">
                      須藤技術士事務所
                    </h1>
                    <p className="text-xl lg:text-2xl text-gradient-rainbow font-semibold mt-2">
                      情報工学部門
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* サブタイトル */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8"
              >
                情報工学部門の技術士として、システム設計・開発・コンサルティングを通じて、
                お客様のビジネス課題を技術的視点から解決いたします。
              </motion.p>

              {/* CTAボタン */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-row flex-wrap gap-4 mb-12"
              >
                <RealisticButton
                  onClick={handleContactClick}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  お問い合わせ
                </RealisticButton>
                <RealisticButton
                  onClick={handleServicesClick}
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  サービス詳細
                </RealisticButton>
              </motion.div>

              {/* 洗練された統計情報 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="text-center group"
                  >
                    <motion.div 
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-soft hover:shadow-medium transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -4 }}
                    >
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <motion.div 
                          className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {stat.icon}
                        </motion.div>
                        <div className="text-2xl lg:text-3xl font-bold text-gradient">{stat.number}</div>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* 右側: 特徴カード */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="group"
                >
                  <motion.div
                    className="card-hover"
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-xl flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 