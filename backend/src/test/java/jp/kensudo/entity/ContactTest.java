package jp.kensudo.entity;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.TestInstance.Lifecycle.PER_CLASS;

/**
 * Contactエンティティのテストクラス
 * 
 * このクラスでは以下の項目をテストします：
 * - コンストラクタの動作
 * - 各フィールドのgetter/setter
 * - 列挙型の動作
 * - バリデーション
 */
@TestInstance(PER_CLASS)
@DisplayName("Contactエンティティのテスト")
class ContactTest {

    private Contact contact;

    @BeforeEach
    void setUp() {
        contact = new Contact();
    }

    @Nested
    @DisplayName("コンストラクタのテスト")
    class ConstructorTests {
        
        @Test
        @DisplayName("デフォルトコンストラクタでContactが正しく作成される")
        void shouldCreateContactWithDefaultConstructor() {
            assertNotNull(contact);
            assertEquals(Contact.ContactStatus.NEW, contact.getStatus());
        }

        @Test
        @DisplayName("パラメータ付きコンストラクタでContactが正しく作成される")
        void shouldCreateContactWithParameterizedConstructor() {
            String name = "テスト太郎";
            String email = "test@example.com";
            String subject = "テスト件名";
            String message = "テストメッセージ";

            Contact testContact = new Contact(name, email, subject, message);

            assertEquals(name, testContact.getName());
            assertEquals(email, testContact.getEmail());
            assertEquals(subject, testContact.getSubject());
            assertEquals(message, testContact.getMessage());
            assertEquals(Contact.ContactStatus.NEW, testContact.getStatus());
        }
    }

    @Nested
    @DisplayName("getter/setterのテスト")
    class GetterSetterTests {
        
        @Test
        @DisplayName("IDのgetter/setterが正しく動作する")
        void shouldHandleIdGetterAndSetter() {
            Long id = 1L;
            contact.setId(id);
            assertEquals(id, contact.getId());
        }

        @Test
        @DisplayName("名前のgetter/setterが正しく動作する")
        void shouldHandleNameGetterAndSetter() {
            String name = "テスト太郎";
            contact.setName(name);
            assertEquals(name, contact.getName());
        }

        @Test
        @DisplayName("メールアドレスのgetter/setterが正しく動作する")
        void shouldHandleEmailGetterAndSetter() {
            String email = "test@example.com";
            contact.setEmail(email);
            assertEquals(email, contact.getEmail());
        }

        @Test
        @DisplayName("件名のgetter/setterが正しく動作する")
        void shouldHandleSubjectGetterAndSetter() {
            String subject = "テスト件名";
            contact.setSubject(subject);
            assertEquals(subject, contact.getSubject());
        }

        @Test
        @DisplayName("メッセージのgetter/setterが正しく動作する")
        void shouldHandleMessageGetterAndSetter() {
            String message = "テストメッセージ";
            contact.setMessage(message);
            assertEquals(message, contact.getMessage());
        }

        @Test
        @DisplayName("電話番号のgetter/setterが正しく動作する")
        void shouldHandlePhoneGetterAndSetter() {
            String phone = "090-1234-5678";
            contact.setPhone(phone);
            assertEquals(phone, contact.getPhone());
        }

        @Test
        @DisplayName("会社名のgetter/setterが正しく動作する")
        void shouldHandleCompanyGetterAndSetter() {
            String company = "テスト株式会社";
            contact.setCompany(company);
            assertEquals(company, contact.getCompany());
        }

        @Test
        @DisplayName("ステータスのgetter/setterが正しく動作する")
        void shouldHandleStatusGetterAndSetter() {
            Contact.ContactStatus status = Contact.ContactStatus.IN_PROGRESS;
            contact.setStatus(status);
            assertEquals(status, contact.getStatus());
        }

        @Test
        @DisplayName("作成日時のgetter/setterが正しく動作する")
        void shouldHandleCreatedAtGetterAndSetter() {
            LocalDateTime now = LocalDateTime.now();
            contact.setCreatedAt(now);
            assertEquals(now, contact.getCreatedAt());
        }
    }

    @Nested
    @DisplayName("ContactStatus列挙型のテスト")
    class ContactStatusEnumTests {
        
        @Test
        @DisplayName("各ステータスの表示名が正しく設定されている")
        void shouldHaveCorrectDisplayNames() {
            assertEquals("新規", Contact.ContactStatus.NEW.getDisplayName());
            assertEquals("対応中", Contact.ContactStatus.IN_PROGRESS.getDisplayName());
            assertEquals("完了", Contact.ContactStatus.COMPLETED.getDisplayName());
            assertEquals("クローズ", Contact.ContactStatus.CLOSED.getDisplayName());
        }

        @Test
        @DisplayName("values()メソッドが全てのステータスを返す")
        void shouldReturnAllStatusValues() {
            Contact.ContactStatus[] statuses = Contact.ContactStatus.values();
            assertEquals(4, statuses.length);
            assertArrayEquals(
                new Contact.ContactStatus[]{
                    Contact.ContactStatus.NEW,
                    Contact.ContactStatus.IN_PROGRESS,
                    Contact.ContactStatus.COMPLETED,
                    Contact.ContactStatus.CLOSED
                },
                statuses
            );
        }

        @Test
        @DisplayName("valueOf()メソッドが正しいステータスを返す")
        void shouldReturnCorrectStatusFromValueOf() {
            assertEquals(Contact.ContactStatus.NEW, Contact.ContactStatus.valueOf("NEW"));
            assertEquals(Contact.ContactStatus.IN_PROGRESS, Contact.ContactStatus.valueOf("IN_PROGRESS"));
            assertEquals(Contact.ContactStatus.COMPLETED, Contact.ContactStatus.valueOf("COMPLETED"));
            assertEquals(Contact.ContactStatus.CLOSED, Contact.ContactStatus.valueOf("CLOSED"));
        }
        
        @Test
        @DisplayName("存在しないステータス名でvalueOf()を呼ぶとIllegalArgumentExceptionが発生する")
        void shouldThrowExceptionForInvalidStatusName() {
            assertThrows(IllegalArgumentException.class, () -> {
                Contact.ContactStatus.valueOf("INVALID_STATUS");
            });
        }
    }
} 