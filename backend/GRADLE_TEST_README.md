# Gradleテスト実行ガイド

このプロジェクトのバックエンドテストは、Gradleを使用して実行されます。

## 前提条件

- Java 17以上
- Gradle 8.4以上（またはGradle Wrapper使用）

## テスト実行方法

### 1. 基本的なテスト実行

```bash
# プロジェクトディレクトリに移動
cd devlop/it_consultant/backend

# テスト実行
gradlew.bat test
```

### 2. テストスクリプトを使用

```bash
# 自動テスト実行スクリプト
run-tests.bat
```

このスクリプトは以下を自動実行します：
- テストのクリーンアップ
- テスト実行
- テストレポート生成
- カバレッジレポート生成

### 3. 個別のテスト実行

```bash
# 特定のテストクラスのみ実行
gradlew.bat test --tests jp.kensudo.entity.ContactTest

# 特定のテストメソッドのみ実行
gradlew.bat test --tests jp.kensudo.entity.ContactTest.shouldCreateContactWithDefaultConstructor
```

### 4. テストカバレッジの確認

```bash
# カバレッジレポート生成
gradlew.bat jacocoTestReport

# カバレッジ検証（80%以上必要）
gradlew.bat jacocoTestCoverageVerification
```

## テストレポート

### HTMLレポート
- **テストレポート**: `build/reports/tests/test/index.html`
- **カバレッジレポート**: `build/reports/jacoco/test/html/index.html`

### XMLレポート
- **テストレポート**: `build/reports/tests/test/TEST-*.xml`
- **カバレッジレポート**: `build/reports/jacoco/test/jacocoTestReport.xml`

## テスト設定

### build.gradle.ktsの主な設定

```kotlin
// テストの並列実行
maxParallelForks = (Runtime.getRuntime().availableProcessors() / 2).takeIf { it > 0 } ?: 1

// テストタイムアウト（5分）
timeout.set(Duration.ofMinutes(5))

// テストログ設定
testLogging {
    events("passed", "skipped", "failed")
    exceptionFormat = TestExceptionFormat.FULL
    showCauses = true
    showExceptions = true
    showStackTraces = true
}
```

### テストフィルター
- `*Test` で終わるクラスがテスト対象
- `*Tests` で終わるクラスもテスト対象

## よくある問題と解決方法

### 1. Gradle Wrapperが見つからない
```bash
# Gradle Wrapperを再ダウンロード
gradle wrapper --gradle-version 8.4
```

### 2. テストが遅い
```bash
# 並列実行を無効にする場合
gradlew.bat test --max-workers=1
```

### 3. 特定のテストが失敗する
```bash
# 詳細なログを出力
gradlew.bat test --info
gradlew.bat test --debug
```

### 4. メモリ不足
```bash
# JVMのメモリ設定を変更
gradlew.bat test -Dorg.gradle.jvmargs="-Xmx2g"
```

## テストのベストプラクティス

### 1. テストクラスの構造
- `@Nested` を使用してテストをグループ化
- `@DisplayName` で日本語のテスト名を設定
- `@TestInstance(PER_CLASS)` でテストインスタンスの管理

### 2. テストメソッドの命名
- `should_〇〇_when_△△` 形式を推奨
- 日本語の `@DisplayName` で詳細を記述

### 3. アサーション
- 具体的なエラーメッセージを設定
- 複数のアサーションを組み合わせて検証

## CI/CD連携

### GitHub Actions例
```yaml
- name: Run tests
  run: |
    cd devlop/it_consultant/backend
    ./gradlew test jacocoTestReport
```

### テスト結果の通知
- テスト失敗時のSlack通知
- カバレッジレポートの自動送信

## トラブルシューティング

### ログの確認
```bash
# 詳細ログ
gradlew.bat test --info

# デバッグログ
gradlew.bat test --debug

# スタックトレース
gradlew.bat test --stacktrace
```

### キャッシュのクリア
```bash
# Gradleキャッシュをクリア
gradlew.bat clean
gradlew.bat --stop
```

### 依存関係の確認
```bash
# 依存関係ツリーを表示
gradlew.bat dependencies --configuration testRuntimeClasspath
``` 