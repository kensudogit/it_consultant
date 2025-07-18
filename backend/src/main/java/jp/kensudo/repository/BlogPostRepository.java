package jp.kensudo.repository;

import jp.kensudo.entity.BlogPost;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {

    // 公開済みの記事を取得
    Page<BlogPost> findByStatusOrderByPublishedAtDesc(BlogPost.PostStatus status, Pageable pageable);

    // スラッグで記事を取得
    Optional<BlogPost> findBySlugAndStatus(String slug, BlogPost.PostStatus status);

    // タグで記事を検索
    @Query("SELECT DISTINCT b FROM BlogPost b JOIN b.tags t WHERE t = :tag AND b.status = :status ORDER BY b.publishedAt DESC")
    Page<BlogPost> findByTagsContainingAndStatus(@Param("tag") String tag, 
                                                @Param("status") BlogPost.PostStatus status, 
                                                Pageable pageable);

    // タイトルで記事を検索（部分一致）
    @Query("SELECT b FROM BlogPost b WHERE b.title LIKE %:keyword% AND b.status = :status ORDER BY b.publishedAt DESC")
    Page<BlogPost> findByTitleContainingAndStatus(@Param("keyword") String keyword, 
                                                 @Param("status") BlogPost.PostStatus status, 
                                                 Pageable pageable);

    // 内容で記事を検索（部分一致）
    @Query("SELECT b FROM BlogPost b WHERE b.content LIKE %:keyword% AND b.status = :status ORDER BY b.publishedAt DESC")
    Page<BlogPost> findByContentContainingAndStatus(@Param("keyword") String keyword, 
                                                   @Param("status") BlogPost.PostStatus status, 
                                                   Pageable pageable);

    // 人気記事を取得（閲覧数順）
    @Query("SELECT b FROM BlogPost b WHERE b.status = :status ORDER BY b.viewCount DESC")
    Page<BlogPost> findPopularPosts(@Param("status") BlogPost.PostStatus status, Pageable pageable);

    // 最新記事を取得
    @Query("SELECT b FROM BlogPost b WHERE b.status = :status ORDER BY b.publishedAt DESC")
    List<BlogPost> findLatestPosts(@Param("status") BlogPost.PostStatus status, Pageable pageable);

    // 全タグを取得
    @Query("SELECT DISTINCT t FROM BlogPost b JOIN b.tags t WHERE b.status = :status")
    List<String> findAllTags(@Param("status") BlogPost.PostStatus status);

    // 公開済み記事の件数を取得
    long countByStatus(BlogPost.PostStatus status);
} 