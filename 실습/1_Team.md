# Day 1
# INDEX & Goals
- 페어활동 사전 준비
    - [Github Fork & remote](#github-fork--remote)
- API 문서를 작성할 수 있습니다.
    - [API 문서 작성 완료](./Team/3.API.md)
-  Entity-Relationship Diagram (ERD)을 그리기
    - [ERD 작성 완료](./Team/4.ERD.md)
- PostgreSQL을 이용하여 DB를 구성할 수 있습니다.
    - [DB 생성](#db-생성)
        - [CLI로 PostgreSQL DB 환경 구축](#cli로-postgresql-db-환경-구축)
        - [ElephantSQL 연결](#elephantsql-연결)
            - [테이블 및 데이터 준비](#테이블-및-데이터-준비)
        - [DBeaver 연결](#dbeaver-연결)
        

---   


# Advanced
- 주어진 기능 명세 외에 필요하다고 생각되는 명세를 추가로 개발합니다.
- 선택한 주제 외에 API 서버를 추가 완성합니다.
- 관계형 데이터베이스와 NoSQL의 차이를 이해하고, 관계형 데이터베이스 및 NoSQL이 어떤 경우에 적합한지 이해합니다.
---

# 제작 범위 및 기술 스택
- 백엔드를 만듭니다.
- Fastify를 사용합니다.
- 데이터베이스를 사용해야 합니다. 즉, 데이터 모델을 디자인해야 합니다.
-
    - https://dbdiagram.io/home
- API 문서를 만들어야 합니다.
    - Method, Endpoint, Request, Response가 예시와 함께 포함되어야합니다.

---


팀의 레포를 포크한 https://github.com/Hoonology/Devops-04-S1-Team3.git 를 로컬에 저장한다.
- ```git checkout hoonology```

<br>
<br>

---

# 페어활동 사전 준비 
## Github Fork & remote
1. 페어의 깃허브 원격저장소 Fork 후 Clone
2. 상호 간 Fork한 원격 레포지토리를 Remote

- git remote add pair3 https://github.com/seay0/Devops-04-S1-Team3.git
- teddykim@Hoonology ~/Devops-04-S1-Team3 ‹main●›  
 ╰─$ ```git remote -v``` 로 아래 연결 상태창을 확인
```bash
origin	https://github.com/Hoonology/Devops-04-S1-Team3.git (fetch)
origin	https://github.com/Hoonology/Devops-04-S1-Team3.git (push)
pair2	https://github.com/teddy-woo/Devops-04-S1-Team3.git (fetch)
pair2	https://github.com/teddy-woo/Devops-04-S1-Team3.git (push)
pair3	https://github.com/seay0/Devops-04-S1-Team3.git (fetch)
pair3	https://github.com/seay0/Devops-04-S1-Team3.git (push)
```
페어의 작업내용 pull 하는 방법 
```bash
git pull pair2 main
```

(깃허브 설정 들어가서 서로 collaborators and teams에서 어드민 권한을 다 줘야한다.)

간단!

---


## DB 생성
### CLI로 PostgreSQL DB 환경 구축
- 버전 확인  
    ```bash
    postgres -V
    ```

- DB 생성
    ```bash
    createdb your_database_name
    ```
- DB 목록 확인
    ```bash
    psql -l
    ```
- DB 연결
    ```bash
    psql your_database_name
    ```

> CLI 환경에서 로컬로 DB를 만들어서 공유하는 것 보다,  
무언가 '브릿지' 역할을 하는 애플리케이션이나 웹에서 관리해주는게 협업에 도움이 될 것 같아서  
***ElephantSQL***과 ***DBeaver***를 사용해보겠다. 

---
<br>

### ElephantSQL 연결
ElephantSQL에서 인스턴스를 생성하기  
인스턴스 만드는 방법은 매우 간단하니( 회원가입 후 인스턴스 생성 ) 생략하고,  

인스턴스 생성 후 만들어진 URL을 첨부하겠다.  

URL : ```postgres://rblpgbml:o_QgZbrivLH8Uyav07Ja1ZStVdQDX3BG@floppy.db.elephantsql.com/rblpgbml```
> 위 URL은 DBeaver에서 쓰일 것이다.

<br>

### ElephantSQ의 [BROWSER] 탭에서 쿼리문 작성

#### 테이블 및 데이터 준비
- 테이블 생성
    ``` sql
    DROP TABLE IF EXISTS public.테이블명;

    CREATE TABLE public.테이블명 (
	id serial4 NOT NULL,
	필드명 타입 NULL
	CONSTRAINT 테이블명_pk PRIMARY KEY (id)
    );
    ```

- show tables
    ``` sql 
    SELECT column_name, udt_name, is_nullable FROM information_schema.columns WHERE table_name = '테이블명'
    ```
    ![쿼리문](./assets/%EC%BF%BC%EB%A6%AC%EB%AC%B8.png)
- 테이블명으로 조회
    ```sql
    SELECT * FROM [테이블명]
    ```
    ![쿼리문2](./assets/%EC%BF%BC%EB%A6%AC%EB%AC%B82.png)
- 데이터 타입 변경 : ALTER
    ``` sql
    ALTER TABLE APPLICATION ALTER COLUMN FTP_SERVER_ID TYPE VARCHAR;
                -----------              -------------      -------
                테이블명                 컬럼명             변경 데이터 타입
    ```
- 테이블의 값 삭제 : DELETE
    ``` sql
    DELETE FROM users WHERE is_seller = true;
    ```

- INSERT 구문 작성  
아래 방식으로 INSERT 구문을 작성하고 ```SELECT * FROM 테이블명```으로 테이블을 조회하면 정상적으로 들어가는 것이 확인된다.
    ``` sql
    INSERT INTO items (item_id, price, category, brand, item_name) VALUES (1,400,'Clothing','Nike','SwooshHotPants');
    INSERT INTO items (item_id, price, category, brand, item_name) VALUES (2,300,'Clothing','Nike','SwooshT-shirt');
    ```
    ``` sql
    INSERT INTO users (user_id, is_seller, username) VALUES (4927, FALSE,'Ethan');
    INSERT INTO users (user_id, is_seller, username) VALUES (5678, TRUE,'Charlotte');
    ```
    ![쿼리문3](./assets/%EC%BF%BC%EB%A6%AC%EB%AC%B83.png)

### DBeaver 연결
![pic](./assets/dbeaver.png)
- URL : 방금 ElephantSQL에서 부여 받은 URL 값이 하기 항목들을 입력할 때 입력 받아지는지 확인
- Host : host 부분을 나타내는 ****.com 부분 작성
- Database : 제공 받은 URL의 맨 마지막 부분
- Username : 제공 받은 URL의 맨 앞 부분 
- Password : host 앞 부분

쿼리문이 정상적으로 작동하면 ElephantSQL에 연결이 잘 된 것이다 !
![pic](./assets/dbeaver2.png)

