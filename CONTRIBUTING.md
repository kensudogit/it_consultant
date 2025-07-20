# コントリビューションガイドライン

## 🤝 はじめに

須藤技術士事務所のITコンサルティングシステムへのコントリビューションをありがとうございます！

このプロジェクトは、情報工学部門の技術士によるITコンサルティングサービスのWebシステムです。皆様の貢献により、より良いシステムを構築できます。

## 📋 コントリビューションの種類

以下のような貢献を歓迎します：

- 🐛 **バグレポート**
- 💡 **機能要望**
- 📝 **ドキュメントの改善**
- 🔧 **コードの改善**
- 🧪 **テストの追加**
- 🎨 **UI/UXの改善**

## 🚀 開発環境のセットアップ

### 前提条件
- Node.js 18+
- Java 17+
- Docker & Docker Compose
- Git

### セットアップ手順

1. **リポジトリのフォーク**
   ```bash
   # GitHubでリポジトリをフォーク
   # その後、ローカルにクローン
   git clone https://github.com/YOUR_USERNAME/it-consultant.git
   cd it-consultant
   ```

2. **リモートの設定**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/it-consultant.git
   ```

3. **環境の起動**
   ```bash
   # Docker環境の起動
   docker-compose up -d postgres nginx
   
   # フロントエンド
   cd frontend
   npm install
   npm run dev
   
   # バックエンド
   cd ../backend
   ./gradlew bootRun
   ```

## 🔄 開発ワークフロー

### 1. ブランチの作成

```bash
# 最新のmainブランチを取得
git checkout main
git pull upstream main

# 機能ブランチを作成
git checkout -b feature/your-feature-name
# または
git checkout -b fix/your-bug-fix
```

### 2. 開発・テスト

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

### 3. コミット

```bash
# 変更をステージング
git add .

# コミットメッセージの作成
git commit -m "feat: add new feature description"
```

### 4. プッシュ・プルリクエスト

```bash
# ブランチをプッシュ
git push origin feature/your-feature-name

# GitHubでプルリクエストを作成
```

## 📝 コミットメッセージ規約

[Conventional Commits](https://www.conventionalcommits.org/)に従います：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### タイプ
- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメントのみの変更
- `style`: コードの意味に影響しない変更（空白、フォーマット等）
- `refactor`: バグ修正や機能追加ではないコードの変更
- `perf`: パフォーマンスを改善するコードの変更
- `test`: 不足しているテストの追加や既存のテストの修正
- `chore`: ビルドプロセスや補助ツールの変更

### 例
```
feat(auth): add JWT authentication system
fix(ui): resolve mobile navigation menu issue
docs(readme): update installation instructions
style(components): format code with prettier
refactor(api): simplify user service methods
test(backend): add integration tests for user API
```

## 🧪 テストガイドライン

### フロントエンド
- **ユニットテスト**: 各コンポーネントのテスト
- **統合テスト**: コンポーネント間の連携テスト
- **E2Eテスト**: ユーザーシナリオのテスト

### バックエンド
- **ユニットテスト**: 各サービスクラスのテスト
- **統合テスト**: APIエンドポイントのテスト
- **データベーステスト**: Doma2 DAOのテスト

### テストカバレッジ
- 最低80%のカバレッジを目標
- 重要なビジネスロジックは100%カバー

## 📋 プルリクエストガイドライン

### プルリクエストの作成

1. **タイトル**: 変更内容を簡潔に説明
2. **説明**: 変更の詳細、理由、影響範囲
3. **チェックリスト**: 完了した項目をチェック

### テンプレート

```markdown
## 変更内容
- 変更の概要

## 変更理由
- なぜこの変更が必要だったか

## 影響範囲
- どの機能に影響するか

## テスト
- [ ] ユニットテストを追加/更新
- [ ] 統合テストを追加/更新
- [ ] 手動テストを実施
- [ ] 既存のテストが通ることを確認

## スクリーンショット（UI変更の場合）
- 変更前後のスクリーンショット

## チェックリスト
- [ ] コードがプロジェクトのスタイルガイドに従っている
- [ ] 自己レビューを実施した
- [ ] コメントを追加した（特に理解しにくい部分）
- [ ] ドキュメントを更新した
- [ ] 変更が既存の機能を壊していない
```

## 🔍 コードレビュー

### レビュアーの役割
- コードの品質チェック
- セキュリティの確認
- パフォーマンスの確認
- ベストプラクティスの確認

### レビュー対象
- コードの可読性
- アーキテクチャの一貫性
- エラーハンドリング
- セキュリティ
- パフォーマンス

## 🐛 バグレポート

### バグレポートのテンプレート

```markdown
## バグの概要
- バグの簡潔な説明

## 再現手順
1. 手順1
2. 手順2
3. 手順3

## 期待される動作
- 正常な動作の説明

## 実際の動作
- 実際に発生した動作

## 環境情報
- OS: 
- ブラウザ: 
- バージョン: 

## スクリーンショット
- バグのスクリーンショット

## 追加情報
- その他の関連情報
```

## 💡 機能要望

### 機能要望のテンプレート

```markdown
## 機能の概要
- 新機能の簡潔な説明

## 問題点
- 現在のシステムの課題

## 提案する解決策
- 新機能による解決方法

## 代替案
- 他の解決方法

## 追加情報
- その他の関連情報
```

## 📚 コーディング規約

### フロントエンド（React + TypeScript）

#### コンポーネント
```typescript
// 関数コンポーネントを使用
const MyComponent: React.FC<MyComponentProps> = ({ prop1, prop2 }) => {
  // フックを最初に記述
  const [state, setState] = useState(initialState);
  
  // イベントハンドラー
  const handleClick = useCallback(() => {
    // 処理
  }, []);
  
  // レンダリング
  return (
    <div className="my-component">
      {/* JSX */}
    </div>
  );
};
```

#### スタイリング
```typescript
// Tailwind CSSを使用
// カスタムクラスは index.css に定義
<div className="bg-white rounded-lg shadow-md p-4">
```

### バックエンド（Spring Boot + Java）

#### コントローラー
```java
@RestController
@RequestMapping("/api/v1")
@Validated
public class UserController {
    
    private final UserService userService;
    
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("/users/{id}")
    public ResponseEntity<UserResponse> getUser(@PathVariable Long id) {
        // 実装
    }
}
```

#### サービス
```java
@Service
@Transactional
public class UserService {
    
    private final UserDao userDao;
    
    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }
    
    public UserResponse getUser(Long id) {
        // ビジネスロジック
    }
}
```

## 🔒 セキュリティ

### セキュリティガイドライン
- 機密情報をコミットしない
- 環境変数を使用する
- 入力値の検証を必ず行う
- SQLインジェクション対策
- XSS対策
- CSRF対策

### セキュリティレポート
セキュリティの問題を発見した場合は、直接メールで報告してください：
- メール: security@kensudo.jp
- 件名: [SECURITY] セキュリティ問題の報告

## 📞 サポート

### 質問・相談
- **GitHub Issues**: 機能要望やバグレポート
- **GitHub Discussions**: 一般的な質問や議論
- **メール**: support@kensudo.jp

### コミュニティ
- 定期的なミーティング
- 技術共有会
- コードレビュー会

## 📄 ライセンス

このプロジェクトへのコントリビューションは、プロジェクトのライセンス（MIT）の下で公開されます。

## 🙏 謝辞

このプロジェクトに貢献してくださる全ての方に感謝いたします。皆様の貢献により、より良いシステムを構築できます。

---

**須藤技術士事務所 開発チーム** 