## 데이터베이스 준비
- ElephantSQL에서 BROWSER에 테이블 생성한다.
## fastify 프로젝트 생성
```npm install -g fastify-cli```  
```fastify generate my-blog```

```bash
fastify generate my-blog
```
```bash
cd my-blog
# 디펜던시 설치
npm i # node_modules 폴더가 생성된다. 
```
3000번 포트를 통해 WAS 접근
```bash
npm run dev
# 다른 프로세스가 3000번 포트가 연결되어 있을 경우,  
# npm run dev -- --port 3001을 실행하여 3000 대신 포트 3001에서 서버를 시작합니다.
```

## 테이블 및 데이터 준비
- show tables
``` sql 
SELECT column_name, udt_name, is_nullable FROM information_schema.columns WHERE table_name = 'article'
```
- 테이블명으로 조회
```sql
SELECT * FROM [테이블명]
```
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
``` sql
INSERT INTO items (item_id, price, category, brand, item_name) VALUES (1,400,'Clothing','Nike','SwooshHotPants');
INSERT INTO items (item_id, price, category, brand, item_name) VALUES (2,300,'Clothing','Nike','SwooshT-shirt');
INSERT INTO items (item_id, price, category, brand, item_name) VALUES (3,4000,'Clothing','Nike','SwooshJacket');
INSERT INTO items (item_id, price, category, brand, item_name) VALUES (5,9000,'Clothing','Nike','SwooshExlusive');
INSERT INTO items (item_id, price, category, brand, item_name) VALUES (6,100,'Clothing','Nike','SwooshSox');
INSERT INTO items (item_id, price, category, brand, item_name) VALUES (7,1000,'Clothing','Nike','InnerWear');
INSERT INTO items (item_id, price, category, brand, item_name) VALUES (8,400,'Clothing','Nike','GeneralPants');
```
``` sql
INSERT INTO users (user_id, is_seller, username) VALUES (4927, FALSE,'Ethan');
INSERT INTO users (user_id, is_seller, username) VALUES (5678, TRUE,'Charlotte');
INSERT INTO users (user_id, is_seller, username) VALUES (1234, TRUE,'Liam');
INSERT INTO users (user_id, is_seller, username) VALUES (8235, TRUE,'Olivia');
INSERT INTO users (user_id, is_seller, username) VALUES (5262, TRUE,'Noah');
INSERT INTO users (user_id, is_seller, username) VALUES (4866, FALSE,'William');
INSERT INTO users (user_id, is_seller, username) VALUES (5234, FALSE,'Ava');
INSERT INTO users (user_id, is_seller, username) VALUES (1298, FALSE,'James');
INSERT INTO users (user_id, is_seller, username) VALUES (9108,TRUE,'Isabella');
```

## WAS와 데이터베이스 연결

https://github.com/fastify/fastify-postgres  
- ```postgres.js```
```bash
fastify.register(require('@fastify/postgres'), {
  connectionString: 'postgres://postgres@localhost/postgres'
})
```
``` js
// 환경변수로 불러오기

const {
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_NAME
} = process.env
```

위에서 불러온 ```postgres.js```를 아래와 같이 수정 
```js
module.exports = fp(async function (fastify, opts) {
    fastify.register(require('@fastify/postgres'), {
      connectionString: `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}}`
    })
    
  })
  ```
- 프로젝트 루트 폴더에 ```.env``` 파일 추가 후 아래 입력
```bash
DATABASE_USER=rblpgbml
DATABASE_PASSWORD=o_QgZbrivLH8Uyav07Ja1ZStVdQDX3BG
DATABASE_HOST=floppy.db.elephantsql.com
DATABASE_NAME=rblpgbml
```








