@echo off
echo Gradle Wrapper JARファイルをダウンロードしています...

if not exist "gradle\wrapper" mkdir "gradle\wrapper"

powershell -Command "& {Invoke-WebRequest -Uri 'https://github.com/gradle/gradle/raw/v8.5.0/gradle/wrapper/gradle-wrapper.jar' -OutFile 'gradle\wrapper\gradle-wrapper.jar'}"

if exist "gradle\wrapper\gradle-wrapper.jar" (
    echo Gradle Wrapper JARファイルのダウンロードが完了しました。
) else (
    echo エラー: Gradle Wrapper JARファイルのダウンロードに失敗しました。
    exit /b 1
)

echo.
echo Gradle Wrapperの設定が完了しました。
echo 以下のコマンドでGradleを使用できます：
echo   gradlew.bat build
echo   gradlew.bat bootRun
echo.
pause 