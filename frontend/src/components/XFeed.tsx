'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import XCompose from './XCompose';
import XPost from './XPost';

interface Post {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified: boolean;
  };
  content: string;
  timestamp: string;
  location?: string;
  likes: number;
  replies: number;
  retweets: number;
  shares: number;
  isLiked?: boolean;
  isRetweeted?: boolean;
  images?: string[];
  links?: { url: string; title: string; description: string; image?: string }[];
}

export default function XFeed() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: {
        name: '須藤技術士事務所',
        handle: 'sudo_engineer',
        avatar: '',
        verified: true
      },
      content: '新しいシステム開発プロジェクトが始まりました！React + TypeScript + Node.jsを使用したモダンなWebアプリケーションの構築です。チーム開発の醍醐味を感じています 🚀 #システム開発 #React #TypeScript',
      timestamp: '2時間',
      location: '東京都渋谷区',
      likes: 42,
      replies: 8,
      retweets: 12,
      shares: 3,
      isLiked: false,
      isRetweeted: false
    },
    {
      id: '2',
      author: {
        name: '須藤技術士事務所',
        handle: 'sudo_engineer',
        avatar: '',
        verified: true
      },
      content: '技術コンサルティングの現場で、お客様の課題を解決するために新しいアプローチを提案しました。データドリブンな意思決定支援システムの導入により、業務効率が30%向上することが期待されています 📊 #技術コンサルティング #DX #業務効率化',
      timestamp: '5時間',
      location: '東京都渋谷区',
      likes: 28,
      replies: 5,
      retweets: 7,
      shares: 2,
      isLiked: true,
      isRetweeted: false
    },
    {
      id: '3',
      author: {
        name: '須藤技術士事務所',
        handle: 'sudo_engineer',
        avatar: '👨‍💼',
        verified: true
      },
      content: 'AWS認定ソリューションアーキテクトの資格を取得しました！クラウド技術の最新トレンドを学び、お客様により良いソリューションを提供できるようになります ☁️ #AWS #クラウド #資格取得',
      timestamp: '1日前',
      location: '東京都渋谷区',
      likes: 156,
      replies: 23,
      retweets: 45,
      shares: 12,
      isLiked: false,
      isRetweeted: true
    },
    {
      id: '4',
      author: {
        name: '須藤技術士事務所',
        handle: 'sudo_engineer',
        avatar: '👨‍💼',
        verified: true
      },
      content: 'プロジェクトマネジメントの重要性について、チームメンバーとディスカッションしました。アジャイル開発手法と従来のウォーターフォール手法の使い分けが、プロジェクト成功の鍵になります 📋 #プロジェクトマネジメント #アジャイル #チーム開発',
      timestamp: '2日前',
      location: '東京都渋谷区',
      likes: 67,
      replies: 15,
      retweets: 18,
      shares: 5,
      isLiked: false,
      isRetweeted: false
    },
    {
      id: '5',
      author: {
        name: '須藤技術士事務所',
        handle: 'sudo_engineer',
        avatar: '👨‍💼',
        verified: true
      },
      content: '技術士として、エンジニアのキャリア支援を行っています。若手エンジニアの成長をサポートし、日本のIT業界の発展に貢献したいと考えています 👨‍💼 #技術士 #キャリア支援 #エンジニア育成',
      timestamp: '3日前',
      location: '東京都渋谷区',
      likes: 89,
      replies: 12,
      retweets: 25,
      shares: 8,
      isLiked: true,
      isRetweeted: false
    }
  ]);

  const handleNewPost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        name: '須藤技術士事務所',
        handle: 'sudo_engineer',
        avatar: '👨‍💼',
        verified: true
      },
      content,
      timestamp: '今',
      location: '東京都渋谷区',
      likes: 0,
      replies: 0,
      retweets: 0,
      shares: 0,
      isLiked: false,
      isRetweeted: false
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="bg-white max-h-[70vh] overflow-y-auto">
      {/* 投稿作成エリア */}
      <XCompose onPost={handleNewPost} />

      {/* 投稿フィード */}
      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <XPost key={post.id} {...post} />
        ))}
      </div>

             {/* フィード終了メッセージ */}
       <div className="p-8 text-center text-gray-300">
         <p className="text-sm text-white">これで最新の投稿はすべて表示されました</p>
         <p className="text-xs mt-1 text-gray-300">新しい投稿を確認するには更新してください</p>
       </div>
    </div>
  );
} 