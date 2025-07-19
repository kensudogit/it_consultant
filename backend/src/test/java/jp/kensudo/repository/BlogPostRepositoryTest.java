package jp.kensudo.repository;

import jp.kensudo.entity.BlogPost;
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
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
@ActiveProfiles("test")
class BlogPostRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private BlogPostRepository blogPostRepository;

    @Test
    void testSaveBlogPost() {
        BlogPost blogPost = new BlogPost("テストタイトル", "テストコンテンツ");
        BlogPost savedPost = blogPostRepository.save(blogPost);
        
        assertNotNull(savedPost.getId());
        assertEquals("テストタイトル", savedPost.getTitle());
        assertEquals("テストコンテンツ", savedPost.getContent());
    }

    @Test
    void testFindById() {
        BlogPost blogPost = new BlogPost("テストタイトル", "テストコンテンツ");
        BlogPost savedPost = entityManager.persistAndFlush(blogPost);
        
        BlogPost foundPost = blogPostRepository.findById(savedPost.getId()).orElse(null);
        
        assertNotNull(foundPost);
        assertEquals("テストタイトル", foundPost.getTitle());
    }

    @Test
    void testFindByStatusOrderByPublishedAtDesc() {
        BlogPost post1 = new BlogPost("テストタイトル1", "テストコンテンツ1");
        post1.setStatus(BlogPost.PostStatus.PUBLISHED);
        post1.setPublishedAt(LocalDateTime.now().minusDays(1));
        entityManager.persistAndFlush(post1);
        
        BlogPost post2 = new BlogPost("テストタイトル2", "テストコンテンツ2");
        post2.setStatus(BlogPost.PostStatus.PUBLISHED);
        post2.setPublishedAt(LocalDateTime.now());
        entityManager.persistAndFlush(post2);
        
        Pageable pageable = PageRequest.of(0, 10);
        Page<BlogPost> posts = blogPostRepository.findByStatusOrderByPublishedAtDesc(BlogPost.PostStatus.PUBLISHED, pageable);
        
        assertEquals(2, posts.getTotalElements());
        assertTrue(posts.getContent().get(0).getPublishedAt().isAfter(posts.getContent().get(1).getPublishedAt()) ||
                   posts.getContent().get(0).getPublishedAt().isEqual(posts.getContent().get(1).getPublishedAt()));
    }

    @Test
    void testFindBySlugAndStatus() {
        BlogPost blogPost = new BlogPost("テストタイトル", "テストコンテンツ");
        blogPost.setSlug("test-slug");
        blogPost.setStatus(BlogPost.PostStatus.PUBLISHED);
        entityManager.persistAndFlush(blogPost);
        
        Optional<BlogPost> foundPost = blogPostRepository.findBySlugAndStatus("test-slug", BlogPost.PostStatus.PUBLISHED);
        
        assertTrue(foundPost.isPresent());
        assertEquals("テストタイトル", foundPost.get().getTitle());
    }

    @Test
    void testFindByTagsContainingAndStatus() {
        BlogPost blogPost = new BlogPost("テストタイトル", "テストコンテンツ");
        Set<String> tags = new HashSet<>();
        tags.add("Java");
        tags.add("Spring");
        blogPost.setTags(tags);
        blogPost.setStatus(BlogPost.PostStatus.PUBLISHED);
        entityManager.persistAndFlush(blogPost);
        
        Pageable pageable = PageRequest.of(0, 10);
        Page<BlogPost> posts = blogPostRepository.findByTagsContainingAndStatus("Java", BlogPost.PostStatus.PUBLISHED, pageable);
        
        assertEquals(1, posts.getTotalElements());
        assertEquals("テストタイトル", posts.getContent().get(0).getTitle());
    }

    @Test
    void testFindByTitleContainingAndStatus() {
        BlogPost blogPost = new BlogPost("テストタイトル", "テストコンテンツ");
        blogPost.setStatus(BlogPost.PostStatus.PUBLISHED);
        entityManager.persistAndFlush(blogPost);
        
        Pageable pageable = PageRequest.of(0, 10);
        Page<BlogPost> posts = blogPostRepository.findByTitleContainingAndStatus("テスト", BlogPost.PostStatus.PUBLISHED, pageable);
        
        assertEquals(1, posts.getTotalElements());
        assertEquals("テストタイトル", posts.getContent().get(0).getTitle());
    }

    @Test
    void testFindByContentContainingAndStatus() {
        BlogPost blogPost = new BlogPost("テストタイトル", "テストコンテンツ");
        blogPost.setStatus(BlogPost.PostStatus.PUBLISHED);
        entityManager.persistAndFlush(blogPost);
        
        Pageable pageable = PageRequest.of(0, 10);
        Page<BlogPost> posts = blogPostRepository.findByContentContainingAndStatus("コンテンツ", BlogPost.PostStatus.PUBLISHED, pageable);
        
        assertEquals(1, posts.getTotalElements());
        assertEquals("テストタイトル", posts.getContent().get(0).getTitle());
    }

    @Test
    void testFindPopularPosts() {
        BlogPost post1 = new BlogPost("テストタイトル1", "テストコンテンツ1");
        post1.setStatus(BlogPost.PostStatus.PUBLISHED);
        post1.setViewCount(100);
        entityManager.persistAndFlush(post1);
        
        BlogPost post2 = new BlogPost("テストタイトル2", "テストコンテンツ2");
        post2.setStatus(BlogPost.PostStatus.PUBLISHED);
        post2.setViewCount(200);
        entityManager.persistAndFlush(post2);
        
        Pageable pageable = PageRequest.of(0, 10);
        Page<BlogPost> posts = blogPostRepository.findPopularPosts(BlogPost.PostStatus.PUBLISHED, pageable);
        
        assertEquals(2, posts.getTotalElements());
        assertEquals(200, posts.getContent().get(0).getViewCount());
        assertEquals(100, posts.getContent().get(1).getViewCount());
    }

    @Test
    void testFindLatestPosts() {
        BlogPost post1 = new BlogPost("テストタイトル1", "テストコンテンツ1");
        post1.setStatus(BlogPost.PostStatus.PUBLISHED);
        post1.setPublishedAt(LocalDateTime.now().minusDays(1));
        entityManager.persistAndFlush(post1);
        
        BlogPost post2 = new BlogPost("テストタイトル2", "テストコンテンツ2");
        post2.setStatus(BlogPost.PostStatus.PUBLISHED);
        post2.setPublishedAt(LocalDateTime.now());
        entityManager.persistAndFlush(post2);
        
        Pageable pageable = PageRequest.of(0, 10);
        List<BlogPost> posts = blogPostRepository.findLatestPosts(BlogPost.PostStatus.PUBLISHED, pageable);
        
        assertEquals(2, posts.size());
        assertTrue(posts.get(0).getPublishedAt().isAfter(posts.get(1).getPublishedAt()) ||
                   posts.get(0).getPublishedAt().isEqual(posts.get(1).getPublishedAt()));
    }

    @Test
    void testFindAllTags() {
        BlogPost post1 = new BlogPost("テストタイトル1", "テストコンテンツ1");
        Set<String> tags1 = new HashSet<>();
        tags1.add("Java");
        tags1.add("Spring");
        post1.setTags(tags1);
        post1.setStatus(BlogPost.PostStatus.PUBLISHED);
        entityManager.persistAndFlush(post1);
        
        BlogPost post2 = new BlogPost("テストタイトル2", "テストコンテンツ2");
        Set<String> tags2 = new HashSet<>();
        tags2.add("Java");
        tags2.add("テスト");
        post2.setTags(tags2);
        post2.setStatus(BlogPost.PostStatus.PUBLISHED);
        entityManager.persistAndFlush(post2);
        
        List<String> tags = blogPostRepository.findAllTags(BlogPost.PostStatus.PUBLISHED);
        
        assertEquals(3, tags.size());
        assertTrue(tags.contains("Java"));
        assertTrue(tags.contains("Spring"));
        assertTrue(tags.contains("テスト"));
    }

    @Test
    void testCountByStatus() {
        BlogPost post1 = new BlogPost("テストタイトル1", "テストコンテンツ1");
        post1.setStatus(BlogPost.PostStatus.PUBLISHED);
        entityManager.persistAndFlush(post1);
        
        BlogPost post2 = new BlogPost("テストタイトル2", "テストコンテンツ2");
        post2.setStatus(BlogPost.PostStatus.PUBLISHED);
        entityManager.persistAndFlush(post2);
        
        long count = blogPostRepository.countByStatus(BlogPost.PostStatus.PUBLISHED);
        
        assertEquals(2, count);
    }

    @Test
    void testDeleteBlogPost() {
        BlogPost blogPost = new BlogPost("テストタイトル", "テストコンテンツ");
        BlogPost savedPost = entityManager.persistAndFlush(blogPost);
        
        blogPostRepository.deleteById(savedPost.getId());
        
        assertFalse(blogPostRepository.findById(savedPost.getId()).isPresent());
    }
} 