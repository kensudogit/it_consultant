'use client';

import { motion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  ExternalLink,
  Code,
  Settings,
  Users,
  FileText
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast.success('ページトップに移動しました');
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast.success('セクションに移動しました');
    }
  };

  const services = [
    { name: 'システム設計・開発', href: '#services', icon: <Code className="w-4 h-4" /> },
    { name: 'ITコンサルティング', href: '#services', icon: <Settings className="w-4 h-4" /> },
    { name: '技術指導・研修', href: '#services', icon: <Users className="w-4 h-4" /> },
    { name: 'システム保守・運用', href: '#services', icon: <Settings className="w-4 h-4" /> }
  ];

  const companyLinks = [
    { name: '会社概要', href: '#about', icon: <Building className="w-4 h-4" /> },
    { name: '技術士紹介', href: '#engineer', icon: <Users className="w-4 h-4" /> },
    { name: 'お問い合わせ', href: '#contact', icon: <Mail className="w-4 h-4" /> },
    { name: 'プライバシーポリシー', href: '/privacy', icon: <FileText className="w-4 h-4" /> }
  ];

  const techStack = [
    'Java', 'Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'Docker',
    'AWS', 'Azure', 'Kubernetes', 'TypeScript', 'Python', 'Node.js'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <span className="text-white text-2xl font-bold"></span>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold">須藤技術士事務所</h3>
                <p className="text-blue-300 font-medium">情報工学部門</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-base">
              情報工学部門の技術士として、お客様のビジネス課題を技術的視点から解決いたします。
              システム設計・開発・コンサルティングを通じて、お客様の成功をサポートします。
            </p>
            
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 text-base"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>〒150-0002 東京都渋谷区渋谷2-1-1</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 text-base"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span></span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 text-base"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Email: info@sudo-engineering.com</span>
              </motion.div>
            </div>
          </motion.div>

          {/* サービス */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              サービス
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => handleSectionClick(service.href)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group text-base"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                    <span>{service.name}</span>
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 会社情報 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Building className="w-5 h-5 text-blue-400 mr-2" />
              会社情報
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => handleSectionClick(link.href)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group text-base"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                    {link.href.startsWith('/') && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 技術スタック */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-6 text-center flex items-center justify-center">
            <Code className="w-5 h-5 text-blue-400 mr-2" />
            対応技術
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-base text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* コピーライト */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-base">
            © {currentYear} 須藤技術士事務所. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            技術士（情報工学部門）須藤技術士事務所
          </p>
        </motion.div>
      </div>

      {/* トップに戻るボタン */}
      <motion.button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
} 