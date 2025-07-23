'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Search, 
  Bell, 
  Mail, 
  User, 
  Settings, 
  LogOut,
  TrendingUp,
  Users,
  Calendar,
  FileText,
  MessageCircle,
  Phone,
  MapPin
} from 'lucide-react';
import TrendTable from './TrendTable';

interface XLayoutProps {
  children: React.ReactNode;
}

export default function XLayout({ children }: XLayoutProps) {
  const [activeTab, setActiveTab] = useState('home');

  // 共通スタイルクラス
  const commonStyles = {
    gradientBg: 'bg-gradient-to-r from-blue-600 to-purple-600',
    cardBg: 'bg-gray-50 rounded-2xl p-4',
    textWhite: 'text-white',
    textGray300: 'text-gray-300',
    hoverBg: 'hover:bg-gray-100',
    transition: 'transition-colors'
  };

  const navigation = [
    { id: 'home', name: 'ホーム', icon: Home, href: '#home' },
    { id: 'services', name: 'サービス', icon: FileText, href: '#services' },
    { id: 'engineer', name: '技術士', icon: User, href: '#engineer' },
    { id: 'about', name: '会社概要', icon: Users, href: '#about' },
    { id: 'contact', name: 'お問い合わせ', icon: MessageCircle, href: '#contact' },
  ];

  const trendingTopics = [
    { title: 'システム開発', count: '1.2K', category: '技術' },
    { title: '技術コンサルティング', count: '856', category: 'ビジネス' },
    { title: 'プロジェクト管理', count: '543', category: 'マネジメント' },
    { title: 'AWS認定', count: '432', category: '資格' },
    { title: 'React開発', count: '321', category: 'フロントエンド' },
  ];

  const whoToFollow = [
    { name: '須藤技術士事務所', handle: '@sudo_engineer', avatar: '👨‍💼', verified: true },
    { name: 'システム開発部', handle: '@system_dev', avatar: '💻', verified: false },
    { name: '技術コンサル', handle: '@tech_consult', avatar: '📊', verified: true },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 中央寄せコンテナ */}
      <div className="max-w-3xl mx-auto relative">
        {/* 左サイドバー */}
        <div className="fixed left-1/2 transform -translate-x-full top-0 h-full w-64 bg-white border-r border-gray-200 z-40" style={{ left: 'calc(50% - 384px)' }}>
        <div className="flex flex-col h-full">
          {/* ロゴ */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 ${commonStyles.gradientBg} rounded-lg flex items-center justify-center`}>
                <span className={`${commonStyles.textWhite} font-bold text-sm`}></span>
              </div>
              <span className={`font-bold text-xl ${commonStyles.textWhite}`}>須藤技術士事務所</span>
            </div>
          </div>

          {/* ナビゲーション */}
          <nav className="flex-1 p-4">
            <div className="flex flex-row flex-wrap gap-2 justify-start">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    scrollToSection(item.href);
                  }}
                  onFocus={() => {
                    // フォーカス時の処理（必要に応じて追加）
                  }}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 whitespace-nowrap ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : `${commonStyles.textWhite} ${commonStyles.hoverBg}`
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* プロフィール */}
          <div className="p-4 border-t border-gray-200">
            <div 
              className={`flex items-center space-x-3 p-3 rounded-xl ${commonStyles.hoverBg} cursor-pointer ${commonStyles.transition} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
              tabIndex={0}
              onClick={() => {
                // プロフィールクリック処理
                console.log('プロフィール設定を開く');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  console.log('プロフィール設定を開く');
                }
              }}
            >
              <div className={`w-10 h-10 ${commonStyles.gradientBg} rounded-full flex items-center justify-center`}>
                <span className={`${commonStyles.textWhite} font-bold`}></span>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold ${commonStyles.textWhite} truncate`}>須藤技術士事務所</p>
                <p className={`text-sm ${commonStyles.textGray300} truncate`}>@sudo_engineer</p>
              </div>
              <Settings className={`w-5 h-5 ${commonStyles.textGray300}`} />
            </div>
          </div>
        </div>
      </div>

        {/* メインコンテンツ */}
        <div className="ml-64 flex">
          <div className="flex-1 max-w-2xl border-r border-gray-200">
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-30">
              <div className="px-6 py-4">
                <h1 className="text-xl font-bold text-white">ホーム</h1>
              </div>
            </div>
            <div className="bg-white">
              {children}
            </div>
          </div>

          {/* 右サイドバー */}
          <div className="w-80 bg-white">
            <div className="sticky top-0 p-4">
              {/* 検索バー */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="検索..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full border-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-text"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      // 検索処理
                      console.log('検索実行:', e.currentTarget.value);
                    }
                  }}
                />
              </div>

              {/* トレンドテーブル */}
              <div className="mb-6">
                <TrendTable />
              </div>

              {/* おすすめフォロー */}
              <div className={`${commonStyles.cardBg} mb-6`}>
                <h2 className={`text-xl font-bold ${commonStyles.textWhite} mb-4`}>おすすめ</h2>
                <div className="space-y-4">
                  {whoToFollow.map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${commonStyles.gradientBg} rounded-full flex items-center justify-center ${commonStyles.textWhite} font-bold`}>
                          {user.avatar}
                        </div>
                        <div>
                          <div className="flex items-center space-x-1">
                            <p className={`font-semibold ${commonStyles.textWhite}`}>{user.name}</p>

                          </div>
                          <p className={`text-sm ${commonStyles.textGray300}`}>{user.handle}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          // フォロー処理をここに追加
                          console.log(`フォロー: ${user.name}`);
                        }}
                        className={`px-4 py-2 bg-gray-900 ${commonStyles.textWhite} rounded-full text-sm font-semibold hover:bg-gray-800 ${commonStyles.transition} cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                      >
                        フォロー
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 連絡先情報 */}
              <div className={commonStyles.cardBg}>
                <h2 className={`text-xl font-bold ${commonStyles.textWhite} mb-4`}>連絡先</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className={`w-5 h-5 ${commonStyles.textGray300}`} />
                    <span className={commonStyles.textWhite}>03-1234-5678</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className={`w-5 h-5 ${commonStyles.textGray300}`} />
                    <span className={commonStyles.textWhite}>kensudo@kensudo.jp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className={`w-5 h-5 ${commonStyles.textGray300}`} />
                    <span className={commonStyles.textWhite}>東京都渋谷区</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 