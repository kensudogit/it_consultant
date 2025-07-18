package jp.kensudo.service;

import jp.kensudo.entity.Contact;
import jp.kensudo.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private JavaMailSender mailSender;

    /**
     * お問い合わせを保存
     */
    public Contact saveContact(Contact contact) {
        // 確認メールを送信
        sendConfirmationEmail(contact);
        
        // 管理者通知メールを送信
        sendAdminNotificationEmail(contact);
        
        return contactRepository.save(contact);
    }

    /**
     * お問い合わせを取得
     */
    @Transactional(readOnly = true)
    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }

    /**
     * 全お問い合わせを取得（ページネーション）
     */
    @Transactional(readOnly = true)
    public Page<Contact> getAllContacts(Pageable pageable) {
        return contactRepository.findAll(pageable);
    }

    /**
     * ステータス別にお問い合わせを取得
     */
    @Transactional(readOnly = true)
    public Page<Contact> getContactsByStatus(Contact.ContactStatus status, Pageable pageable) {
        return contactRepository.findByStatusOrderByCreatedAtDesc(status, pageable);
    }

    /**
     * お問い合わせステータスを更新
     */
    public Contact updateContactStatus(Long id, Contact.ContactStatus status) {
        Optional<Contact> contactOpt = contactRepository.findById(id);
        if (contactOpt.isPresent()) {
            Contact contact = contactOpt.get();
            contact.setStatus(status);
            return contactRepository.save(contact);
        }
        throw new RuntimeException("お問い合わせが見つかりません: " + id);
    }

    /**
     * 日付範囲でお問い合わせを取得
     */
    @Transactional(readOnly = true)
    public List<Contact> getContactsByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        return contactRepository.findByCreatedAtBetween(startDate, endDate);
    }

    /**
     * メールアドレスでお問い合わせを検索
     */
    @Transactional(readOnly = true)
    public List<Contact> getContactsByEmail(String email) {
        return contactRepository.findByEmailOrderByCreatedAtDesc(email);
    }

    /**
     * 件名でお問い合わせを検索
     */
    @Transactional(readOnly = true)
    public Page<Contact> searchContactsBySubject(String keyword, Pageable pageable) {
        return contactRepository.findBySubjectContaining(keyword, pageable);
    }

    /**
     * 新規お問い合わせ件数を取得
     */
    @Transactional(readOnly = true)
    public long getNewContactCount() {
        return contactRepository.countByStatus(Contact.ContactStatus.NEW);
    }

    /**
     * 今日のお問い合わせ件数を取得
     */
    @Transactional(readOnly = true)
    public long getTodayContactCount() {
        return contactRepository.countTodayContacts();
    }

    /**
     * 確認メールを送信
     */
    private void sendConfirmationEmail(Contact contact) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(contact.getEmail());
            message.setSubject("【須藤技術士事務所】お問い合わせを受け付けました");
            message.setText(createConfirmationEmailText(contact));
            mailSender.send(message);
        } catch (Exception e) {
            // ログ出力（メール送信失敗はお問い合わせ保存を妨げない）
            System.err.println("確認メール送信に失敗しました: " + e.getMessage());
        }
    }

    /**
     * 管理者通知メールを送信
     */
    private void sendAdminNotificationEmail(Contact contact) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("admin@kensudo.jp"); // 管理者メールアドレス
            message.setSubject("【須藤技術士事務所】新しいお問い合わせがあります");
            message.setText(createAdminNotificationEmailText(contact));
            mailSender.send(message);
        } catch (Exception e) {
            // ログ出力（メール送信失敗はお問い合わせ保存を妨げない）
            System.err.println("管理者通知メール送信に失敗しました: " + e.getMessage());
        }
    }

    /**
     * 確認メール本文を作成
     */
    private String createConfirmationEmailText(Contact contact) {
        return String.format("""
            須藤技術士事務所 様
            
            この度は、お問い合わせいただきありがとうございます。
            以下の内容でお問い合わせを受け付けました。
            
            【お問い合わせ内容】
            お名前: %s
            メールアドレス: %s
            件名: %s
            お問い合わせ内容:
            %s
            
            ご入力いただいた内容を確認の上、担当者より回答させていただきます。
            しばらくお待ちください。
            
            ※このメールは自動送信されています。
            
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            須藤技術士事務所
            〒000-0000 東京都○○区○○ 0-0-0
            TEL: 03-0000-0000
            Email: info@kensudo.jp
            https://kensudo.jp
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            """, 
            contact.getName(),
            contact.getEmail(),
            contact.getSubject(),
            contact.getMessage()
        );
    }

    /**
     * 管理者通知メール本文を作成
     */
    private String createAdminNotificationEmailText(Contact contact) {
        return String.format("""
            新しいお問い合わせがあります。
            
            【お問い合わせ詳細】
            ID: %d
            お名前: %s
            メールアドレス: %s
            会社名: %s
            電話番号: %s
            件名: %s
            お問い合わせ内容:
            %s
            
            受信日時: %s
            
            管理画面から詳細を確認してください。
            """, 
            contact.getId(),
            contact.getName(),
            contact.getEmail(),
            contact.getCompany() != null ? contact.getCompany() : "未入力",
            contact.getPhone() != null ? contact.getPhone() : "未入力",
            contact.getSubject(),
            contact.getMessage(),
            contact.getCreatedAt()
        );
    }
} 