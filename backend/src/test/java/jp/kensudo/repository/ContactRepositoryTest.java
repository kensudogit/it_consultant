package jp.kensudo.repository;

import jp.kensudo.entity.Contact;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest(showSql = true)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
@ActiveProfiles("test")
class ContactRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ContactRepository contactRepository;

    @Test
    void testSaveContact() {
        Contact contact = new Contact("テスト太郎", "test@example.com", "テスト件名", "テストメッセージ");
        Contact savedContact = contactRepository.save(contact);
        
        assertNotNull(savedContact.getId());
        assertEquals("テスト太郎", savedContact.getName());
        assertEquals("test@example.com", savedContact.getEmail());
    }

    @Test
    void testFindById() {
        Contact contact = new Contact("テスト太郎", "test@example.com", "テスト件名", "テストメッセージ");
        Contact savedContact = entityManager.persistAndFlush(contact);
        
        Contact foundContact = contactRepository.findById(savedContact.getId()).orElse(null);
        
        assertNotNull(foundContact);
        assertEquals("テスト太郎", foundContact.getName());
    }

    @Test
    void testFindByStatusOrderByCreatedAtDesc() {
        // Create test contacts
        Contact contact1 = new Contact("テスト太郎1", "test1@example.com", "テスト件名1", "テストメッセージ1");
        contact1.setStatus(Contact.ContactStatus.NEW);
        entityManager.persistAndFlush(contact1);
        
        Contact contact2 = new Contact("テスト太郎2", "test2@example.com", "テスト件名2", "テストメッセージ2");
        contact2.setStatus(Contact.ContactStatus.NEW);
        entityManager.persistAndFlush(contact2);
        
        Pageable pageable = PageRequest.of(0, 10);
        Page<Contact> contacts = contactRepository.findByStatusOrderByCreatedAtDesc(Contact.ContactStatus.NEW, pageable);
        
        assertEquals(2, contacts.getTotalElements());
        assertTrue(contacts.getContent().get(0).getCreatedAt().isAfter(contacts.getContent().get(1).getCreatedAt()) ||
                   contacts.getContent().get(0).getCreatedAt().isEqual(contacts.getContent().get(1).getCreatedAt()));
    }

    @Test
    void testFindByCreatedAtBetween() {
        LocalDateTime startDate = LocalDateTime.now().minusDays(1);
        LocalDateTime endDate = LocalDateTime.now().plusDays(1);
        
        Contact contact = new Contact("テスト太郎", "test@example.com", "テスト件名", "テストメッセージ");
        entityManager.persistAndFlush(contact);
        
        List<Contact> contacts = contactRepository.findByCreatedAtBetween(startDate, endDate);
        
        assertEquals(1, contacts.size());
        assertEquals("テスト太郎", contacts.get(0).getName());
    }

    @Test
    void testFindByEmailOrderByCreatedAtDesc() {
        Contact contact1 = new Contact("テスト太郎1", "test@example.com", "テスト件名1", "テストメッセージ1");
        entityManager.persistAndFlush(contact1);
        
        Contact contact2 = new Contact("テスト太郎2", "test@example.com", "テスト件名2", "テストメッセージ2");
        entityManager.persistAndFlush(contact2);
        
        List<Contact> contacts = contactRepository.findByEmailOrderByCreatedAtDesc("test@example.com");
        
        assertEquals(2, contacts.size());
        assertTrue(contacts.get(0).getCreatedAt().isAfter(contacts.get(1).getCreatedAt()) ||
                   contacts.get(0).getCreatedAt().isEqual(contacts.get(1).getCreatedAt()));
    }

    @Test
    void testFindBySubjectContaining() {
        Contact contact = new Contact("テスト太郎", "test@example.com", "テスト件名", "テストメッセージ");
        entityManager.persistAndFlush(contact);
        
        Pageable pageable = PageRequest.of(0, 10);
        Page<Contact> contacts = contactRepository.findBySubjectContaining("テスト", pageable);
        
        assertEquals(1, contacts.getTotalElements());
        assertEquals("テスト太郎", contacts.getContent().get(0).getName());
    }

    @Test
    void testFindByCompanyOrderByCreatedAtDesc() {
        Contact contact = new Contact("テスト太郎", "test@example.com", "テスト件名", "テストメッセージ");
        contact.setCompany("テスト株式会社");
        entityManager.persistAndFlush(contact);
        
        List<Contact> contacts = contactRepository.findByCompanyOrderByCreatedAtDesc("テスト株式会社");
        
        assertEquals(1, contacts.size());
        assertEquals("テスト太郎", contacts.get(0).getName());
    }

    @Test
    void testCountByStatus() {
        Contact contact1 = new Contact("テスト太郎1", "test1@example.com", "テスト件名1", "テストメッセージ1");
        contact1.setStatus(Contact.ContactStatus.NEW);
        entityManager.persistAndFlush(contact1);
        
        Contact contact2 = new Contact("テスト太郎2", "test2@example.com", "テスト件名2", "テストメッセージ2");
        contact2.setStatus(Contact.ContactStatus.NEW);
        entityManager.persistAndFlush(contact2);
        
        long count = contactRepository.countByStatus(Contact.ContactStatus.NEW);
        
        assertEquals(2, count);
    }

    @Test
    void testCountTodayContacts() {
        Contact contact = new Contact("テスト太郎", "test@example.com", "テスト件名", "テストメッセージ");
        entityManager.persistAndFlush(contact);
        
        long count = contactRepository.countTodayContacts();
        
        assertEquals(1, count);
    }

    @Test
    void testDeleteContact() {
        Contact contact = new Contact("テスト太郎", "test@example.com", "テスト件名", "テストメッセージ");
        Contact savedContact = entityManager.persistAndFlush(contact);
        
        contactRepository.deleteById(savedContact.getId());
        
        assertFalse(contactRepository.findById(savedContact.getId()).isPresent());
    }
} 