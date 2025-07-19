@echo off
echo ========================================
echo Gradleロックファイル問題の解決
echo ========================================
echo.

echo 1. Gradleプロセスを停止...
gradlew.bat --stop
timeout /t 3 /nobreak > nul

echo.
echo 2. Gradleキャッシュディレクトリをクリア...
if exist "%USERPROFILE%\.gradle\wrapper\dists" (
    echo ロックファイルを削除中...
    rmdir /s /q "%USERPROFILE%\.gradle\wrapper\dists"
    echo ロックファイルを削除しました。
) else (
    echo ロックファイルディレクトリが見つかりません。
)

echo.
echo 3. プロジェクトのクリーンアップ...
gradlew.bat clean
timeout /t 2 /nobreak > nul

echo.
echo 4. Gradle Wrapperの再ダウンロード...
gradlew.bat --version
timeout /t 3 /nobreak > nul

echo.
echo 5. テストの実行確認...
gradlew.bat test --info

echo.
echo ========================================
echo 解決完了
echo ========================================
pause 