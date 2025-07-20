import java.time.Duration

plugins {
    id("org.springframework.boot") version "3.2.0"
    id("io.spring.dependency-management") version "1.1.4"
    id("jacoco")
    java
}

group = "jp.kensudo"
version = "1.0.0"
java.sourceCompatibility = JavaVersion.VERSION_17

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

repositories {
    mavenCentral()
}

dependencies {
    // Spring Boot Starters
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.boot:spring-boot-starter-security")
    implementation("org.springframework.boot:spring-boot-starter-mail")

    // Doma2 Database Framework
    implementation("org.seasar.doma:doma-core:2.54.0")
    implementation("org.seasar.doma:doma-slf4j:2.54.0")
    annotationProcessor("org.seasar.doma:doma-processor:2.54.0")
    
    // Database
    runtimeOnly("org.postgresql:postgresql")
    testRuntimeOnly("com.h2database:h2")

    // JWT
    implementation("io.jsonwebtoken:jjwt-api:0.12.3")
    runtimeOnly("io.jsonwebtoken:jjwt-impl:0.12.3")
    runtimeOnly("io.jsonwebtoken:jjwt-jackson:0.12.3")

    // Development Tools
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    annotationProcessor("org.springframework.boot:spring-boot-configuration-processor")

    // Test Dependencies
testImplementation("org.springframework.boot:spring-boot-starter-test") {
    exclude(group = "org.junit.vintage", module = "junit-vintage-engine")
}
testImplementation("org.springframework.security:spring-security-test")
testImplementation("org.junit.jupiter:junit-jupiter-api")
testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")
testImplementation("org.mockito:mockito-core")
testImplementation("org.mockito:mockito-junit-jupiter")
}

tasks.withType<Test> {
    useJUnitPlatform()
    
    // テストの並列実行設定
    maxParallelForks = (Runtime.getRuntime().availableProcessors() / 2).takeIf { it > 0 } ?: 1
    
    // テストのタイムアウト設定
    timeout.set(Duration.ofMinutes(5))
    
    // テストログの詳細設定
    testLogging {
        events("passed", "skipped", "failed")
        exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
        showCauses = true
        showExceptions = true
        showStackTraces = true
        showStandardStreams = false
    }
    
    // テストフィルター設定
    filter {
        includeTestsMatching("*Test")
        includeTestsMatching("*Tests")
    }
}

tasks.withType<JavaCompile> {
    sourceCompatibility = "17"
    targetCompatibility = "17"
    options.encoding = "UTF-8"
    
    // Doma2 annotation processor設定
    options.compilerArgs.add("-Adoma.domain.converters=jp.kensudo.domain.converter.*")
    options.compilerArgs.add("-Adoma.dao.package=jp.kensudo.dao")
    options.compilerArgs.add("-Adoma.dao.suffix=Dao")
    options.compilerArgs.add("-Adoma.domain.package=jp.kensudo.domain")
    options.compilerArgs.add("-Adoma.entity.package=jp.kensudo.entity")
    options.compilerArgs.add("-Adoma.sql.package=jp.kensudo.sql")
}

// Spring Boot JAR設定
springBoot {
    buildInfo()
}

// テストタスクの詳細設定
tasks.test {
    // テスト実行前のクリーン
    dependsOn("cleanTest")
    
    // テスト失敗時の設定
    failFast = false
    
    // テストレポートの出力
    reports {
        html.required.set(true)
        junitXml.required.set(true)
    }
}

// 依存関係の解決設定
configurations.all {
    resolutionStrategy {
        force("org.springframework.boot:spring-boot-starter-parent:3.2.0")
    }
}

// JaCoCo設定
tasks.jacocoTestReport {
    reports {
        xml.required.set(true)
        html.required.set(true)
        csv.required.set(false)
    }
    
    dependsOn(tasks.test)
}

tasks.jacocoTestCoverageVerification {
    violationRules {
        rule {
            limit {
                minimum = "0.8".toBigDecimal()
            }
        }
    }
} 