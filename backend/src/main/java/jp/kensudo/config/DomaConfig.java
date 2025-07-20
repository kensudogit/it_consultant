package jp.kensudo.config;

import org.seasar.doma.jdbc.Config;
import org.seasar.doma.jdbc.dialect.Dialect;
import org.seasar.doma.jdbc.dialect.PostgresDialect;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.TransactionAwareDataSourceProxy;

import javax.sql.DataSource;

@Configuration
public class DomaConfig {

    @Value("${doma.batch-size:100}")
    private int batchSize;

    @Value("${doma.fetch-size:100}")
    private int fetchSize;

    @Value("${doma.query-timeout:30}")
    private int queryTimeout;

    @Value("${doma.batch-timeout:30}")
    private int batchTimeout;

    @Bean
    public Config domaConfig(DataSource dataSource) {
        return new Config() {
            @Override
            public DataSource getDataSource() {
                return new TransactionAwareDataSourceProxy(dataSource);
            }

            @Override
            public Dialect getDialect() {
                return new PostgresDialect();
            }

            @Override
            public int getBatchSize() {
                return batchSize;
            }

            @Override
            public int getFetchSize() {
                return fetchSize;
            }

            @Override
            public int getQueryTimeout() {
                return queryTimeout;
            }

            @Override
            public int getBatchTimeout() {
                return batchTimeout;
            }
        };
    }
} 