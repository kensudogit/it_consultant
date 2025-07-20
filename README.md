# 須藤技術士事務所 - ITコンサルティングシステム

## 📋 プロジェクト概要

情報工学部門の技術士によるITコンサルティングサービスのWebシステムです。React + TypeScriptフロントエンドとSpring Boot + Doma2バックエンドで構築されています。

## 🚀 技術スタック

### フロントエンド
- **React 18** + **TypeScript**
- **Vite** - 高速ビルドツール
- **Tailwind CSS** - ユーティリティファーストCSS
- **Framer Motion** - アニメーションライブラリ
- **React Router** - ルーティング
- **React Hot Toast** - 通知システム

### バックエンド
- **Spring Boot 3.2.0** - Java 17
- **Doma2** - データベースアクセスフレームワーク
- **PostgreSQL** - データベース
- **JWT** - 認証システム

### インフラ
- **Docker** + **Docker Compose**
- **Nginx** - リバースプロキシ
- **Gradle** - ビルドツール

## 🛠️ 開発環境のセットアップ

### 前提条件
- Node.js 18+
- Java 17+
- Docker & Docker Compose
- Git

### 1. リポジトリのクローン
```bash
git clone https://github.com/your-username/it-consultant.git
cd it-consultant
```

### 2. 環境変数の設定
```bash
# フロントエンド
cp frontend/.env.example frontend/.env

# バックエンド
cp backend/.env.example backend/.env
```

### 3. Docker環境の起動
```bash
# データベースとインフラの起動
docker-compose up -d postgres nginx

# または全体を起動
docker-compose up -d
```

### 4. フロントエンド開発サーバーの起動
```bash
cd frontend
npm install
npm run dev
```

### 5. バックエンド開発サーバーの起動
```bash
cd backend
./gradlew bootRun
```

## 📁 プロジェクト構造

```
it-consultant/
├── frontend/                 # React + TypeScript フロントエンド
│   ├── src/
│   │   ├── components/      # 再利用可能なコンポーネント
│   │   ├── pages/          # ページコンポーネント
│   │   ├── hooks/          # カスタムフック
│   │   └── utils/          # ユーティリティ関数
│   ├── public/             # 静的ファイル
│   └── package.json
├── backend/                 # Spring Boot バックエンド
│   ├── src/main/java/
│   │   └── jp/kensudo/
│   │       ├── controller/ # REST API コントローラー
│   │       ├── service/    # ビジネスロジック
│   │       ├── dao/        # Doma2 DAO
│   │       ├── entity/     # エンティティクラス
│   │       └── config/     # 設定クラス
│   ├── src/main/resources/
│   │   └── META-INF/doma/sql/ # SQLファイル
│   └── build.gradle.kts
├── database/               # データベース関連
│   └── init/              # 初期化SQL
├── docker/                # Docker設定
├── docker-compose.yml     # Docker Compose設定
└── README.md
```

## 🔧 開発ワークフロー

### ブランチ戦略
- `main` - 本番環境用ブランチ
- `develop` - 開発用ブランチ
- `feature/*` - 機能開発用ブランチ
- `hotfix/*` - 緊急修正用ブランチ

### コミットメッセージ規約
```
feat: 新機能の追加
fix: バグ修正
docs: ドキュメントの更新
style: コードスタイルの修正
refactor: リファクタリング
test: テストの追加・修正
chore: その他の変更
```

### プルリクエスト
1. 機能ブランチを作成
2. 開発・テストを実施
3. プルリクエストを作成
4. コードレビューを実施
5. マージ

## 🧪 テスト

### フロントエンド
```bash
cd frontend
npm run test          # ユニットテスト
npm run test:e2e      # E2Eテスト
npm run test:coverage # カバレッジレポート
```

### バックエンド
```bash
cd backend
./gradlew test        # ユニットテスト
./gradlew integrationTest # 統合テスト
./gradlew jacocoTestReport # カバレッジレポート
```

## 🚀 デプロイメント

### 開発環境
```bash
docker-compose up -d
```

### 本番環境
```bash
# ビルド
docker-compose -f docker-compose.prod.yml build

# デプロイ
docker-compose -f docker-compose.prod.yml up -d
```

## 📊 監視・ログ

- **アプリケーションログ**: `logs/` ディレクトリ
- **データベースログ**: PostgreSQL ログ
- **Nginx ログ**: アクセスログ・エラーログ

## 🔒 セキュリティ

- JWT認証
- CORS設定
- SQLインジェクション対策（Doma2）
- XSS対策
- CSRF対策

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'feat: add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 📞 サポート

- **Issues**: [GitHub Issues](https://github.com/your-username/it-consultant/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/it-consultant/discussions)

## 🏆 貢献者

<a href="https://github.com/your-username/it-consultant/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=your-username/it-consultant" />
</a> 
