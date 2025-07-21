import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Smartphone, Globe, Shield } from 'lucide-react';
import { 
  CodeIcon, 
  DatabaseIcon, 
  CloudIcon, 
  MobileIcon, 
  ServerIcon, 
  NetworkIcon, 
  SettingsIcon 
} from './RealisticIcons';
import { RealisticButton } from './RealisticButtons';
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
      icon: <CodeIcon className="w-6 h-6" />,
      tags: ['React', 'Node.js', 'TypeScript'],
      rating: 5
    },
    {
      title: 'UI/UXデザイン',
      description: 'ユーザー体験を重視した直感的で美しいインターフェースを設計します。',
      icon: <Palette className="w-6 h-6" />,
      tags: ['Figma', 'Adobe XD', 'プロトタイピング'],
      rating: 5
    },
    {
      title: 'パフォーマンス最適化',
      description: 'アプリケーションの速度と効率性を最大限に引き出します。',
      icon: <Zap className="w-6 h-6" />,
      tags: ['最適化', 'キャッシュ', 'CDN'],
      rating: 4
    },
    {
      title: 'モバイル開発',
      description: 'iOS・Android両対応のネイティブアプリ開発を提供します。',
      icon: <MobileIcon className="w-6 h-6" />,
      tags: ['React Native', 'Flutter', 'Swift'],
      rating: 4
    },
    {
      title: 'Webアプリケーション',
      description: 'スケーラブルで安全なWebアプリケーションを構築します。',
      icon: <Globe className="w-6 h-6" />,
      tags: ['SPA', 'PWA', 'SEO'],
      rating: 5
    },
    {
      title: 'セキュリティ対策',
      description: '最新のセキュリティ脅威に対応した堅牢なシステムを構築します。',
      icon: <Shield className="w-6 h-6" />,
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
            <div className="bg-gradient-to-br from-red-200 via-pink-200 to-rose-200 rounded-2xl shadow-soft p-8 border-2 border-red-400">
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
                <RealisticButton
                  onClick={handleLoadingDemo}
                  variant="primary"
                  size="md"
                >
                  ローディングデモを実行
                </RealisticButton>
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
              {/* システム開発セクション */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-200/50 shadow-soft">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Code className="w-5 h-5 text-blue-600 mr-2" />
                  システム開発
                </h4>
                <div className="space-y-3">
                  {services.slice(0, 2).map((service, index) => (
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
              </div>

              {/* デザイン・UXセクション */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-2 border-green-200/50 shadow-soft">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Palette className="w-5 h-5 text-green-600 mr-2" />
                  デザイン・UX
                </h4>
                <div className="space-y-3">
                  {services.slice(2, 4).map((service, index) => (
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
              </div>

              {/* インフラ・セキュリティセクション */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-2 border-purple-200/50 shadow-soft">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-purple-600 mr-2" />
                  インフラ・セキュリティ
                </h4>
                <div className="space-y-3">
                  {services.slice(4).map((service, index) => (
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
              </div>
            </div>
          </motion.section>

          {/* モーダルデモ */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-indigo-200 via-purple-200 to-violet-200 rounded-2xl shadow-soft p-8 border-2 border-indigo-400">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">モーダルデモ</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <RealisticButton
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  size="md"
                >
                  モーダルを開く
                </RealisticButton>
                <RealisticButton
                  onClick={() => toast.success('成功メッセージです！')}
                  variant="success"
                  size="md"
                >
                  成功トースト
                </RealisticButton>
                <RealisticButton
                  onClick={() => toast.error('エラーメッセージです！')}
                  variant="danger"
                  size="md"
                >
                  エラートースト
                </RealisticButton>
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