'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Repeat, 
  Share, 
  MoreHorizontal,
  Calendar,
  MapPin,
  Link
} from 'lucide-react';

interface XPostProps {
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

export default function XPost({
  id,
  author,
  content,
  timestamp,
  location,
  likes,
  replies,
  retweets,
  shares,
  isLiked = false,
  isRetweeted = false,
  images = [],
  links = []
}: XPostProps) {
  const [liked, setLiked] = useState(isLiked);
  const [retweeted, setRetweeted] = useState(isRetweeted);
  const [likeCount, setLikeCount] = useState(likes);
  const [retweetCount, setRetweetCount] = useState(retweets);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleRetweet = () => {
    setRetweeted(!retweeted);
    setRetweetCount(retweeted ? retweetCount - 1 : retweetCount + 1);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors cursor-pointer"
    >
      <div className="flex space-x-3">
        {/* アバター */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {author.avatar}
          </div>
        </div>

        {/* コンテンツ */}
        <div className="flex-1 min-w-0">
                     {/* ヘッダー */}
           <div className="flex items-center space-x-2 mb-1">
             <span className="font-semibold text-white">{author.name}</span>
             {author.verified && (
               <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                 <span className="text-white text-xs">✓</span>
               </div>
             )}
             <span className="text-gray-300">@{author.handle}</span>
             <span className="text-gray-300">·</span>
             <span className="text-gray-300">{timestamp}</span>
             {location && (
               <>
                 <span className="text-gray-300">·</span>
                 <div className="flex items-center space-x-1 text-gray-300">
                   <MapPin className="w-3 h-3" />
                   <span className="text-sm">{location}</span>
                 </div>
               </>
             )}
             <button className="ml-auto p-1 rounded-full hover:bg-blue-100 transition-colors">
               <MoreHorizontal className="w-4 h-4 text-gray-300" />
             </button>
           </div>

                     {/* テキストコンテンツ */}
           <div className="text-white mb-3 leading-relaxed">
             {content}
           </div>

          {/* リンクカード */}
          {links.map((link, index) => (
            <div key={index} className="border border-gray-200 rounded-xl mb-3 overflow-hidden hover:bg-gray-50 transition-colors">
              {link.image && (
                <img src={link.image} alt={link.title} className="w-full h-48 object-cover" />
              )}
                             <div className="p-3">
                 <h3 className="font-semibold text-white mb-1">{link.title}</h3>
                 <p className="text-sm text-gray-300 mb-2">{link.description}</p>
                 <div className="flex items-center space-x-1 text-gray-300">
                   <Link className="w-3 h-3" />
                   <span className="text-xs">{link.url}</span>
                 </div>
               </div>
            </div>
          ))}

          {/* 画像 */}
          {images.length > 0 && (
            <div className={`grid gap-1 mb-3 ${
              images.length === 1 ? 'grid-cols-1' :
              images.length === 2 ? 'grid-cols-2' :
              images.length === 3 ? 'grid-cols-2' :
              'grid-cols-2'
            }`}>
              {images.map((image, index) => (
                <div key={index} className={`${
                  images.length === 3 && index === 2 ? 'col-span-2' : ''
                }`}>
                  <img 
                    src={image} 
                    alt="" 
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          )}

          {/* アクションボタン */}
          <div className="flex items-center justify-between max-w-md">
                         <button className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-colors group">
               <div className="p-2 rounded-full group-hover:bg-blue-100 transition-colors">
                 <MessageCircle className="w-4 h-4" />
               </div>
               <span className="text-sm text-white">{replies}</span>
             </button>

                         <button 
               onClick={handleRetweet}
               className={`flex items-center space-x-2 transition-colors group ${
                 retweeted ? 'text-green-500' : 'text-gray-300 hover:text-green-500'
               }`}
             >
               <div className={`p-2 rounded-full transition-colors ${
                 retweeted ? 'bg-green-100' : 'group-hover:bg-green-100'
               }`}>
                 <Repeat className="w-4 h-4" />
               </div>
               <span className="text-sm text-white">{retweetCount}</span>
             </button>

                         <button 
               onClick={handleLike}
               className={`flex items-center space-x-2 transition-colors group ${
                 liked ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
               }`}
             >
               <div className={`p-2 rounded-full transition-colors ${
                 liked ? 'bg-red-100' : 'group-hover:bg-red-100'
               }`}>
                 <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
               </div>
               <span className="text-sm text-white">{likeCount}</span>
             </button>

                         <button className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-colors group">
               <div className="p-2 rounded-full group-hover:bg-blue-100 transition-colors">
                 <Share className="w-4 h-4" />
               </div>
               <span className="text-sm text-white">{shares}</span>
             </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
} 