package jp.kensudo.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import jp.kensudo.entity.Contact;
import jp.kensudo.service.ContactService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ContactController.class)
class ContactControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ContactService contactService;

    @Autowired
    private ObjectMapper objectMapper;

    private Contact testContact;

    @BeforeEach
    void setUp() {
        testContact = new Contact("テスト太郎", "test@example.com", "テスト件名", "テストメッセージ");
        testContact.setId(1L);
        testContact.setCreatedAt(LocalDateTime.now());
    }

    @Test
    void testSubmitContact() throws Exception {
        when(contactService.saveContact(any(Contact.class))).thenReturn(testContact);

        mockMvc.perform(post("/contacts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testContact)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.message").value("お問い合わせを受け付けました。確認メールをお送りします。"))
                .andExpect(jsonPath("$.contactId").value(1));
    }

    @Test
    void testSubmitContactWithValidationError() throws Exception {
        Contact invalidContact = new Contact("", "", "", ""); // 空の値でバリデーションエラー

        mockMvc.perform(post("/contacts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(invalidContact)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void testSubmitContactWithServiceException() throws Exception {
        when(contactService.saveContact(any(Contact.class))).thenThrow(new RuntimeException("Service error"));

        mockMvc.perform(post("/contacts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testContact)))
                .andExpect(status().isInternalServerError())
                .andExpect(jsonPath("$.error").value("お問い合わせの送信に失敗しました。しばらく時間をおいて再度お試しください。"));
    }

    @Test
    void testGetContacts() throws Exception {
        Page<Contact> contactPage = new PageImpl<>(Arrays.asList(testContact));
        when(contactService.getAllContacts(any(PageRequest.class))).thenReturn(contactPage);

        mockMvc.perform(get("/contacts")
                .param("page", "0")
                .param("size", "10"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content[0].name").value("テスト太郎"))
                .andExpect(jsonPath("$.totalElements").value(1));
    }

    @Test
    void testGetContactsByStatus() throws Exception {
        Page<Contact> contactPage = new PageImpl<>(Arrays.asList(testContact));
        when(contactService.getContactsByStatus(eq(Contact.ContactStatus.NEW), any(PageRequest.class)))
                .thenReturn(contactPage);

        mockMvc.perform(get("/contacts")
                .param("page", "0")
                .param("size", "10")
                .param("status", "NEW"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content[0].name").value("テスト太郎"));
    }

    @Test
    void testGetContactsByInvalidStatus() throws Exception {
        mockMvc.perform(get("/contacts")
                .param("page", "0")
                .param("size", "10")
                .param("status", "INVALID_STATUS"))
                .andExpect(status().isBadRequest());
    }

    @Test
    void testGetContactById() throws Exception {
        when(contactService.getContactById(1L)).thenReturn(Optional.of(testContact));

        mockMvc.perform(get("/contacts/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("テスト太郎"))
                .andExpect(jsonPath("$.email").value("test@example.com"));
    }

    @Test
    void testGetContactByIdNotFound() throws Exception {
        when(contactService.getContactById(999L)).thenReturn(Optional.empty());

        mockMvc.perform(get("/contacts/999"))
                .andExpect(status().isNotFound());
    }

    @Test
    void testUpdateContactStatus() throws Exception {
        Contact updatedContact = new Contact("テスト太郎", "test@example.com", "テスト件名", "テストメッセージ");
        updatedContact.setId(1L);
        updatedContact.setStatus(Contact.ContactStatus.IN_PROGRESS);

        when(contactService.updateContactStatus(eq(1L), eq(Contact.ContactStatus.IN_PROGRESS)))
                .thenReturn(updatedContact);

        Map<String, String> statusUpdate = new HashMap<>();
        statusUpdate.put("status", "IN_PROGRESS");

        mockMvc.perform(put("/contacts/1/status")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(statusUpdate)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("IN_PROGRESS"));
    }

    @Test
    void testUpdateContactStatusWithInvalidStatus() throws Exception {
        Map<String, String> statusUpdate = new HashMap<>();
        statusUpdate.put("status", "INVALID_STATUS");

        mockMvc.perform(put("/contacts/1/status")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(statusUpdate)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("無効なステータスです"));
    }

    @Test
    void testUpdateContactStatusNotFound() throws Exception {
        when(contactService.updateContactStatus(eq(999L), eq(Contact.ContactStatus.IN_PROGRESS)))
                .thenThrow(new RuntimeException("お問い合わせが見つかりません: 999"));

        Map<String, String> statusUpdate = new HashMap<>();
        statusUpdate.put("status", "IN_PROGRESS");

        mockMvc.perform(put("/contacts/999/status")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(statusUpdate)))
                .andExpect(status().isNotFound());
    }

    @Test
    void testSearchContacts() throws Exception {
        Page<Contact> contactPage = new PageImpl<>(Arrays.asList(testContact));
        when(contactService.searchContactsBySubject(eq("テスト"), any(PageRequest.class)))
                .thenReturn(contactPage);

        mockMvc.perform(get("/contacts/search")
                .param("keyword", "テスト")
                .param("page", "0")
                .param("size", "10"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content[0].name").value("テスト太郎"));
    }

    @Test
    void testGetContactStats() throws Exception {
        when(contactService.getNewContactCount()).thenReturn(5L);
        when(contactService.getTodayContactCount()).thenReturn(3L);

        mockMvc.perform(get("/contacts/stats"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.newCount").value(5))
                .andExpect(jsonPath("$.todayCount").value(3));
    }

    @Test
    void testHealthCheck() throws Exception {
        mockMvc.perform(get("/contacts/health"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("OK"))
                .andExpect(jsonPath("$.message").value("Contact service is running"));
    }
} 