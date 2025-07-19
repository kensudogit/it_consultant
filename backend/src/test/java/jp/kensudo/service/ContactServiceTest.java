package jp.kensudo.service;

import jp.kensudo.entity.Contact;
import jp.kensudo.repository.ContactRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.SimpleMailMessage;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ContactServiceTest {

    @Mock
    private ContactRepository contactRepository;

    @Mock
    private JavaMailSender mailSender;

    @InjectMocks
    private ContactService contactService;

    private Contact testContact;

    @BeforeEach
    void setUp() {
        testContact = new Contact("テスト太郎", "test@example.com", "テスト件名", "テストメッセージ");
        testContact.setId(1L);
        testContact.setCreatedAt(LocalDateTime.now());
    }

    @Test
    void testSaveContact() {
        when(contactRepository.save(any(Contact.class))).thenReturn(testContact);
        doNothing().when(mailSender).send(any(SimpleMailMessage.class));

        Contact savedContact = contactService.saveContact(testContact);

        assertNotNull(savedContact);
        assertEquals("テスト太郎", savedContact.getName());
        assertEquals("test@example.com", savedContact.getEmail());
        verify(contactRepository).save(testContact);
        verify(mailSender, times(2)).send(any(SimpleMailMessage.class)); // 確認メールと管理者通知メール
    }

    @Test
    void testGetContactById() {
        when(contactRepository.findById(1L)).thenReturn(Optional.of(testContact));

        Optional<Contact> foundContact = contactService.getContactById(1L);

        assertTrue(foundContact.isPresent());
        assertEquals("テスト太郎", foundContact.get().getName());
        verify(contactRepository).findById(1L);
    }

    @Test
    void testGetContactByIdNotFound() {
        when(contactRepository.findById(999L)).thenReturn(Optional.empty());

        Optional<Contact> foundContact = contactService.getContactById(999L);

        assertFalse(foundContact.isPresent());
        verify(contactRepository).findById(999L);
    }

    @Test
    void testGetAllContacts() {
        Pageable pageable = PageRequest.of(0, 10);
        Page<Contact> contactPage = new PageImpl<>(Arrays.asList(testContact));
        when(contactRepository.findAll(pageable)).thenReturn(contactPage);

        Page<Contact> result = contactService.getAllContacts(pageable);

        assertEquals(1, result.getTotalElements());
        assertEquals("テスト太郎", result.getContent().get(0).getName());
        verify(contactRepository).findAll(pageable);
    }

    @Test
    void testGetContactsByStatus() {
        Pageable pageable = PageRequest.of(0, 10);
        Page<Contact> contactPage = new PageImpl<>(Arrays.asList(testContact));
        when(contactRepository.findByStatusOrderByCreatedAtDesc(Contact.ContactStatus.NEW, pageable))
                .thenReturn(contactPage);

        Page<Contact> result = contactService.getContactsByStatus(Contact.ContactStatus.NEW, pageable);

        assertEquals(1, result.getTotalElements());
        verify(contactRepository).findByStatusOrderByCreatedAtDesc(Contact.ContactStatus.NEW, pageable);
    }

    @Test
    void testUpdateContactStatus() {
        Contact updatedContact = new Contact("テスト太郎", "test@example.com", "テスト件名", "テストメッセージ");
        updatedContact.setId(1L);
        updatedContact.setStatus(Contact.ContactStatus.IN_PROGRESS);

        when(contactRepository.findById(1L)).thenReturn(Optional.of(testContact));
        when(contactRepository.save(any(Contact.class))).thenReturn(updatedContact);

        Contact result = contactService.updateContactStatus(1L, Contact.ContactStatus.IN_PROGRESS);

        assertEquals(Contact.ContactStatus.IN_PROGRESS, result.getStatus());
        verify(contactRepository).findById(1L);
        verify(contactRepository).save(any(Contact.class));
    }

    @Test
    void testUpdateContactStatusNotFound() {
        when(contactRepository.findById(999L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> {
            contactService.updateContactStatus(999L, Contact.ContactStatus.IN_PROGRESS);
        });

        verify(contactRepository).findById(999L);
        verify(contactRepository, never()).save(any());
    }

    @Test
    void testGetContactsByDateRange() {
        LocalDateTime startDate = LocalDateTime.now().minusDays(1);
        LocalDateTime endDate = LocalDateTime.now().plusDays(1);
        List<Contact> contacts = Arrays.asList(testContact);

        when(contactRepository.findByCreatedAtBetween(startDate, endDate)).thenReturn(contacts);

        List<Contact> result = contactService.getContactsByDateRange(startDate, endDate);

        assertEquals(1, result.size());
        assertEquals("テスト太郎", result.get(0).getName());
        verify(contactRepository).findByCreatedAtBetween(startDate, endDate);
    }

    @Test
    void testGetContactsByEmail() {
        List<Contact> contacts = Arrays.asList(testContact);
        when(contactRepository.findByEmailOrderByCreatedAtDesc("test@example.com")).thenReturn(contacts);

        List<Contact> result = contactService.getContactsByEmail("test@example.com");

        assertEquals(1, result.size());
        assertEquals("test@example.com", result.get(0).getEmail());
        verify(contactRepository).findByEmailOrderByCreatedAtDesc("test@example.com");
    }

    @Test
    void testSearchContactsBySubject() {
        Pageable pageable = PageRequest.of(0, 10);
        Page<Contact> contactPage = new PageImpl<>(Arrays.asList(testContact));
        when(contactRepository.findBySubjectContaining("テスト", pageable)).thenReturn(contactPage);

        Page<Contact> result = contactService.searchContactsBySubject("テスト", pageable);

        assertEquals(1, result.getTotalElements());
        verify(contactRepository).findBySubjectContaining("テスト", pageable);
    }

    @Test
    void testGetNewContactCount() {
        when(contactRepository.countByStatus(Contact.ContactStatus.NEW)).thenReturn(5L);

        long count = contactService.getNewContactCount();

        assertEquals(5L, count);
        verify(contactRepository).countByStatus(Contact.ContactStatus.NEW);
    }

    @Test
    void testGetTodayContactCount() {
        when(contactRepository.countTodayContacts()).thenReturn(3L);

        long count = contactService.getTodayContactCount();

        assertEquals(3L, count);
        verify(contactRepository).countTodayContacts();
    }

    @Test
    void testSaveContactWithMailException() {
        when(contactRepository.save(any(Contact.class))).thenReturn(testContact);
        doThrow(new RuntimeException("Mail error")).when(mailSender).send(any(SimpleMailMessage.class));

        // メール送信エラーでもお問い合わせは保存される
        Contact savedContact = contactService.saveContact(testContact);

        assertNotNull(savedContact);
        assertEquals("テスト太郎", savedContact.getName());
        verify(contactRepository).save(testContact);
        verify(mailSender, times(2)).send(any(SimpleMailMessage.class)); // 2回試行される
    }
} 