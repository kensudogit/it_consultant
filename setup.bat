@echo off
echo 須藤技術士事務所 ホームページ セットアップスクリプト
echo ================================================

echo.
echo 1. Docker環境の起動...
docker-compose up -d

echo.
echo 2. フロントエンドの依存関係をインストール...
cd frontend
npm install
cd ..

echo.
echo 3. バックエンドの依存関係をインストール...
cd backend
call download-gradle-wrapper.bat
call gradlew.bat clean build -x test
cd ..

echo.
echo 4. 環境変数ファイルの作成...
if not exist .env (
npm    echo VITE_API_URL=http://localhost:8080/api > .env
    echo VITE_SITE_URL=http://localhost:80 >> .env
    echo MAIL_USERNAME=your-email@gmail.com >> .env
    echo MAIL_PASSWORD=your-app-password >> .env
    echo JWT_SECRET=your-secret-key >> .env
)

echo.
echo セットアップが完了しました！
echo.
echo 以下のURLでアクセスできます：
echo - フロントエンド: http://localhost:80
echo - バックエンドAPI: http://localhost:8080/api
echo - データベース: localhost:5432
echo.
echo 開発を開始するには：
echo 1. フロントエンド: cd frontend && npm run dev
echo 2. バックエンド: cd backend && gradlew bootRun
echo.
pause 