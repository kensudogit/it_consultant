import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, ArrowRight, Star } from 'lucide-react';

interface InteractiveCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  tags?: string[];
  link?: string;
  rating?: number;
  variant?: 'default' | 'elevated' | 'glass';
  onClick?: () => void;
}

export default function InteractiveCard({
  title,
  description,
  icon,
  image: _image,
  tags = [],
  link,
  rating,
  variant = 'default',
  onClick
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    default: 'card',
    elevated: 'card-hover',
    glass: 'card-glass'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <motion.div
      className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${variants[variant]}`}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* 高度な背景グラデーション */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      
      {/* 追加の光効果 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{ transform: 'translateX(-100%)' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* 画像 */}
      {_image && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={_image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      {/* コンテンツ */}
      <div className="p-6">
        {/* ヘッダー */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {icon && (
                        <motion.div
            className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-glow-animated"
            whileHover={{ rotate: 10, scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
                {icon}
              </motion.div>
            )}
            <div>
                      <h3 className="text-lg font-semibold text-gradient group-hover:text-gradient-rainbow transition-all duration-500">
          {title}
        </h3>
              {rating && (
                <div className="flex items-center space-x-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">({rating})</span>
                </div>
              )}
            </div>
          </div>
          
          {link && (
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ExternalLink className="w-5 h-5 text-blue-600" />
            </motion.div>
          )}
        </div>

        {/* 説明 */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* タグ */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* アクションボタン */}
        <motion.div
          className="flex items-center justify-between"
          initial={false}
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-gradient font-medium text-sm group-hover:text-gradient-rainbow transition-all duration-500">
            {link ? '詳細を見る' : '詳細'}
          </span>
          <motion.div
            className="w-7 h-7 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-glow"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.4 }}
          >
            <ArrowRight className="w-3 h-3" />
          </motion.div>
        </motion.div>
      </div>

      {/* ホバーエフェクト */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
} 