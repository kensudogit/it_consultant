'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  User,
  Building,
  MessageSquare,
  FileText
} from 'lucide-react';
import { 
  BusinessUserIcon, 
  DetailedClockIcon, 
  ProjectIcon, 
  SatisfactionStarIcon 
} from './RealisticIcons';
import { RealisticButton } from './RealisticButtons';
import toast from 'react-hot-toast';
import LoadingSpinner from './LoadingSpinner';

const contactSchema = z.object({
  name: z.string().min(1, 'お名前は必須です').max(100, 'お名前は100文字以内で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  subject: z.string().min(1, '件名は必須です').max(200, '件名は200文字以内で入力してください'),
  message: z.string().min(1, 'お問い合わせ内容は必須です').max(2000, 'お問い合わせ内容は2000文字以内で入力してください'),
  phone: z.string().optional(),
  company: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // シミュレーション用の遅延
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 実際のAPIコールの代わりに成功をシミュレート
      setSubmitStatus('success');
      reset();
      toast.success('お問い合わせを受け付けました！');
    } catch (error) {
      console.error('お問い合わせ送信エラー:', error);
      setSubmitStatus('error');
      toast.error('送信に失敗しました。再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '所在地',
      content: '〒150-0002\n東京都渋谷区渋谷2-1-1',
      colorClass: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '電話番号',
      content: '',
      colorClass: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'メールアドレス',
              content: 'kensudo@kensudo.jp',
      colorClass: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      icon: <DetailedClockIcon className="w-6 h-6" />,
      title: '営業時間',
      content: '平日 9:00-18:00\n土日祝日休み',
      colorClass: 'bg-gradient-to-br from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container-max">
        {/* セクションヘッダー */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-6"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            お問い合わせ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            システム設計・開発・コンサルティングについて、お気軽にお問い合わせください。
            <br className="hidden md:block" />
            お客様のビジネス課題を技術的視点から解決いたします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 連絡先情報 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-green-200 via-emerald-200 to-teal-200 rounded-2xl shadow-soft p-8 border-2 border-green-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <MessageSquare className="w-6 h-6 text-green-700 mr-3" />
                連絡先情報
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group"
                  >
                    <motion.div
                      className={`w-12 h-12 ${info.colorClass} rounded-xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 営業時間詳細 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4">対応可能時間</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>平日</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>土日祝日</span>
                    <span>休み</span>
                  </div>
                  <div className="flex justify-between">
                    <span>緊急時</span>
                    <span>24時間対応</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* お問い合わせフォーム */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200 rounded-2xl shadow-soft p-8 border-2 border-blue-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <FileText className="w-6 h-6 text-blue-700 mr-3" />
                お問い合わせフォーム
              </h3>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <p className="text-green-800 font-medium">
                        お問い合わせを受け付けました。確認メールをお送りします。
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                      <p className="text-red-800 font-medium">
                        お問い合わせの送信に失敗しました。しばらく時間をおいて再度お試しください。
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* 基本情報セクション */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-200/50 shadow-soft">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <User className="w-5 h-5 text-blue-600 mr-2" />
                    基本情報
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        お名前 <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          id="name"
                          type="text"
                          {...register('name')}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                          }`}
                          placeholder="山田太郎"
                        />
                      </div>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-600"
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                        }`}
                        placeholder="example@company.com"
                      />
                    </div>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </motion.div>
                </div>
              </div>

                {/* 会社情報セクション */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border-2 border-green-200/50 shadow-soft">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Building className="w-5 h-5 text-green-600 mr-2" />
                    会社情報
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        会社名
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          id="company"
                          type="text"
                          {...register('company')}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                          placeholder="株式会社サンプル"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        電話番号
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                          placeholder=""
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* お問い合わせ内容セクション */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-200/50 shadow-soft">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <MessageSquare className="w-5 h-5 text-purple-600 mr-2" />
                    お問い合わせ内容
                  </h4>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      件名 <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register('subject')}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                        errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="システム開発について"
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.subject.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ内容 <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message')}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="お問い合わせ内容を詳しくお聞かせください..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <RealisticButton
                    onClick={handleSubmit(onSubmit)}
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    fullWidth
                    icon={isSubmitting ? <LoadingSpinner size="sm" color="white" /> : <Send className="w-5 h-5" />}
                  >
                    {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
                  </RealisticButton>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 