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
        'AJI', 'DevOps Life cycle', 'The DevOps lifecycle is an iterative and collaborative process that integrates automation and feedback to deliver high-quality software, tailored to meet business and user requirements.', 'DevOps Lifecycle is the set of phases that includes DevOps for taking part in Development and Operation group duties for quicker software program delivery. DevOps follows positive techniques that consist of code, building, testing, releasing, deploying, operating, displaying, and planning. DevOps lifecycle follows a range of phases such as non-stop development, non-stop integration, non-stop testing, non-stop monitoring, and non-stop feedback. Each segment of the DevOps lifecycle is related to some equipment and applied sciences to obtain the process. Some of the frequently used tools are open source and are carried out primarily based on commercial enterprise requirements. DevOps lifecycle is effortless to manipulate and it helps satisfactory delivery.',
        'AJI123@GMAIL.COM'
    );

-- DELETE FROM BLOG
-- WHERE
--     SR_NO = 'd2e9850e-5a4a-407f-b328-5172c3bb3108';

-- ALTER TABLE BLOG ADD UNIQUE (NAME, EMAIL, PHONE_NUMBER);