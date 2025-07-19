'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  BarChart3, 
  GraduationCap, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  Shield,
  Zap,
  Globe,
  Cloud
} from 'lucide-react';
import InteractiveCard from './InteractiveCard';
import toast from 'react-hot-toast';

const services = [
  {
    id: 1,
    title: 'システム設計・開発',
    description: '要件定義から設計、開発、テストまで一貫して対応。最新技術を活用した高品質なシステムを構築します。',
    icon: <Code className="w-8 h-8" />,
    features: [
      '要件定義・基本設計',
      '詳細設計・実装',
      '単体テスト・結合テスト',
      'システムテスト・運用テスト',
      'ドキュメント作成'
    ],
    tags: ['Java', 'Spring Boot', 'React', 'TypeScript'],
    rating: 5,
    color: 'blue'
  },
  {
    id: 2,
    title: 'ITコンサルティング',
    description: '技術的視点からお客様のビジネス課題を分析し、最適なIT戦略とソリューションを提案します。',
    icon: <BarChart3 className="w-8 h-8" />,
    features: [
      'IT戦略策定',
      'システム選定支援',
      'プロジェクト管理',
      'リスク分析・対策',
      '技術評価・監査'
    ],
    tags: ['戦略策定', 'プロジェクト管理', 'リスク分析'],
    rating: 5,
    color: 'green'
  },
  {
    id: 3,
    title: '技術指導・研修',
    description: '開発チームの技術力向上をサポート。実践的な技術指導と研修プログラムを提供します。',
    icon: <GraduationCap className="w-8 h-8" />,
    features: [
      'プログラミング研修',
      'アーキテクチャ設計研修',
      'テスト技法研修',
      'プロジェクト管理研修',
      '技術文書作成研修'
    ],
    tags: ['研修', '技術指導', 'スキル向上'],
    rating: 4,
    color: 'purple'
  },
  {
    id: 4,
    title: 'システム保守・運用',
    description: 'システム導入後の保守・運用をサポート。安定したシステム稼働と継続的な改善を実現します。',
    icon: <Settings className="w-8 h-8" />,
    features: [
      '定期メンテナンス',
      '障害対応・復旧',
      'パフォーマンス監視',
      'セキュリティ対策',
      'バックアップ・復旧'
    ],
    tags: ['保守', '運用', '監視', 'セキュリティ'],
    rating: 5,
    color: 'orange'
  }
];

const techStack = [
  { name: 'Java', icon: <Code className="w-6 h-6" />, category: 'Backend' },
  { name: 'Spring Boot', icon: <Zap className="w-6 h-6" />, category: 'Framework' },
  { name: 'React', icon: <Globe className="w-6 h-6" />, category: 'Frontend' },
  { name: 'Next.js', icon: <Globe className="w-6 h-6" />, category: 'Framework' },
  { name: 'PostgreSQL', icon: <Shield className="w-6 h-6" />, category: 'Database' },
  { name: 'Docker', icon: <Settings className="w-6 h-6" />, category: 'DevOps' },
  { name: 'AWS', icon: <Globe className="w-6 h-6" />, category: 'Cloud' },
  { name: 'Azure', icon: <Globe className="w-6 h-6" />, category: 'Cloud' },
  { name: 'Kubernetes', icon: <Settings className="w-6 h-6" />, category: 'DevOps' },
  { name: 'TypeScript', icon: <Code className="w-6 h-6" />, category: 'Language' },
  { name: 'Python', icon: <Code className="w-6 h-6" />, category: 'Language' },
  { name: 'Node.js', icon: <Zap className="w-6 h-6" />, category: 'Runtime' }
];

export default function Services() {
  const [activeService, setActiveService] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleServiceClick = (serviceId: number) => {
    setActiveService(serviceId);
    const service = services.find(s => s.id === serviceId);
    if (service) {
      toast.success(`${service.title}の詳細を表示しました`);
    }
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast.success('お問い合わせフォームに移動しました');
    }
  };

  const filteredTechStack = selectedCategory === 'all' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  const categories = ['all', ...Array.from(new Set(techStack.map(tech => tech.category)))];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
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
            <Settings className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            サービス内容
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            情報工学部門の技術士として、お客様のニーズに応じた幅広いサービスを提供いたします。
            <br className="hidden md:block" />
            技術的な課題からビジネス課題まで、専門的な視点で解決策を提案します。
          </p>
        </motion.div>

        {/* サービスカードグリッド */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <InteractiveCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                tags={service.tags}
                rating={service.rating}
                variant={activeService === service.id ? 'elevated' : 'default'}
                onClick={() => handleServiceClick(service.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* サービス詳細 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <AnimatePresence mode="wait">
            {services.map((service) => (
              service.id === activeService && (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-soft p-8 lg:p-12"
                >
                  <div className="flex items-center mb-8">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg`}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(service.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-600">({service.rating}.0)</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                        主な業務内容
                      </h4>
                      <ul className="space-y-4">
                        {service.features.map((feature, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                            <span className="text-gray-700 text-lg">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">対応技術</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, index) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="px-3 py-1 bg-white text-blue-600 text-sm font-medium rounded-full shadow-sm"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    className="mt-8 pt-8 border-t border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.button
                      onClick={handleContactClick}
                      className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      お問い合わせ
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 技術スタック */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">対応技術</h3>
            <p className="text-xl text-gray-600 mb-8">
              最新の技術スタックに対応し、お客様の要件に最適なソリューションを提供します
            </p>

            {/* カテゴリフィルター */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category === 'all' ? 'すべて' : category}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            layout
          >
            <AnimatePresence>
              {filteredTechStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-white rounded-xl p-4 text-center shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <div className="text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{tech.name}</span>
                  <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 