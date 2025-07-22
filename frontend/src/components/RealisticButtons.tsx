import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

// 写実的なプライマリボタン（金属的な質感）
export const RealisticPrimaryButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  size = 'md',
  disabled = false,
  icon,
  fullWidth = false
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden rounded-xl font-semibold text-white
        bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950
        shadow-[0_4px_15px_rgba(30,58,138,0.4),0_2px_4px_rgba(0,0,0,0.1)]
        border border-blue-700/30
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_6px_20px_rgba(30,58,138,0.5),0_4px_8px_rgba(0,0,0,0.15)] cursor-pointer focus:cursor-pointer focus-visible:cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled ? { 
        scale: 1.02, 
        y: -2,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={!disabled ? { 
        scale: 0.98, 
        y: 0,
        transition: { duration: 0.1 }
      } : {}}
    >
      {/* 金属的な光沢効果 */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-60"></div>
      
      {/* ボタンコンテンツ */}
      <div className="relative flex items-center justify-center space-x-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </div>
      
      {/* 下部の影効果 */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-black/20 to-transparent rounded-b-xl"></div>
    </motion.button>
  );
};

// 写実的なセカンダリボタン（ガラス質感）
export const RealisticSecondaryButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  size = 'md',
  disabled = false,
  icon,
  fullWidth = false
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden rounded-xl font-semibold text-white
        bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900
        shadow-[0_4px_15px_rgba(30,58,138,0.4),0_2px_4px_rgba(0,0,0,0.1)]
        border border-blue-600/30
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_6px_20px_rgba(30,58,138,0.5),0_4px_8px_rgba(0,0,0,0.15)] cursor-pointer focus:cursor-pointer focus-visible:cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled ? { 
        scale: 1.02, 
        y: -1,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={!disabled ? { 
        scale: 0.98, 
        y: 0,
        transition: { duration: 0.1 }
      } : {}}
    >
      {/* ガラス質感の光沢 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
      
      {/* ボタンコンテンツ */}
      <div className="relative flex items-center justify-center space-x-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </div>
    </motion.button>
  );
};

// 写実的なサクセスボタン（エメラルド質感）
export const RealisticSuccessButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  size = 'md',
  disabled = false,
  icon,
  fullWidth = false
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden rounded-xl font-semibold text-white
        bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950
        shadow-[0_4px_15px_rgba(30,58,138,0.4),0_2px_4px_rgba(0,0,0,0.1)]
        border border-blue-700/30
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_6px_20px_rgba(30,58,138,0.5),0_4px_8px_rgba(0,0,0,0.15)] cursor-pointer focus:cursor-pointer focus-visible:cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled ? { 
        scale: 1.02, 
        y: -2,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={!disabled ? { 
        scale: 0.98, 
        y: 0,
        transition: { duration: 0.1 }
      } : {}}
    >
      {/* エメラルドの光沢効果 */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-transparent opacity-70"></div>
      
      {/* ボタンコンテンツ */}
      <div className="relative flex items-center justify-center space-x-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </div>
      
      {/* 下部の影効果 */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-black/20 to-transparent rounded-b-xl"></div>
    </motion.button>
  );
};

// 写実的なワーニングボタン（ゴールド質感）
export const RealisticWarningButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  size = 'md',
  disabled = false,
  icon,
  fullWidth = false
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden rounded-xl font-semibold text-white
        bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950
        shadow-[0_4px_15px_rgba(30,58,138,0.4),0_2px_4px_rgba(0,0,0,0.1)]
        border border-blue-700/30
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_6px_20px_rgba(30,58,138,0.5),0_4px_8px_rgba(0,0,0,0.15)] cursor-pointer focus:cursor-pointer focus-visible:cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled ? { 
        scale: 1.02, 
        y: -2,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={!disabled ? { 
        scale: 0.98, 
        y: 0,
        transition: { duration: 0.1 }
      } : {}}
    >
      {/* ゴールドの光沢効果 */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-80"></div>
      
      {/* ボタンコンテンツ */}
      <div className="relative flex items-center justify-center space-x-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </div>
      
      {/* 下部の影効果 */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-black/20 to-transparent rounded-b-xl"></div>
    </motion.button>
  );
};

// 写実的なデンジャーボタン（ルビー質感）
export const RealisticDangerButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  size = 'md',
  disabled = false,
  icon,
  fullWidth = false
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden rounded-xl font-semibold text-white
        bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950
        shadow-[0_4px_15px_rgba(30,58,138,0.4),0_2px_4px_rgba(0,0,0,0.1)]
        border border-blue-700/30
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_6px_20px_rgba(30,58,138,0.5),0_4px_8px_rgba(0,0,0,0.15)] cursor-pointer focus:cursor-pointer focus-visible:cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled ? { 
        scale: 1.02, 
        y: -2,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={!disabled ? { 
        scale: 0.98, 
        y: 0,
        transition: { duration: 0.1 }
      } : {}}
    >
      {/* ルビーの光沢効果 */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-transparent opacity-70"></div>
      
      {/* ボタンコンテンツ */}
      <div className="relative flex items-center justify-center space-x-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </div>
      
      {/* 下部の影効果 */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-black/20 to-transparent rounded-b-xl"></div>
    </motion.button>
  );
};

// 写実的なインフォボタン（サファイア質感）
export const RealisticInfoButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  size = 'md',
  disabled = false,
  icon,
  fullWidth = false
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden rounded-xl font-semibold text-white
        bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950
        shadow-[0_4px_15px_rgba(30,58,138,0.4),0_2px_4px_rgba(0,0,0,0.1)]
        border border-blue-700/30
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_6px_20px_rgba(30,58,138,0.5),0_4px_8px_rgba(0,0,0,0.15)] cursor-pointer focus:cursor-pointer focus-visible:cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled ? { 
        scale: 1.02, 
        y: -2,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={!disabled ? { 
        scale: 0.98, 
        y: 0,
        transition: { duration: 0.1 }
      } : {}}
    >
      {/* サファイアの光沢効果 */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-transparent opacity-70"></div>
      
      {/* ボタンコンテンツ */}
      <div className="relative flex items-center justify-center space-x-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </div>
      
      {/* 下部の影効果 */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-black/20 to-transparent rounded-b-xl"></div>
    </motion.button>
  );
};

// 汎用写実的ボタン（variantに応じて適切なボタンを返す）
export const RealisticButton: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  ...props 
}) => {
  switch (variant) {
    case 'secondary':
      return <RealisticSecondaryButton {...props} />;
    case 'success':
      return <RealisticSuccessButton {...props} />;
    case 'warning':
      return <RealisticWarningButton {...props} />;
    case 'danger':
      return <RealisticDangerButton {...props} />;
    case 'info':
      return <RealisticInfoButton {...props} />;
    default:
      return <RealisticPrimaryButton {...props} />;
  }
}; 