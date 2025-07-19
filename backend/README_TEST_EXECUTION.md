# テスト実行ガイド - 「▷」ボタンでテスト実行

このプロジェクトでは、IDEで「▷」ボタンをクリックしてテストを実行できるように設定されています。

## 🚀 クイックスタート

### IntelliJ IDEA での実行

1. **プロジェクトを開く**
   ```
   File → Open → backend フォルダを選択
   ```

2. **テストクラスを開く**
   - `src/test/java/jp/kensudo/repository/ContactRepositoryTest.java`
   - `src/test/java/jp/kensudo/repository/BlogPostRepositoryTest.java`

3. **▷ボタンで実行**
   - クラス名の横の▷ボタン：クラス全体のテスト実行
   - メソッド名の横の▷ボタン：個別メソッドのテスト実行

4. **事前設定済みの実行設定**
   - `Run → Edit Configurations` で以下が利用可能：
     - `ContactRepositoryTest`
     - `BlogPostRepositoryTest`
     - `All Tests`

### VS Code での実行

1. **プロジェクトを開く**
   ```
   File → Open Folder → backend フォルダを選択
   ```

2. **Java Extension Pack をインストール**
   - Extension Marketplace で "Extension Pack for Java" を検索・インストール

3. **▷ボタンで実行**
   - テストクラスまたはメソッドの上に▷ボタンが表示されます
   - クリックしてテストを実行

4. **キーボードショートカット**
   - `Ctrl+Shift+P` → "Java: Run Tests" でテスト実行
   - `Ctrl+Shift+P` → "Tasks: Run Task" → "Run All Tests"

### Eclipse での実行

1. **プロジェクトをインポート**
   ```
   File → Import → Existing Gradle Project → backend フォルダを選択
   ```

2. **テストクラスを開く**
   - Package Explorer でテストクラスを右クリック

3. **▷ボタンで実行**
   - ツールバーの▷ボタンでテスト実行
   - または右クリック → "Run As" → "JUnit Test"

## 📋 利用可能なテスト

### リポジトリテスト
- **ContactRepositoryTest**: お問い合わせリポジトリのテスト
  - `testSaveContact()`: お問い合わせ保存テスト
  - `testFindById()`: ID検索テスト
  - `testFindByStatusOrderByCreatedAtDesc()`: ステータス別検索テスト
  - その他8つのテストメソッド

- **BlogPostRepositoryTest**: ブログ投稿リポジトリのテスト
  - `testSaveBlogPost()`: ブログ投稿保存テスト
  - `testFindById()`: ID検索テスト
  - `testFindByStatusOrderByPublishedAtDesc()`: 公開日順検索テスト
  - その他7つのテストメソッド

### サービステスト
- **ContactServiceTest**: お問い合わせサービスのテスト
- **BlogPostServiceTest**: ブログ投稿サービスのテスト

## ⚙️ 設定詳細

### 環境変数
テスト実行時は自動的に以下が設定されます：
- `SPRING_PROFILES_ACTIVE=test`
- `JAVA_OPTS=-ea -Dspring.profiles.active=test`

### データベース設定
テスト用のH2インメモリデータベースが使用されます：
- URL: `jdbc:h2:mem:testdb`
- ユーザー: `sa`
- パスワード: (空)
- DDL: `create-drop`

## 🔧 トラブルシューティング

### テストが実行されない場合

1. **Gradleの確認**
   ```bash
   gradle --version
   ```

2. **依存関係の更新**
   ```bash
   gradle clean build
   ```

3. **IDEの再起動**
   - IDEを完全に再起動してプロジェクトを再読み込み

### アプリケーションコンテキストエラー

テスト設定が正しく読み込まれていることを確認：
- `@DataJpaTest` アノテーションが使用されている
- `@ActiveProfiles("test")` が設定されている
- `@TestPropertySource` でH2データベースが指定されている

## 📊 テストレポート

テスト実行後、以下のレポートが生成されます：

### HTMLレポート
- 場所: `build/reports/tests/test/index.html`
- ブラウザで開いて詳細なテスト結果を確認

### JaCoCoカバレッジレポート
- 場所: `build/reports/jacoco/test/html/index.html`
- コードカバレッジの詳細を確認

## 🎯 ベストプラクティス

1. **個別テスト実行**
   - 開発中は関連するテストのみを実行
   - 全体テストはコミット前に実行

2. **テストデータ**
   - 各テストメソッドで独立したテストデータを作成
   - `@TestEntityManager` を使用してデータを管理

3. **アサーション**
   - 明確で意味のあるアサーションメッセージを使用
   - 複数のアサーションでテストの意図を明確化

## 📝 カスタマイズ

### 新しいテストクラスの追加

1. テストクラスを作成
2. `@DataJpaTest` アノテーションを追加
3. 必要に応じて `@ContextConfiguration` で設定を指定

### 実行設定の追加

各IDEの設定ファイルを編集：
- IntelliJ: `.idea/runConfigurations/`
- VS Code: `.vscode/launch.json`
- Eclipse: `.classpath`, `.project`

## 🆘 サポート

問題が発生した場合は以下を確認：
1. ログファイル: `build/reports/tests/test/index.html`
2. 問題レポート: `build/reports/problems/problems-report.html`
3. Gradleデーモンの状態: `gradle --stop` でリセット 