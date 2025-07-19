@echo off
echo ========================================
echo 須藤技術士事務所 バックエンドテスト実行
echo ========================================
echo.

echo 1. テストのクリーンアップ...
gradlew.bat cleanTest

echo.
echo 2. テストの実行...
gradlew.bat test

echo.
echo 3. テストレポートの確認...
if exist "build\reports\tests\test\index.html" (
    echo テストレポートが生成されました: build\reports\tests\test\index.html
    echo ブラウザで開いて詳細を確認してください。
) else (
    echo テストレポートが見つかりません。
)

echo.
echo 4. カバレッジレポートの生成...
gradlew.bat jacocoTestReport

if exist "build\reports\jacoco\test\html\index.html" (
    echo カバレッジレポートが生成されました: build\reports\jacoco\test\html\index.html
    echo ブラウザで開いてカバレッジを確認してください。
) else (
    echo カバレッジレポートが見つかりません。
)

echo.
echo ========================================
echo テスト実行完了
echo ========================================
pause 