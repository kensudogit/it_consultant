# 須藤技術士事務所 ホームページ

## 概要
須藤技術士事務所（情報工学部門）の公式ホームページです。

## 技術スタック
- **バックエンド**: Spring Boot 3.x + Java 17
- **データベース**: PostgreSQL 15
- **フロントエンド**: React 18 + Next.js 14
- **コンテナ化**: Docker + Docker Compose
- **デプロイ**: WordPress.com (https://kensudo.jp)

## プロジェクト構造
```
it_consultant/
├── backend/                 # Spring Boot アプリケーション
├── frontend/               # Next.js アプリケーション
├── docker/                 # Docker 設定ファイル
├── database/              # PostgreSQL 初期化スクリプト
└── docs/                  # ドキュメント
```

## セットアップ手順

### 1. 環境構築
```bash
# リポジトリをクローン
git clone <repository-url>
cd it_consultant

# Docker Composeで環境を起動
docker-compose up -d
```

### 2. アプリケーション起動
```bash
# バックエンド起動
cd backend
./mvnw spring-boot:run

# フロントエンド起動
cd frontend
npm install
npm run dev
```

### 3. アクセス
- フロントエンド: http://localhost:3000
- バックエンドAPI: http://localhost:8080
- データベース: localhost:5432

## 機能一覧
- ホームページ（会社概要）
- サービス紹介
- 技術士紹介
- 実績・事例
- お問い合わせフォーム
- ブログ・技術記事

## 開発ガイドライン
- レスポンシブデザイン対応
- アクセシビリティ準拠（WCAG 2.1 AA）
- ユニバーサルデザイン考慮
- クロスブラウザ対応 "# it_consultant" 
