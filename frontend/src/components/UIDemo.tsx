import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Smartphone, Globe, Shield } from 'lucide-react';
import Header from './Header';
import LoadingSpinner from './LoadingSpinner';
import InteractiveCard from './InteractiveCard';
import Modal, { ModalFooter, ModalButton } from './Modal';
import toast from 'react-hot-toast';

export default function UIDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    {
      title: 'システム開発',
      description: '最新技術を活用した高品質なシステム開発サービスを提供します。',
      icon: <Code className="w-5 h-5" />,
      tags: ['React', 'Node.js', 'TypeScript'],
      rating: 5
    },
    {
      title: 'UI/UXデザイン',
      description: 'ユーザー体験を重視した直感的で美しいインターフェースを設計します。',
      icon: <Palette className="w-5 h-5" />,
      tags: ['Figma', 'Adobe XD', 'プロトタイピング'],
      rating: 5
    },
    {
      title: 'パフォーマンス最適化',
      description: 'アプリケーションの速度と効率性を最大限に引き出します。',
      icon: <Zap className="w-5 h-5" />,
      tags: ['最適化', 'キャッシュ', 'CDN'],
      rating: 4
    },
    {
      title: 'モバイル開発',
      description: 'iOS・Android両対応のネイティブアプリ開発を提供します。',
      icon: <Smartphone className="w-5 h-5" />,
      tags: ['React Native', 'Flutter', 'Swift'],
      rating: 4
    },
    {
      title: 'Webアプリケーション',
      description: 'スケーラブルで安全なWebアプリケーションを構築します。',
      icon: <Globe className="w-5 h-5" />,
      tags: ['SPA', 'PWA', 'SEO'],
      rating: 5
    },
    {
      title: 'セキュリティ対策',
      description: '最新のセキュリティ脅威に対応した堅牢なシステムを構築します。',
      icon: <Shield className="w-5 h-5" />,
      tags: ['暗号化', '認証', '監査'],
      rating: 5
    }
  ];

  const handleCardClick = (title: string) => {
    toast.success(`${title}の詳細を表示します`);
    setIsModalOpen(true);
  };

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('処理が完了しました！');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* メインコンテンツ */}
      <main className="pt-32 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {/* ヒーローセクション */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
              UI/UXツールデモ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              最新のUI/UXツールを活用して作成された洗練されたコンポーネントのデモンストレーションです。
              インタラクティブな要素とアニメーションで、優れたユーザー体験を提供します。
            </p>
          </motion.section>

          {/* ローディングデモ */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ローディングスピナー</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <LoadingSpinner size="sm" text="小サイズ" />
                </div>
                <div className="text-center">
                  <LoadingSpinner size="md" text="中サイズ" />
                </div>
                <div className="text-center">
                  <LoadingSpinner size="lg" text="大サイズ" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <motion.button
                  onClick={handleLoadingDemo}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ローディングデモを実行
                </motion.button>
              </div>
            </div>
          </motion.section>

          {/* インタラクティブカード */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">インタラクティブカード</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <InteractiveCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    tags={service.tags}
                    rating={service.rating}
                    onClick={() => handleCardClick(service.title)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* モーダルデモ */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">モーダルデモ</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  モーダルを開く
                </motion.button>
                <motion.button
                  onClick={() => toast.success('成功メッセージです！')}
                  className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  成功トースト
                </motion.button>
                <motion.button
                  onClick={() => toast.error('エラーメッセージです！')}
                  className="px-6 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  エラートースト
                </motion.button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* モーダル */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="サービス詳細"
        type="info"
        size="lg"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            このモーダルは、UI/UXツールを活用して作成された洗練されたコンポーネントです。
            アニメーション、アクセシビリティ、レスポンシブデザインを考慮して設計されています。
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">主な機能</h3>
            <ul className="text-blue-800 space-y-1">
              <li>• スムーズなアニメーション</li>
              <li>• キーボードナビゲーション対応</li>
              <li>• スクロール制御</li>
              <li>• レスポンシブデザイン</li>
              <li>• アクセシビリティ対応</li>
            </ul>
          </div>
        </div>
        <ModalFooter>
          <ModalButton variant="secondary" onClick={() => setIsModalOpen(false)}>
            閉じる
          </ModalButton>
          <ModalButton onClick={() => {
            setIsModalOpen(false);
            toast.success('アクションが実行されました！');
          }}>
            アクション実行
          </ModalButton>
        </ModalFooter>
      </Modal>
    </div>
  );
} 