-- 須藤技術士事務所 データベース初期化スクリプト

-- データベース作成（既に存在する場合はスキップ）
-- CREATE DATABASE kensudo_db;

-- 拡張機能の有効化
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- お問い合わせテーブル
CREATE TABLE IF NOT EXISTS contacts (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(100),
    status VARCHAR(20) NOT NULL DEFAULT 'NEW',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ブログ記事テーブル
CREATE TABLE IF NOT EXISTS blog_posts (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    featured_image VARCHAR(500),
    slug VARCHAR(200) UNIQUE,
    status VARCHAR(20) NOT NULL DEFAULT 'DRAFT',
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    published_at TIMESTAMP
);

-- ブログ記事タグテーブル
CREATE TABLE IF NOT EXISTS blog_post_tags (
    post_id BIGINT NOT NULL,
    tag VARCHAR(50) NOT NULL,
    PRIMARY KEY (post_id, tag),
    FOREIGN KEY (post_id) REFERENCES blog_posts(id) ON DELETE CASCADE
);

-- インデックスの作成
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX IF NOT EXISTS idx_blog_posts_view_count ON blog_posts(view_count);

-- サンプルデータの挿入（開発環境用）
INSERT INTO contacts (name, email, subject, message, company, status) VALUES
('田中太郎', 'tanaka@example.com', 'システム開発について', '製造業向けの生産管理システムの開発について相談したいです。', '田中製造株式会社', 'NEW'),
('佐藤花子', 'sato@example.com', '技術指導について', '開発チームの技術力向上のための研修について詳しく知りたいです。', '佐藤IT株式会社', 'IN_PROGRESS'),
('鈴木一郎', 'suzuki@example.com', 'ITコンサルティング', '既存システムの改善提案について相談したいです。', '鈴木商事株式会社', 'COMPLETED')
ON CONFLICT DO NOTHING;

INSERT INTO blog_posts (title, content, excerpt, slug, status, published_at) VALUES
('Spring Boot 3.0の新機能について', 
'Spring Boot 3.0では、Java 17以上が必須となり、多くの新機能が追加されました。この記事では、主要な新機能について詳しく解説します。',
'Spring Boot 3.0の主要な新機能と移行のポイントについて解説します。',
'spring-boot-3-features',
'PUBLISHED',
CURRENT_TIMESTAMP - INTERVAL '5 days'),

('Next.js 14でのApp Router活用方法', 
'Next.js 14では、App Routerが安定版となり、より多くの機能が利用できるようになりました。実践的な活用方法を紹介します。',
'Next.js 14のApp Routerを使った効率的な開発手法について解説します。',
'nextjs-14-app-router',
'PUBLISHED',
CURRENT_TIMESTAMP - INTERVAL '3 days'),

('Dockerを使った開発環境の構築', 
'Dockerを使った開発環境の構築方法について、実践的な例を交えて解説します。',
'Dockerを使った効率的な開発環境の構築方法を紹介します。',
'docker-development-environment',
'PUBLISHED',
CURRENT_TIMESTAMP - INTERVAL '1 day')
ON CONFLICT DO NOTHING;

-- ブログ記事のタグを挿入
INSERT INTO blog_post_tags (post_id, tag) VALUES
(1, 'Spring Boot'),
(1, 'Java'),
(1, 'バックエンド'),
(2, 'Next.js'),
(2, 'React'),
(2, 'フロントエンド'),
(3, 'Docker'),
(3, '開発環境'),
(3, 'DevOps')
ON CONFLICT DO NOTHING;

-- 権限の設定
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO kensudo_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO kensudo_user; 