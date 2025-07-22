'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Dialog from '@radix-ui/react-dialog';
import toast from 'react-hot-toast';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'ホーム', href: '#home' },
    { 
      name: 'サービス', 
      href: '#services',
      submenu: [
        { name: 'システム開発', href: '#system-development', icon: '💻' },
        { name: '技術コンサルティング', href: '#consulting', icon: '📊' },
        { name: 'プロジェクト管理', href: '#project-management', icon: '📋' },
      ]
    },
    { name: '技術士紹介', href: '#engineer' },
    { name: '会社概要', href: '#about' },
    { name: 'お問い合わせ', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast.success('セクションに移動しました');
    } else {
      toast.error('セクションが見つかりません');
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    scrollToSection('#contact');
    toast.success('お問い合わせフォームに移動しました');
  };

  return (
    <>
      {/* 洗練されたトップバー */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white text-sm py-3 shadow-glow"
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@sudou-engineering.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>東京都</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* メインヘッダー */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-large border-b border-gray-100/50'
            : 'bg-white/90 backdrop-blur-md shadow-medium'
        }`}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* ロゴ */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <motion.div 
                className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-glow-animated morph"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white text-xl lg:text-2xl font-bold"></span>
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-gradient-animated">
                  須藤技術士事務所
                </h1>
                <p className="text-xs lg:text-sm text-gradient-rainbow font-medium">
                  情報工学部門
                </p>
              </div>
            </motion.div>

            {/* 洗練されたデスクトップナビゲーション */}
            <NavigationMenu.Root className="hidden lg:flex items-center">
              <NavigationMenu.List className="flex items-center space-x-2">
                {navigation.map((item, index) => (
                  <NavigationMenu.Item key={item.name}>
                    {item.submenu ? (
                      <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                          <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="flex items-center space-x-2 text-gray-700 hover:text-white font-medium transition-all duration-300 px-6 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 group relative overflow-hidden"
                          >
                            <span className="relative z-10">{item.name}</span>
                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180 relative z-10" />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100"
                              initial={{ scale: 0.8 }}
                              whileHover={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                          <DropdownMenu.Content
                            className="min-w-[240px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-3 mt-3"
                            sideOffset={8}
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <DropdownMenu.Item key={subItem.name} asChild>
                                <motion.button
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                                  onClick={() => scrollToSection(subItem.href)}
                                  className="flex items-center space-x-4 w-full text-left px-4 py-4 text-gray-700 hover:text-white rounded-xl transition-all duration-300 group relative overflow-hidden"
                                >
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                  <span className="text-xl relative z-10">{subItem.icon}</span>
                                  <span className="font-medium relative z-10">{subItem.name}</span>
                                </motion.button>
                              </DropdownMenu.Item>
                            ))}
                          </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                      </DropdownMenu.Root>
                    ) : (
                      <NavigationMenu.Link asChild>
                        <motion.button
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                          onClick={() => scrollToSection(item.href)}
                          className="relative text-gray-700 hover:text-white font-medium transition-all duration-300 px-6 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 group overflow-hidden"
                        >
                          <span className="relative z-10">{item.name}</span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.span 
                            className="absolute bottom-0 left-1/2 w-0 h-1 bg-white rounded-full"
                            whileHover={{ width: '80%', left: '10%' }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.button>
                      </NavigationMenu.Link>
                    )}
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Root>

            {/* 洗練されたCTAボタン */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:block"
            >
              <motion.button
                onClick={handleContactClick}
                className="relative px-8 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">お問い合わせ</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </motion.button>
            </motion.div>

            {/* モバイルメニューボタン */}
            <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="lg:hidden text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-xl hover:bg-blue-50"
                  aria-label="メニューを開く"
                >
                  <Menu className="w-6 h-6" />
                </motion.button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
                <Dialog.Content className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                      <h2 className="text-lg font-semibold text-gray-900">メニュー</h2>
                      <Dialog.Close asChild>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          <X className="w-6 h-6" />
                        </motion.button>
                      </Dialog.Close>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-6">
                      <nav className="grid grid-cols-1 gap-3">
                        {navigation.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            {item.submenu ? (
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger asChild>
                                  <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-white font-medium py-4 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 group relative overflow-hidden">
                                    <span className="relative z-10">{item.name}</span>
                                    <ChevronDown className="w-4 h-4 relative z-10" />
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100"
                                      initial={{ scale: 0.8 }}
                                      whileHover={{ scale: 1 }}
                                      transition={{ duration: 0.3 }}
                                    />
                                  </button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Portal>
                                  <DropdownMenu.Content
                                    className="min-w-[240px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-3"
                                    sideOffset={5}
                                  >
                                    {item.submenu.map((subItem, subIndex) => (
                                      <DropdownMenu.Item key={subItem.name} asChild>
                                        <motion.button
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                                          onClick={() => scrollToSection(subItem.href)}
                                          className="flex items-center space-x-4 w-full text-left px-4 py-4 text-gray-700 hover:text-white rounded-xl transition-all duration-300 group relative overflow-hidden"
                                        >
                                          <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100"
                                            initial={{ scale: 0.8 }}
                                            whileHover={{ scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                          />
                                          <span className="text-xl relative z-10">{subItem.icon}</span>
                                          <span className="font-medium relative z-10">{subItem.name}</span>
                                        </motion.button>
                                      </DropdownMenu.Item>
                                    ))}
                                  </DropdownMenu.Content>
                                </DropdownMenu.Portal>
                              </DropdownMenu.Root>
                            ) : (
                              <button
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left text-gray-700 hover:text-white font-medium py-4 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 group relative overflow-hidden"
                              >
                                <span className="relative z-10">{item.name}</span>
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100"
                                  initial={{ scale: 0.8 }}
                                  whileHover={{ scale: 1 }}
                                  transition={{ duration: 0.3 }}
                                />
                              </button>
                            )}
                          </motion.div>
                        ))}
                      </nav>
                      
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <motion.button
                          onClick={handleContactClick}
                          className="relative w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="relative z-10">お問い合わせ</span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </motion.header>
    </>
  );
} 