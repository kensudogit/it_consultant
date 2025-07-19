package jp.kensudo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
class KensudoWebsiteApplicationTest {

    @Test
    void contextLoads() {
        // アプリケーションコンテキストが正常にロードされることを確認
    }
} 