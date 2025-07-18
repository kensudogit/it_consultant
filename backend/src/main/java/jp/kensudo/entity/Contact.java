package jp.kensudo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "contacts")
@EntityListeners(AuditingEntityListener.class)
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "お名前は必須です")
    @Size(max = 100, message = "お名前は100文字以内で入力してください")
    @Column(name = "name", nullable = false)
    private String name;

    @NotBlank(message = "メールアドレスは必須です")
    @Email(message = "有効なメールアドレスを入力してください")
    @Column(name = "email", nullable = false)
    private String email;

    @NotBlank(message = "件名は必須です")
    @Size(max = 200, message = "件名は200文字以内で入力してください")
    @Column(name = "subject", nullable = false)
    private String subject;

    @NotBlank(message = "お問い合わせ内容は必須です")
    @Size(max = 2000, message = "お問い合わせ内容は2000文字以内で入力してください")
    @Column(name = "message", nullable = false, columnDefinition = "TEXT")
    private String message;

    @Column(name = "phone")
    private String phone;

    @Column(name = "company")
    private String company;

    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.STRING)
    private ContactStatus status = ContactStatus.NEW;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // コンストラクタ
    public Contact() {}

    public Contact(String name, String email, String subject, String message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }

    // Getter/Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public ContactStatus getStatus() {
        return status;
    }

    public void setStatus(ContactStatus status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public enum ContactStatus {
        NEW("新規"),
        IN_PROGRESS("対応中"),
        COMPLETED("完了"),
        CLOSED("クローズ");

        private final String displayName;

        ContactStatus(String displayName) {
            this.displayName = displayName;
        }

        public String getDisplayName() {
            return displayName;
        }
    }
} 