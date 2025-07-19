package jp.kensudo.entity;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.TestInstance.Lifecycle.PER_CLASS;

/**
 * BlogPostエンティティのテストクラス
 * 
 * このクラスでは以下の項目をテストします：
 * - コンストラクタの動作
 * - 各フィールドのgetter/setter
 * - 列挙型の動作
 * - タグの操作
 */
@TestInstance(PER_CLASS)
@DisplayName("BlogPostエンティティのテスト")
class BlogPostTest {

    private BlogPost blogPost;

    @BeforeEach
    void setUp() {
        blogPost = new BlogPost();
    }

    @Test
    void testDefaultConstructor() {
        assertNotNull(blogPost);
        assertEquals(BlogPost.PostStatus.DRAFT, blogPost.getStatus());
        assertEquals(0, blogPost.getViewCount());
        assertNotNull(blogPost.getTags());
        assertTrue(blogPost.getTags().isEmpty());
    }

    @Test
    void testParameterizedConstructor() {
        String title = "テストタイトル";
        String content = "テストコンテンツ";

        BlogPost testPost = new BlogPost(title, content);

        assertEquals(title, testPost.getTitle());
        assertEquals(content, testPost.getContent());
        assertEquals(BlogPost.PostStatus.DRAFT, testPost.getStatus());
        assertEquals(0, testPost.getViewCount());
    }

    @Test
    void testIdGetterAndSetter() {
        Long id = 1L;
        blogPost.setId(id);
        assertEquals(id, blogPost.getId());
    }

    @Test
    void testTitleGetterAndSetter() {
        String title = "テストタイトル";
        blogPost.setTitle(title);
        assertEquals(title, blogPost.getTitle());
    }

    @Test
    void testContentGetterAndSetter() {
        String content = "テストコンテンツ";
        blogPost.setContent(content);
        assertEquals(content, blogPost.getContent());
    }

    @Test
    void testExcerptGetterAndSetter() {
        String excerpt = "テスト抜粋";
        blogPost.setExcerpt(excerpt);
        assertEquals(excerpt, blogPost.getExcerpt());
    }

    @Test
    void testFeaturedImageGetterAndSetter() {
        String image = "test-image.jpg";
        blogPost.setFeaturedImage(image);
        assertEquals(image, blogPost.getFeaturedImage());
    }

    @Test
    void testSlugGetterAndSetter() {
        String slug = "test-slug";
        blogPost.setSlug(slug);
        assertEquals(slug, blogPost.getSlug());
    }

    @Test
    void testStatusGetterAndSetter() {
        BlogPost.PostStatus status = BlogPost.PostStatus.PUBLISHED;
        blogPost.setStatus(status);
        assertEquals(status, blogPost.getStatus());
    }

    @Test
    void testViewCountGetterAndSetter() {
        Integer viewCount = 100;
        blogPost.setViewCount(viewCount);
        assertEquals(viewCount, blogPost.getViewCount());
    }

    @Test
    void testTagsGetterAndSetter() {
        Set<String> tags = new HashSet<>();
        tags.add("Java");
        tags.add("Spring");
        tags.add("テスト");

        blogPost.setTags(tags);
        assertEquals(tags, blogPost.getTags());
        assertEquals(3, blogPost.getTags().size());
    }

    @Test
    void testCreatedAtGetterAndSetter() {
        LocalDateTime now = LocalDateTime.now();
        blogPost.setCreatedAt(now);
        assertEquals(now, blogPost.getCreatedAt());
    }

    @Test
    void testUpdatedAtGetterAndSetter() {
        LocalDateTime now = LocalDateTime.now();
        blogPost.setUpdatedAt(now);
        assertEquals(now, blogPost.getUpdatedAt());
    }

    @Test
    void testPublishedAtGetterAndSetter() {
        LocalDateTime now = LocalDateTime.now();
        blogPost.setPublishedAt(now);
        assertEquals(now, blogPost.getPublishedAt());
    }

    @Test
    void testPostStatusEnum() {
        assertEquals("下書き", BlogPost.PostStatus.DRAFT.getDisplayName());
        assertEquals("公開", BlogPost.PostStatus.PUBLISHED.getDisplayName());
        assertEquals("アーカイブ", BlogPost.PostStatus.ARCHIVED.getDisplayName());
    }

    @Test
    void testPostStatusValues() {
        BlogPost.PostStatus[] statuses = BlogPost.PostStatus.values();
        assertEquals(3, statuses.length);
        assertArrayEquals(
            new BlogPost.PostStatus[]{
                BlogPost.PostStatus.DRAFT,
                BlogPost.PostStatus.PUBLISHED,
                BlogPost.PostStatus.ARCHIVED
            },
            statuses
        );
    }

    @Test
    void testPostStatusValueOf() {
        assertEquals(BlogPost.PostStatus.DRAFT, BlogPost.PostStatus.valueOf("DRAFT"));
        assertEquals(BlogPost.PostStatus.PUBLISHED, BlogPost.PostStatus.valueOf("PUBLISHED"));
        assertEquals(BlogPost.PostStatus.ARCHIVED, BlogPost.PostStatus.valueOf("ARCHIVED"));
    }

    @Test
    void testTagsModification() {
        Set<String> tags = new HashSet<>();
        tags.add("Java");
        blogPost.setTags(tags);

        // Add a new tag
        blogPost.getTags().add("Spring");
        assertEquals(2, blogPost.getTags().size());
        assertTrue(blogPost.getTags().contains("Java"));
        assertTrue(blogPost.getTags().contains("Spring"));
    }
} 