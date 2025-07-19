# テスト実行ガイド

このプロジェクトには、フロントエンド（React/TypeScript）とバックエンド（Spring Boot/Java）の両方に対して包括的なテストスイートが含まれています。

## テスト構成

### フロントエンドテスト
- **テストフレームワーク**: Vitest + React Testing Library
- **カバレッジ**: V8 Coverage
- **場所**: `frontend/src/components/__tests__/` と `frontend/src/pages/__tests__/`

### バックエンドテスト
- **テストフレームワーク**: JUnit 5 + Mockito
- **データベース**: H2 (インメモリ)
- **場所**: `backend/src/test/java/jp/kensudo/`

## テスト実行方法

### フロントエンドテスト

```bash
cd frontend

# 全テストを実行
npm test

# テストをウォッチモードで実行
npm run test:ui

# カバレッジ付きでテストを実行
npm run test:coverage
```

### バックエンドテスト

```bash
cd backend

# 全テストを実行
./gradlew test

# テストレポートを確認
./gradlew test --info

# 特定のテストクラスのみ実行
./gradlew test --tests ContactServiceTest
```

## テストファイル一覧

### フロントエンド
- `Header.test.tsx` - ヘッダーコンポーネントのテスト
- `Hero.test.tsx` - ヒーローセクションのテスト
- `About.test.tsx` - 会社概要セクションのテスト
- `Services.test.tsx` - サービスセクションのテスト
- `Engineer.test.tsx` - 技術士紹介セクションのテスト
- `Contact.test.tsx` - お問い合わせフォームのテスト
- `Footer.test.tsx` - フッターコンポーネントのテスト
- `HomePage.test.tsx` - ホームページ全体のテスト

### バックエンド
- `ContactTest.java` - Contactエンティティのテスト
- `BlogPostTest.java` - BlogPostエンティティのテスト
- `ContactRepositoryTest.java` - ContactRepositoryのテスト
- `BlogPostRepositoryTest.java` - BlogPostRepositoryのテスト
- `ContactServiceTest.java` - ContactServiceのテスト
- `ContactControllerTest.java` - ContactControllerのテスト
- `KensudoWebsiteApplicationTest.java` - アプリケーションコンテキストのテスト

## テストカバレッジ

### フロントエンド
- コンポーネントのレンダリング
- ユーザーインタラクション
- プロパティの受け渡し
- エラーハンドリング
- アクセシビリティ

### バックエンド
- エンティティのバリデーション
- リポジトリのCRUD操作
- サービスのビジネスロジック
- コントローラーのHTTPエンドポイント
- 例外処理

## テストデータ

### フロントエンド
- モックデータを使用
- 実際のAPIレスポンスをシミュレート

### バックエンド
- H2インメモリデータベース
- テスト用の設定ファイル: `application-test.yml`

## テスト実行時の注意事項

1. **フロントエンド**
   - Node.js 18以上が必要
   - 依存関係がインストールされていることを確認

2. **バックエンド**
   - Java 17以上が必要
   - Gradleが利用可能であることを確認

## カスタムテストの追加

### フロントエンド
新しいコンポーネントのテストを追加する場合：

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import YourComponent from '../YourComponent';

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### バックエンド
新しいサービスのテストを追加する場合：

```java
@ExtendWith(MockitoExtension.class)
class YourServiceTest {
    
    @Mock
    private YourRepository repository;
    
    @InjectMocks
    private YourService service;
    
    @Test
    void testYourMethod() {
        // テスト実装
    }
}
```

## トラブルシューティング

### よくある問題

1. **フロントエンドテストが失敗する**
   - `npm install` を実行して依存関係を更新
   - Node.jsのバージョンを確認

2. **バックエンドテストが失敗する**
   - `./gradlew clean test` を実行
   - Javaのバージョンを確認

3. **データベース接続エラー**
   - H2データベースの設定を確認
   - テスト用の設定ファイルが正しく読み込まれているか確認

## 継続的インテグレーション

このテストスイートは、CI/CDパイプラインで自動実行されることを想定しています。
テストの失敗は、コードの品質と安定性を保つために重要な指標となります。 