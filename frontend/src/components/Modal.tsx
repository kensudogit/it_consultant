import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';
import { RealisticButton } from './RealisticButtons';

interface ModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly title: string;
  readonly children: React.ReactNode;
  readonly type?: 'default' | 'success' | 'error' | 'warning' | 'info';
  readonly size?: 'sm' | 'md' | 'lg' | 'xl';
  readonly showCloseButton?: boolean;
  readonly closeOnOverlayClick?: boolean;
  readonly closeOnEscape?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  type = 'default',
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true
}: ModalProps) {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  const typeIcons = {
    default: null,
    success: <CheckCircle className="w-6 h-6 text-green-500" />,
    error: <AlertCircle className="w-6 h-6 text-red-500" />,
    warning: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    info: <Info className="w-6 h-6 text-blue-500" />
  };

  const typeColors = {
    default: 'border-gray-200',
    success: 'border-green-200',
    error: 'border-red-200',
    warning: 'border-yellow-200',
    info: 'border-blue-200'
  };

  // ESCキーでモーダルを閉じる
  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // スクロールを無効化
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, closeOnEscape]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* オーバーレイ */}
          <motion.div
            className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnOverlayClick ? onClose : undefined}
          />

          {/* モーダルコンテンツ */}
          <motion.div
            className={`relative w-full ${sizeClasses[size]} bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-2xl border ${typeColors[type]} overflow-hidden`}
            initial={{ 
              opacity: 0, 
              scale: 0.9, 
              y: 20 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.9, 
              y: 20 
            }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 300
            }}
          >
            {/* ヘッダー */}
            <div className="flex items-center justify-between p-6 border-b border-blue-200 bg-gradient-to-r from-blue-600 to-blue-700">
              <div className="flex items-center space-x-3">
                {typeIcons[type]}
                <h2 className="text-xl font-semibold text-white">
                  {title}
                </h2>
              </div>
              
              {showCloseButton && (
                <motion.button
                  onClick={onClose}
                  className="p-2 text-blue-200 hover:text-white hover:bg-blue-500/30 rounded-lg transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              )}
            </div>

            {/* コンテンツ */}
            <div className="p-6 bg-blue-50/50">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// モーダル用のフッターコンポーネント
interface ModalFooterProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function ModalFooter({ children, className = '' }: ModalFooterProps) {
  return (
    <div className={`flex flex-row items-center justify-end space-x-3 pt-6 border-t border-blue-200 ${className}`}>
      {children}
    </div>
  );
}

// モーダル用のボタンコンポーネント
interface ModalButtonProps {
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly variant?: 'primary' | 'secondary' | 'danger';
  readonly disabled?: boolean;
  readonly loading?: boolean;
}

export function ModalButton({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false,
  loading = false
}: ModalButtonProps) {
  const realisticVariants = {
    primary: 'primary' as const,
    secondary: 'secondary' as const,
    danger: 'danger' as const
  };

  return (
    <RealisticButton
      onClick={onClick}
      variant={realisticVariants[variant]}
      disabled={disabled || loading}
      size="md"
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>読み込み中...</span>
        </div>
      ) : (
        children
      )}
    </RealisticButton>
  );
} 