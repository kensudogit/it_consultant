'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Eye, Share, Github } from 'lucide-react';

interface TrendData {
  id: string;
  category: string;
  title: string;
  count: string;
}

export default function TrendTable() {
  const [trends] = useState<TrendData[]>([
    {
      id: '1',
      category: '技術',
      title: 'システム開発',
      count: '1.2K'
    },
    {
      id: '2',
      category: 'ビジネス',
      title: '技術コンサルティング',
      count: '856'
    },
    {
      id: '3',
      category: 'マネジメント',
      title: 'プロジェクト管理',
      count: '543'
    },
    {
      id: '4',
      category: '資格',
      title: 'AWS認定',
      count: '432'
    },
    {
      id: '5',
      category: 'フロントエンド',
      title: 'React開発',
      count: '321'
    }
  ]);

  const getCategoryColor = (category: string) => {
    const colors = {
      '技術': 'bg-blue-100 text-blue-800',
      'ビジネス': 'bg-green-100 text-green-800',
      'マネジメント': 'bg-purple-100 text-purple-800',
      '資格': 'bg-yellow-100 text-yellow-800',
      'フロントエンド': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden w-4/5">
      
      {/* ヘッダー */}
      <div className="bg-red-600 px-5 py-3">
        <div className="flex items-center space-x-2">
          {/* <TrendingUp className="w-5 h-5 text-white" /> */}
          <h2 className="text-lg font-bold text-white">トレンド</h2>
        </div>
      </div>

      {/* テーブル */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ border: '2px solid white' }}>
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider" style={{ border: '2px solid white', width: '200px' }}>
                カテゴリ
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider" style={{ border: '2px solid white', width: '300px' }}>
                タイトル
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider" style={{ border: '2px solid white', width: '150px' }}>
                件数
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider" style={{ border: '2px solid white', width: '150px' }}>
                アクション
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {trends.map((trend, index) => (
              <motion.tr
                key={trend.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:bg-gray-800 transition-colors cursor-pointer h-12"
                onClick={() => {
                  console.log(`トレンドクリック: ${trend.title}`);
                }}
              >
                <td className="px-6 py-4 whitespace-nowrap" style={{ border: '2px solid white', width: '200px' }}>
                  <span className={`inline-flex px-4 py-2 text-sm font-semibold rounded ${getCategoryColor(trend.category)}`}>
                    {trend.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap" style={{ border: '2px solid white', width: '300px' }}>
                  <div className="text-base font-medium text-white">
                    {trend.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap" style={{ border: '2px solid white', width: '150px' }}>
                  <div className="text-base text-white font-semibold">
                    {trend.count}件
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap" style={{ border: '2px solid white', width: '150px' }}>
                  <div className="flex items-center space-x-2">
                    <button
                      className="p-2 text-white hover:text-blue-400 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(`詳細表示: ${trend.title}`);
                      }}
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 text-white hover:text-green-400 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(`シェア: ${trend.title}`);
                      }}
                    >
                      <Share className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

        {/* フッター */}
        <div className="bg-gray-800 px-4 py-2" >
        <div className="flex items-center justify-between">
          <span className="text-xs text-white">
            全{trends.length}件のトレンド
          </span>
          <button className="text-xs text-white hover:text-blue-400 font-medium transition-colors bg-gray-700 px-3 py-1 rounded">
            すべて表示
          </button>
        </div>
      </div>
      {/* GitHubボタン */}
      <div className="flex justify-center mt-6">
            <br></br>

        <a 
          href="https://github.com/kensudogit/it_consultant" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://github.com/kensudogit/it_consultant', '_blank', 'noopener,noreferrer');
          }}
        >
          <Github className="w-5 h-5" />
          <span>GitHubリポジトリを確認</span>
        </a>
      </div>

    </div>
  );
} 