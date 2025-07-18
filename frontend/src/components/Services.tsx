'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'システム設計・開発',
    description: '要件定義から設計、開発、テストまで一貫して対応。最新技術を活用した高品質なシステムを構築します。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      '要件定義・基本設計',
      '詳細設計・実装',
      '単体テスト・結合テスト',
      'システムテスト・運用テスト',
      'ドキュメント作成'
    ]
  },
  {
    id: 2,
    title: 'ITコンサルティング',
    description: '技術的視点からお客様のビジネス課題を分析し、最適なIT戦略とソリューションを提案します。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      'IT戦略策定',
      'システム選定支援',
      'プロジェクト管理',
      'リスク分析・対策',
      '技術評価・監査'
    ]
  },
  {
    id: 3,
    title: '技術指導・研修',
    description: '開発チームの技術力向上をサポート。実践的な技術指導と研修プログラムを提供します。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: [
      'プログラミング研修',
      'アーキテクチャ設計研修',
      'テスト技法研修',
      'プロジェクト管理研修',
      '技術文書作成研修'
    ]
  },
  {
    id: 4,
    title: 'システム保守・運用',
    description: 'システム導入後の保守・運用をサポート。安定したシステム稼働と継続的な改善を実現します。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: [
      '定期メンテナンス',
      '障害対応・復旧',
      'パフォーマンス監視',
      'セキュリティ対策',
      'バックアップ・復旧'
    ]
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(1);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* セクションヘッダー */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            サービス内容
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            情報工学部門の技術士として、お客様のニーズに応じた幅広いサービスを提供いたします。
            <br className="hidden md:block" />
            技術的な課題からビジネス課題まで、専門的な視点で解決策を提案します。
          </p>
        </motion.div>

        {/* サービス一覧 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* サービスカード */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer ${
                  activeService === service.id
                    ? 'ring-2 ring-blue-500 bg-blue-50'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveService(service.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveService(service.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={activeService === service.id}
                aria-label={`${service.title}の詳細を表示`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeService === service.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* サービス詳細 */}
          <div className="lg:pl-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`transition-all duration-300 ${
                  activeService === service.id ? 'block' : 'hidden'
                }`}
                role="tabpanel"
                aria-labelledby={`service-${service.id}`}
              >
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">主な業務内容</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      aria-label={`${service.title}についてお問い合わせ`}
                    >
                      お問い合わせ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 技術スタック */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">対応技術</h3>
            <p className="text-lg text-gray-600">
              最新の技術スタックに対応し、お客様の要件に最適なソリューションを提供します
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Java', 'Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'Docker',
              'AWS', 'Azure', 'Kubernetes', 'TypeScript', 'Python', 'Node.js'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors duration-200"
              >
                <span className="text-sm font-semibold text-gray-700">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 