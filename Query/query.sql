-- Active: 1706869359623@@127.0.0.1@5432@postgres

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS BLOG (
    ID UUID PRIMARY KEY DEFAULT uuid_generate_v4 (), SR_NO SERIAL, AUTHOR VARCHAR(90) NOT NULL, TITLE VARCHAR(90) NOT NULL, BLOG_DESCRIPTION TEXT, BLOG_CONTENT TEXT, CREATED_AT TIMESTAMP DEFAULT NOW(), EMAIL_ID VARCHAR(90) UNIQUE NOT NULL
);

SELECT * FROM BLOG;

TRUNCATE TABLE BLOG;

DROP TABLE BLOG;

INSERT INTO
    BLOG (
        AUTHOR, TITLE, BLOG_DESCRIPTION, BLOG_CONTENT, EMAIL_ID
    )
VALUES (
        'Anu', 'All about Kubernetes', 'Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.', 'Containers are a good way to bundle and run your applications. In a production environment, you need to manage the containers that run the applications and ensure that there is no downtime. For example, if a container goes down, another container needs to start. Would not it be easier if this behavior was handled by a system? That is how Kubernetes comes to the rescue! Kubernetes provides you with a framework to run distributed systems resiliently. It takes care of scaling and failover for your application, provides deployment patterns, and more. For example: Kubernetes can easily manage a canary deployment for your system.', 'anu123@gmail.com'
    );

-- DELETE FROM BLOG
-- WHERE
--     SR_NO = 'd2e9850e-5a4a-407f-b328-5172c3bb3108';

-- ALTER TABLE BLOG ADD UNIQUE (NAME, EMAIL, PHONE_NUMBER);