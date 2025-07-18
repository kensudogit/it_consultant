FROM openjdk:17-jdk-slim

WORKDIR /app

# Gradle Wrapperをコピー
COPY gradlew .
COPY gradle gradle
COPY build.gradle.kts .

# 依存関係をダウンロード
RUN chmod +x gradlew && \
    ./gradlew dependencies --no-daemon

# ソースコードをコピー
COPY src src

# アプリケーションをビルド
RUN ./gradlew clean build -x test --no-daemon

# 実行用JARファイルを抽出
RUN mkdir -p target/dependency && \
    (cd target/dependency; jar -xf ../build/libs/*.jar)

# マルチステージビルドでランタイムイメージを作成
FROM openjdk:17-jre-slim

VOLUME /tmp

# 依存関係とアプリケーションクラスをコピー
COPY --from=0 /app/target/dependency/BOOT-INF/lib /app/lib
COPY --from=0 /app/target/dependency/META-INF /app/META-INF
COPY --from=0 /app/target/dependency/BOOT-INF/classes /app

# アプリケーションを実行
ENTRYPOINT ["java", "-cp", "app:app/lib/*", "jp.kensudo.KensudoWebsiteApplication"]

EXPOSE 8080 