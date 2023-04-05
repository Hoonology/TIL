# Day 2
# INDEX & Goals
- [Fastify를 이용해 DB와 통신하는 서버 만들기](#fastify를-이용해-db와-통신하는-서버-만들기)
    - [1. ```.env``` 파일 작성](#1-우선-elephantsql의-연결-정보를-env-파일에-작성한다)
    - [2. fastify 프로젝트 생성](#fastify-프로젝트-생성)
- [WAS와 데이터베이스 연결](#was와-데이터베이스-연결)
---

## Fastify를 이용해 DB와 통신하는 서버 만들기
### 1. 우선 ElephantSQL의 연결 정보를 ```.env``` 파일에 작성한다.
  ```bash
  HOSTNAME=satao.db.elephantsql.com
  USERNAME=jvhigyac
  PASSWORD=4uSs-7B21LIZfI17Fzf1acdcJCG87ke
  DATABASE=jvhigyac
  ```
> shoping-bag 폴더에 저장 후 Push 

<br>

### 2. fastify 프로젝트 생성

```bash
npm install -g fastify-cli
```  
shopping-bag 폴더 안에
```
fastify generate shopping-bag
```
shopping-bag 폴더 접근
```bash
cd shopping-bag
# 디펜던시 설치
npm i # node_modules 폴더가 생성된다. 
```
3000번 포트를 통해 WAS 접근한다.
```bash
npm run dev
# 다른 프로세스가 3000번 포트가 연결되어 있을 경우,  
# npm run dev -- --port 3001을 실행하여 3000 대신 포트 3001에서 서버를 시작합니다.
```

## WAS와 데이터베이스 연결

https://github.com/fastify/fastify-postgres 참고
- ```postgres.js``` 파일 내용 (향후 수정 내용)
```bash
fastify.register(require('@fastify/postgres'), {
  connectionString: 'postgres://postgres@localhost/postgres'
})
```

환경변수로 불러오기
``` js
const {
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_NAME } = process.env
```

위에서 불러온 ```postgres.js```를 아래와 같이 수정 
```js
module.exports = fp(async function (fastify, opts) {
fastify.register(require('@fastify/postgres'), {
connectionString: `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}}`
})
```
---
## CRUD 구현
### 쇼핑몰 요구사항
- [✔] 사용자는 모든 상품을 조회할 수 있다
- [✔] 사용자는 특정 분류의 상품을 조회할 수 있다(상품분류, 브랜드명, 가격, 상품명) 
- [✔] 사용자의 타입이 판매자인 경우 자신의 상품을 등록할 수 있다 
- [✔] 사용자는 상품을 장바구니에 담을 수 있다
- [✔] 사용자는 자신의 장바구니를 조회할 수 있다
- [✔] 사용자는 자신의 장바구니에 있는 상품의 수량을 변경시킬 수 있다
- [✔] 사용자는 상품을 자신의 장바구니에서 제외할 수 있다




