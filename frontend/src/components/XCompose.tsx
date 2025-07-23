'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Image, 
  Smile, 
  Calendar, 
  MapPin, 
  Send,
  X
} from 'lucide-react';

interface XComposeProps {
  onPost?: (content: string) => void;
}

export default function XCompose({ onPost }: XComposeProps) {
  const [content, setContent] = useState('これは非常に長いテキストです。\n\n'.repeat(50) + '横方向にも長いテキストを追加してスクロールバーを表示するためのサンプルテキストです。これは非常に長い文章で、横スクロールバーを確実に表示させるために必要な長さです。'.repeat(20));
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 280;

  const handleSubmit = () => {
    if (content.trim() && onPost) {
      onPost(content);
      setContent('');
      setIsExpanded(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const remainingChars = maxLength - content.length;
  const isOverLimit = remainingChars < 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-200 p-4 bg-white"
    >
      <div className="flex space-x-3">
        {/* アバター */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            👨‍💼
          </div>
        </div>

        {/* 投稿エリア */}
        <div className="flex-1 min-w-0 overflow-auto">
          <div className="relative" style={{ width: '500px' }}>
                         <textarea
               value={content}
               onChange={(e) => setContent(e.target.value)}
               onKeyPress={handleKeyPress}
               onFocus={() => setIsExpanded(true)}
               placeholder="いまどうしてる？"
               className="p-4 border-2 border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg text-white placeholder-gray-300 bg-white"
               style={{ 
                 fontFamily: 'inherit',
                 width: '500px',
                 height: '200px',
                 minWidth: '300px',
                 maxWidth: '800px',
                 minHeight: '100px',
                 maxHeight: '500px',
                 overflow: 'scroll',
                 resize: 'both',
                 whiteSpace: 'pre-wrap',
                 wordWrap: 'break-word',
                 display: 'block'
               }}
               rows={5}
             />
          </div>

          {/* 展開された場合の追加オプション */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              {/* アクションボタン */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors">
                    <Image className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors">
                    <Smile className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors">
                    <Calendar className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors">
                    <MapPin className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center space-x-3">
                  {/* 文字数カウンター */}
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <span className={`text-xs font-medium ${
                        isOverLimit ? 'text-red-500' : 'text-gray-500'
                      }`}>
                        {remainingChars}
                      </span>
                    </div>
                  </div>

                  {/* 投稿ボタン */}
                  <button
                    onClick={handleSubmit}
                    disabled={!content.trim() || isOverLimit}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
                      content.trim() && !isOverLimit
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    投稿
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* 常に表示されるアクションバー */}
          {!isExpanded && (
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-4">
                <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors">
                  <Image className="w-5 h-5" />
                </button>
                <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors">
                  <Calendar className="w-5 h-5" />
                </button>
                <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors">
                  <MapPin className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!content.trim()}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  content.trim()
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                投稿
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
} 