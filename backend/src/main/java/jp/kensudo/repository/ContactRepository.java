package jp.kensudo.repository;

import jp.kensudo.entity.Contact;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

    // ステータス別にお問い合わせを取得
    Page<Contact> findByStatusOrderByCreatedAtDesc(Contact.ContactStatus status, Pageable pageable);

    // 日付範囲でお問い合わせを取得
    @Query("SELECT c FROM Contact c WHERE c.createdAt BETWEEN :startDate AND :endDate ORDER BY c.createdAt DESC")
    List<Contact> findByCreatedAtBetween(@Param("startDate") LocalDateTime startDate, 
                                        @Param("endDate") LocalDateTime endDate);

    // メールアドレスでお問い合わせを検索
    List<Contact> findByEmailOrderByCreatedAtDesc(String email);

    // 件名でお問い合わせを検索（部分一致）
    @Query("SELECT c FROM Contact c WHERE c.subject LIKE %:keyword% ORDER BY c.createdAt DESC")
    Page<Contact> findBySubjectContaining(@Param("keyword") String keyword, Pageable pageable);

    // 会社名でお問い合わせを検索
    List<Contact> findByCompanyOrderByCreatedAtDesc(String company);

    // 新規お問い合わせの件数を取得
    long countByStatus(Contact.ContactStatus status);

    // 今日のお問い合わせ件数を取得
    @Query("SELECT COUNT(c) FROM Contact c WHERE CAST(c.createdAt AS date) = CURRENT_DATE")
    long countTodayContacts();
} 