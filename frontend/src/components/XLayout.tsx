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
  MapPin,
  Mail as MailIcon
} from 'lucide-react';

interface XLayoutProps {
  children: React.ReactNode;
}

export default function XLayout({ children }: XLayoutProps) {
  const [activeTab, setActiveTab] = useState('home');

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
    { name: '須藤技術士', handle: '@sudou_engineer', avatar: '👨‍💼', verified: true },
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
      {/* 左サイドバー */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-40">
        <div className="flex flex-col h-full">
          {/* ロゴ */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm"></span>
              </div>
              <span className="font-bold text-xl text-white">須藤技術士</span>
            </div>
          </div>

          {/* ナビゲーション */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      scrollToSection(item.href);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-white hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* プロフィール */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold"></span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate">須藤技術士</p>
                <p className="text-sm text-gray-300 truncate">@sudou_engineer</p>
              </div>
              <Settings className="w-5 h-5 text-gray-300" />
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
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full border-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            {/* トレンド */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">トレンド</h2>
              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors">
                                         <div className="flex items-center justify-between">
                       <div>
                         <p className="text-sm text-gray-300">{topic.category}</p>
                         <p className="font-semibold text-white">{topic.title}</p>
                       </div>
                       <TrendingUp className="w-4 h-4 text-gray-300" />
                     </div>
                     <p className="text-sm text-gray-300 mt-1">{topic.count}件</p>
                  </div>
                ))}
              </div>
            </div>

            {/* おすすめフォロー */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">おすすめ</h2>
              <div className="space-y-4">
                {whoToFollow.map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {user.avatar}
                      </div>
                                             <div>
                         <div className="flex items-center space-x-1">
                           <p className="font-semibold text-white">{user.name}</p>
                           {user.verified && (
                             <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                               <span className="text-white text-xs">✓</span>
                             </div>
                           )}
                         </div>
                         <p className="text-sm text-gray-300">{user.handle}</p>
                       </div>
                    </div>
                    <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                      フォロー
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 連絡先情報 */}
            <div className="bg-gray-50 rounded-2xl p-4">
              <h2 className="text-xl font-bold text-white mb-4">連絡先</h2>
              <div className="space-y-3">
                                 <div className="flex items-center space-x-3">
                   <Phone className="w-5 h-5 text-gray-300" />
                   <span className="text-white">03-1234-5678</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <MailIcon className="w-5 h-5 text-gray-300" />
                   <span className="text-white">info@sudou-engineering.com</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <MapPin className="w-5 h-5 text-gray-300" />
                   <span className="text-white">東京都渋谷区</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 