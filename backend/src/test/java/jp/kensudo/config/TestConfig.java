package jp.kensudo.config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;

@TestConfiguration
@EnableAutoConfiguration
@EntityScan("jp.kensudo.entity")
@EnableJpaRepositories("jp.kensudo.repository")
@ActiveProfiles("test")
@ComponentScan(basePackages = "jp.kensudo", 
    excludeFilters = @ComponentScan.Filter(
        type = FilterType.ASSIGNABLE_TYPE, 
        classes = {jp.kensudo.KensudoWebsiteApplication.class}
    ))
public class TestConfig {
} 