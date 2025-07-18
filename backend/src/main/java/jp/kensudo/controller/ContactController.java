package jp.kensudo.controller;

import jp.kensudo.entity.Contact;
import jp.kensudo.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = {"http://localhost:3000", "https://kensudo.jp"})
public class ContactController {

    @Autowired
    private ContactService contactService;

    /**
     * お問い合わせを送信
     */
    @PostMapping
    public ResponseEntity<?> submitContact(@Valid @RequestBody Contact contact, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            bindingResult.getFieldErrors().forEach(error -> 
                errors.put(error.getField(), error.getDefaultMessage())
            );
            return ResponseEntity.badRequest().body(errors);
        }

        try {
            Contact savedContact = contactService.saveContact(contact);
            Map<String, Object> response = new HashMap<>();
            response.put("message", "お問い合わせを受け付けました。確認メールをお送りします。");
            response.put("contactId", savedContact.getId());
            
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "お問い合わせの送信に失敗しました。しばらく時間をおいて再度お試しください。");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }

    /**
     * お問い合わせ一覧を取得（管理者用）
     */
    @GetMapping
    public ResponseEntity<Page<Contact>> getContacts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String status) {
        
        Pageable pageable = PageRequest.of(page, size);
        
        if (status != null) {
            try {
                Contact.ContactStatus contactStatus = Contact.ContactStatus.valueOf(status.toUpperCase());
                Page<Contact> contacts = contactService.getContactsByStatus(contactStatus, pageable);
                return ResponseEntity.ok(contacts);
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().build();
            }
        }
        
        Page<Contact> contacts = contactService.getAllContacts(pageable);
        return ResponseEntity.ok(contacts);
    }

    /**
     * お問い合わせ詳細を取得（管理者用）
     */
    @GetMapping("/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable Long id) {
        return contactService.getContactById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * お問い合わせステータスを更新（管理者用）
     */
    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateContactStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> statusUpdate) {
        
        try {
            Contact.ContactStatus status = Contact.ContactStatus.valueOf(statusUpdate.get("status").toUpperCase());
            Contact updatedContact = contactService.updateContactStatus(id, status);
            return ResponseEntity.ok(updatedContact);
        } catch (IllegalArgumentException e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "無効なステータスです");
            return ResponseEntity.badRequest().body(error);
        } catch (RuntimeException e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * お問い合わせを検索（管理者用）
     */
    @GetMapping("/search")
    public ResponseEntity<Page<Contact>> searchContacts(
            @RequestParam String keyword,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        
        Pageable pageable = PageRequest.of(page, size);
        Page<Contact> contacts = contactService.searchContactsBySubject(keyword, pageable);
        return ResponseEntity.ok(contacts);
    }

    /**
     * 統計情報を取得（管理者用）
     */
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getContactStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("newCount", contactService.getNewContactCount());
        stats.put("todayCount", contactService.getTodayContactCount());
        
        return ResponseEntity.ok(stats);
    }

    /**
     * ヘルスチェック
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> healthCheck() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "OK");
        response.put("message", "Contact service is running");
        return ResponseEntity.ok(response);
    }
} 