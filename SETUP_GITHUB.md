# GitHub共同開発環境セットアップガイド

## 🚀 概要

このドキュメントでは、須藤技術士事務所のITコンサルティングシステムをGitHubで共同開発するための環境構築手順を説明します。

## 📋 前提条件

- GitHubアカウント
- Git（ローカル環境）
- Node.js 18+
- Java 17+
- Docker & Docker Compose

## 🔧 セットアップ手順

### 1. GitHubリポジトリの作成

1. **GitHubにログイン**
   - https://github.com にアクセス
   - アカウントにログイン

2. **新しいリポジトリを作成**
   - 「New repository」をクリック
   - リポジトリ名: `it-consultant`
   - 説明: `須藤技術士事務所 - ITコンサルティングシステム`
   - 公開設定: Private（推奨）または Public
   - README、.gitignore、ライセンスを追加

3. **リポジトリの設定**
   - Settings → Collaborators and teams
   - 共同開発者を追加
   - 適切な権限を設定

### 2. ローカル環境の設定

```bash
# リポジトリをクローン
git clone https://github.com/YOUR_USERNAME/it-consultant.git
cd it-consultant

# リモートの設定
git remote add upstream https://github.com/ORIGINAL_OWNER/it-consultant.git

# ブランチの設定
git checkout -b develop
git push -u origin develop
```

### 3. ブランチ保護の設定

GitHubリポジトリの設定で以下を有効化：

1. **Settings → Branches**
2. **Add rule** をクリック
3. **Branch name pattern**: `main`
4. 以下の設定を有効化：
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1以上)
   - ✅ Dismiss stale PR approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging

### 4. GitHub Actionsの設定

1. **Settings → Actions → General**
2. **Actions permissions**: Allow all actions and reusable workflows
3. **Workflow permissions**: Read and write permissions
4. **保存**

### 5. セキュリティ設定

1. **Settings → Security**
2. **Dependabot alerts**: 有効化
3. **Dependabot security updates**: 有効化
4. **Code scanning**: 有効化（推奨）

## 🔄 開発ワークフロー

### 機能開発

```bash
# 最新のdevelopブランチを取得
git checkout develop
git pull upstream develop

# 機能ブランチを作成
git checkout -b feature/new-feature

# 開発・テスト
# ... 開発作業 ...

# コミット
git add .
git commit -m "feat: add new feature"

# プッシュ
git push origin feature/new-feature

# GitHubでプルリクエストを作成
# developブランチに向けて
```

### バグ修正

```bash
# 最新のdevelopブランチを取得
git checkout develop
git pull upstream develop

# 修正ブランチを作成
git checkout -b fix/bug-description

# 修正・テスト
# ... 修正作業 ...

# コミット
git add .
git commit -m "fix: resolve bug description"

# プッシュ
git push origin fix/bug-description

# GitHubでプルリクエストを作成
```

### リリース準備

```bash
# developブランチからmainブランチにマージ
git checkout main
git pull upstream main
git merge develop

# タグを作成
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## 📊 品質管理

### コードレビュー

1. **プルリクエストの作成**
   - タイトル: 変更内容を簡潔に説明
   - 説明: 変更の詳細、理由、影響範囲
   - レビュアーの指定

2. **レビューの実施**
   - コードの品質チェック
   - セキュリティの確認
   - パフォーマンスの確認
   - テストの確認

3. **マージ**
   - 承認後、マージを実行
   - ブランチの削除

### テスト

```bash
# フロントエンドテスト
cd frontend
npm run test
npm run test:e2e

# バックエンドテスト
cd ../backend
./gradlew test
./gradlew integrationTest
```

## 🔒 セキュリティ

### 機密情報の管理

1. **環境変数**
   - `.env`ファイルを`.gitignore`に追加
   - GitHub Secretsを使用

2. **APIキー**
   - 直接コミットしない
   - 環境変数で管理

3. **データベース認証情報**
   - Docker Composeで管理
   - 本番環境では外部サービスを使用

### セキュリティスキャン

- Dependabotによる依存関係の脆弱性チェック
- GitHub Actionsによる自動セキュリティスキャン
- 定期的なセキュリティレビュー

## 📈 監視・分析

### GitHub Insights

1. **Pulse**: リポジトリの活動状況
2. **Contributors**: 貢献者の統計
3. **Traffic**: リポジトリのアクセス統計
4. **Commits**: コミット履歴

### コード品質

1. **Code coverage**: テストカバレッジ
2. **Code quality**: コード品質メトリクス
3. **Performance**: パフォーマンス指標

## 🚀 デプロイメント

### 開発環境

```bash
# ローカル環境
docker-compose up -d

# または個別起動
cd frontend && npm run dev
cd backend && ./gradlew bootRun
```

### 本番環境

```bash
# GitHub Actionsによる自動デプロイ
# mainブランチへのマージで自動実行

# 手動デプロイ
docker-compose -f docker-compose.prod.yml up -d
```

## 📞 サポート

### 問題の報告

1. **GitHub Issues**: バグレポート、機能要望
2. **GitHub Discussions**: 一般的な質問、議論
3. **プルリクエスト**: コードの問題

### コミュニケーション

- **Slack**: リアルタイムコミュニケーション
- **Teams**: ビデオ会議、ファイル共有
- **メール**: 正式な連絡

## 📚 参考資料

- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Dependabot](https://docs.github.com/en/code-security/dependabot)

## 🔄 更新履歴

- 2024-01-XX: 初版作成
- 2024-01-XX: セキュリティ設定を追加
- 2024-01-XX: デプロイメント手順を追加

---

**須藤技術士事務所 開発チーム** 