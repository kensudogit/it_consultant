'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Eye, Share } from 'lucide-react';

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
    <div className="bg-gray-900 rounded-xl overflow-hidden" style={{ width: '80%' }}>
      {/* ヘッダー */}
      <div className="bg-red-600 px-5 py-3">
        <div className="flex items-center space-x-2">
          {/* <TrendingUp className="w-5 h-5 text-white" /> */}
          <h2 className="text-lg font-bold text-white">トレンド</h2>
        </div>
      </div>

      {/* テーブル */}
      <div className="overflow-x-auto">
        <table className="w-full" style={{ width: '80%', borderTop: '1px solid white'}}>
          <thead className="bg-gray-800">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-white uppercase tracking-wider" style={{ border: '1px solid white' }}>
                カテゴリ
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-white uppercase tracking-wider" style={{ border: '1px solid white' }}>
                タイトル
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-white uppercase tracking-wider" style={{ border: '1px solid white' }}>
                件数
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-white uppercase tracking-wider" style={{ border: '1px solid white' }}>
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
                className="hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() => {
                  console.log(`トレンドクリック: ${trend.title}`);
                }}
                style={{ height: '50px' }}
              >
                <td className="px-3 py-2 whitespace-nowrap" style={{ border: '1px solid white' }}>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${getCategoryColor(trend.category)}`}>
                    {trend.category}
                  </span>
                </td>
                <td className="px-3 py-2 whitespace-nowrap" style={{ border: '1px solid white' }}>
                  <div className="text-sm font-medium text-white">
                    {trend.title}
                  </div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap" style={{ border: '1px solid white' }}>
                  <div className="text-sm text-white font-semibold">
                    {trend.count}件
                  </div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap" style={{ border: '1px solid white' }}>
                  <div className="flex items-center space-x-1">
                    <button
                      className="p-1 text-white hover:text-blue-400 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(`詳細表示: ${trend.title}`);
                      }}
                    >
                      <Eye className="w-3 h-3" />
                    </button>
                    <button
                      className="p-1 text-white hover:text-green-400 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(`シェア: ${trend.title}`);
                      }}
                    >
                      <Share className="w-3 h-3" />
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
    </div>
  );
} 