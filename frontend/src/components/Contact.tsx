'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('お問い合わせ送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">お問い合わせ</h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            システム設計・開発・コンサルティングについて、お気軽にお問い合わせください。
            <br className="hidden md:block" />
            お客様のビジネス課題を技術的視点から解決いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* お問い合わせフォーム */}
          <div className="order-2 lg:order-1">
            <div className="card">
              <h3 className="heading-3 mb-6">お問い合わせフォーム</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-800 font-medium">
                      お問い合わせを受け付けました。確認メールをお送りします。
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-800 font-medium">
                      お問い合わせの送信に失敗しました。しばらく時間をおいて再度お試しください。
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="form-label">
                    お名前 <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-required="true"
                  />
                  {errors.name && (
                    <p id="name-error" className="form-error" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    メールアドレス <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-required="true"
                  />
                  {errors.email && (
                    <p id="email-error" className="form-error" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="form-label">
                    会社名
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register('company')}
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="form-label">
                    電話番号
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="form-input"
                    placeholder="03-0000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">
                    件名 <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register('subject')}
                    className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    aria-required="true"
                  />
                  {errors.subject && (
                    <p id="subject-error" className="form-error" role="alert">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    お問い合わせ内容 <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message')}
                    className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-required="true"
                  />
                  {errors.message && (
                    <p id="message-error" className="form-error" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-describedby="submit-status"
                >
                  {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
                </button>
                <div id="submit-status" className="sr-only" aria-live="polite">
                  {isSubmitting && 'お問い合わせを送信中です'}
                </div>
              </form>
            </div>
          </div>

          {/* 連絡先情報 */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="heading-3 mb-6">連絡先情報</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">所在地</h4>
                      <p className="text-gray-600">
                        〒000-0000<br />
                        東京都○○区○○ 0-0-0
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">電話番号</h4>
                      <p className="text-gray-600">03-0000-0000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">メールアドレス</h4>
                      <p className="text-gray-600">info@kensudo.jp</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-6">対応時間</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">平日</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">土曜日</span>
                    <span className="font-medium">9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">日曜・祝日</span>
                    <span className="font-medium">休業</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  ※お急ぎの場合は、お電話にてお問い合わせください。
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-6">よくある質問</h3>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="font-medium text-gray-900">対応可能な技術は何ですか？</span>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-3 text-gray-600">
                      Java、Spring Boot、React、Next.js、PostgreSQL、Docker、AWS、Azureなど、幅広い技術スタックに対応しています。詳細は技術スタックのページをご確認ください。
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="font-medium text-gray-900">プロジェクトの期間はどのくらいですか？</span>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-3 text-gray-600">
                      プロジェクトの規模や要件により異なりますが、小規模なシステムで1-3ヶ月、中規模で3-6ヶ月、大規模で6ヶ月以上が一般的です。詳細はお問い合わせ時にご相談ください。
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="font-medium text-gray-900">保守・サポートは提供していますか？</span>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-3 text-gray-600">
                      はい、システム導入後も継続的な保守・サポートを提供しています。定期メンテナンス、障害対応、機能追加など、お客様のニーズに応じて柔軟に対応いたします。
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 