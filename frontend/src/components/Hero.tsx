'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl">
          {/* ロゴ・タイトル */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white text-2xl font-bold"></span>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  須藤技術士事務所
                </h1>
                <p className="text-xl lg:text-2xl text-blue-600 font-medium mt-1">
                  情報工学部門
                </p>
              </div>
            </div>
          </motion.div>

          {/* サブタイトル */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl"
          >
            情報工学部門の技術士として、システム設計・開発・コンサルティングを通じて、
            お客様のビジネス課題を技術的視点から解決いたします。
          </motion.p>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
              aria-label="お問い合わせフォームへ移動"
            >
              お問い合わせ
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
              aria-label="サービス紹介へ移動"
            >
              サービス詳細
            </a>
          </motion.div>

          {/* 特徴 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">技術士資格</h3>
                <p className="text-sm text-gray-600">
                  情報工学部門の技術士として、高度な技術力と豊富な経験を提供
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">迅速対応</h3>
                <p className="text-sm text-gray-600">
                  お客様のニーズに迅速かつ柔軟に対応し、最適なソリューションを提案
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">継続サポート</h3>
                <p className="text-sm text-gray-600">
                  システム導入後も継続的なサポートとメンテナンスで安心を提供
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 