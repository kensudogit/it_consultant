'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Briefcase,
  Star,
  TrendingUp,
  Shield
} from 'lucide-react';
import { 
  EngineerIcon, 
  BusinessUserIcon, 
  DetailedClockIcon, 
  ProjectIcon, 
  SatisfactionStarIcon,
  RocketIcon,
  SupportIcon
} from './RealisticIcons';
import { RealisticButton } from './RealisticButtons';
import toast from 'react-hot-toast';

export default function About() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast.success('お問い合わせフォームに移動しました');
    }
  };

  const companyInfo = [
            { label: '会社名', value: '須藤技術士事務所', icon: <Building className="w-5 h-5" />, valueClassName: 'text-red-500' },
    { label: '代表者', value: '須藤 技術士（情報工学部門）', icon: <BusinessUserIcon className="w-5 h-5" /> },
    { label: '所在地', value: '〒150-0002\n東京都渋谷区渋谷2-1-1', icon: <MapPin className="w-5 h-5" /> },
    { label: '電話番号', value: '03-1234-5678', icon: <Phone className="w-5 h-5" /> },
            { label: 'メールアドレス', value: 'kensudo@kensudo.jp', icon: <Mail className="w-5 h-5" /> },
    { label: '資格', value: '技術士（情報工学部門）', icon: <EngineerIcon className="w-5 h-5" /> }
  ];

  const businessAreas = [
    'システム設計・開発',
    'ITコンサルティング',
    '技術指導・研修',
    'システム保守・運用'
  ];

  const strengths = [
    {
      icon: <EngineerIcon className="w-7 h-7" />,
      title: '技術士資格',
      description: '情報工学部門の技術士として、高度な技術力と豊富な経験を有しています。技術士法に基づく技術士として、社会的責任を自覚し、技術を通じて社会の発展に貢献します。',
      color: 'blue'
    },
    {
      icon: <RocketIcon className="w-7 h-7" />,
      title: '豊富な実績',
      description: '大手企業から中小企業まで、様々な規模のプロジェクトに携わってきました。各業界の特性を理解し、お客様のニーズに最適化されたソリューションを提供します。',
      color: 'green'
    },
    {
      icon: <SupportIcon className="w-7 h-7" />,
      title: '継続的なサポート',
      description: 'システム導入後も継続的なサポートを提供し、お客様のビジネスの成長をサポートします。技術の進歩に合わせて、常に最新のソリューションをご提案いたします。',
      color: 'purple'
    }
  ];

  const projects = [
    {
      title: '製造業向け生産管理システム',
      description: '生産計画から在庫管理まで、製造プロセス全体を統合管理するシステムを構築。生産性向上とコスト削減を実現。',
      industry: '製造業',
      duration: '6ヶ月',
      rating: 5,
      tags: ['Java', 'Spring Boot', 'PostgreSQL']
    },
    {
      title: '金融機関向けリスク管理システム',
      description: '複雑な金融商品のリスク評価と管理を行うシステムを開発。リアルタイム監視と自動アラート機能を実装。',
      industry: '金融業',
      duration: '12ヶ月',
      rating: 5,
      tags: ['Python', 'React', 'AWS']
    },
    {
      title: '小売業向けECサイト構築',
      description: 'モダンな技術スタックを使用したECサイトを構築。レスポンシブデザインと高速なパフォーマンスを実現。',
      industry: '小売業',
      duration: '4ヶ月',
      rating: 4,
      tags: ['Next.js', 'TypeScript', 'Vercel']
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-max">
        {/* セクションヘッダー */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-6"
          >
            <Building className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            会社概要
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            須藤技術士事務所は、情報工学部門の技術士として、お客様のビジネス課題を技術的視点から解決する専門事務所です。
            豊富な経験と最新技術を組み合わせ、高品質なソリューションを提供いたします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* 強み・特徴 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">私たちの強み</h3>
            <div className="space-y-8">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    className="bg-gradient-to-br from-teal-200 via-cyan-200 to-sky-200 border-2 border-teal-400 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br from-${strength.color}-500 to-${strength.color}-600 rounded-xl flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {strength.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {strength.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {strength.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 会社詳細情報 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-yellow-200 via-amber-200 to-orange-200 rounded-2xl shadow-soft p-8 border-2 border-yellow-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Briefcase className="w-6 h-6 text-yellow-700 mr-3" />
                会社情報
              </h3>
              
              <div className="space-y-6">
                {/* 基本情報セクション */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-200/50 shadow-soft">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Building className="w-5 h-5 text-blue-600 mr-2" />
                    基本情報
                  </h4>
                  <div className="space-y-4">
                    {companyInfo.slice(0, 3).map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="text-blue-600 mt-1">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <dt className="font-semibold text-gray-900 mb-1">{info.label}</dt>
                          <dd className={`whitespace-pre-line ${info.valueClassName || 'text-gray-600'}`}>{info.value}</dd>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 連絡先情報セクション */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border-2 border-green-200/50 shadow-soft">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Phone className="w-5 h-5 text-green-600 mr-2" />
                    連絡先情報
                  </h4>
                  <div className="space-y-4">
                    {companyInfo.slice(3, 6).map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="text-green-600 mt-1">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <dt className="font-semibold text-gray-900 mb-1">{info.label}</dt>
                          <dd className={`whitespace-pre-line ${info.valueClassName || 'text-gray-600'}`}>{info.value}</dd>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 事業内容 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 pt-6 border-t border-gray-200"
              >
                <h4 className="font-semibold text-gray-900 mb-4">事業内容</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {businessAreas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="mt-8 pt-6 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <RealisticButton
                  onClick={handleContactClick}
                  variant="primary"
                  size="lg"
                  fullWidth
                >
                  お問い合わせ
                </RealisticButton>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 実績・事例 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">実績・事例</h3>
            <p className="text-xl text-gray-600">
              これまでに携わったプロジェクトの一部をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="bg-gradient-to-br from-lime-200 via-green-200 to-emerald-200 border-2 border-lime-400 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 p-6 h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {project.industry}
                      </span>
                      <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                        {project.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">({project.rating}.0)</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 