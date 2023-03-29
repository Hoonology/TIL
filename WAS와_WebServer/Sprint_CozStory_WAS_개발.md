# Sprint CozStory WAS 개발
# INDEX
- [CozStory API](#cozstory-api)
- [요구사항](#요구사항)
- [Getting Started](#getting-started)
- [서버 코드 작성](#서버-코드-작성)
    - [READ](#read)
    - [WRITE](#write)
    - [DELETE](#delete)
    - [UPDATE](#update)

---

<br>
<br>

# CozStory API 
Restful한 API 링크 : [CozStory API](https://app.swaggerhub.com/apis-docs/hoyonglee/cozstory-was/1.0.2#/)  

<br>

# 요구사항
- 프레임워크인 fastify를 이용해 API 서버를 작성합니다.
- CosStory API 문서 및 fastfiy 공식 문서를 참고해서, 요청에 따른 응답을 구현합니다.
- 잘 작성되었는지를 확인하기 위해 테스트를 실행하고, 모든 테스트케이스를 통과해야 합니다.
- 낯선 구조를 가진 코드를 이해하고, 각 디렉토리와 파일이 어떤 구조로 짜여져있는지 이해합니다.
- CozStory의 API 서버가 가진 한계를 이해하고, 영속적으로 데이터를 저장하려면 어떻게 접근해야 하는지 고민해봅니다.

<br>

# Getting Started
- sprint-cozstory-was 스프린트 레포지토리를 통해 소스코드를 클론합니다.
- ```npm install``` 명령어로 서버 폴더에 필요한 모듈을 설치합니다.
- ```npm start``` 명령어로 Fastify 구성에 지정된 기본 포트에서 들어오는 요청 수신 ( localhost:3000 )
- ```package.json```을 참고해, 서버를 어떻게 실행해야 하는지 파악합니다.
- 디렉토리 구조를 파악하고, 각 디렉토리와 파일이 어떤 역할을 하는지 이해해봅니다.
- npm test를 통해 테스트케이스를 확인하고, API에 맞는 CRUD 작업을 위한 서버 코드를 작성하여 테스트를 통과합니다.
- 테스트를 통과하고 난 다음에는 npm run dev 또는 npm start 를 통해 서버를 시작하고, 앞서 nginx 웹서버를 통해 호스팅한 http://localhost:10024에 접속해 기능이 잘 작동되는지 확인합니다.

<br>

## 서버 코드 작성
```npm test``` 시, 
### READ
   - ```GET /article``` 요청은 이미 구현 돼있어서 테스트 통과   

```json
'use strict'

const { readAll, readOne } = require('../../model')

module.exports = async function (app, opts) {
app.get('/', async function (request, reply) {
    const result = await readAll()

    reply
    .code(200)
    .header('Content-type', 'application/json')
    .send(result)
})
```

   위 ```read.js```의 npm test 결과는 아래와 같음  
    
```bash
test/routes/read.test.js
GET /article
    ✓ should be equivalent
```

- ```GET /article:id``` 요청을 구현해보자
    - <u>```GET /article/:id``` 요청 시 id에 해당하는 글이 없는 경우의 테스트가 통과되지 않았다.</u>
```json
    app.get('/:id', async function (request, reply) {
const id = request.params.id;
const result = await readOne( /* TODO: 여기에 필요한 값을 넣습니다 */id );

if(result) {
    // TODO: 여기에 필요한 응답을 구현합니다.
    reply
    .code(200)
    .header('Content-type', 'application/json')
    .send(result)
}
else {
    reply
    .code(404)
    .header('Content-type', 'application/json')
    .send({ error: 'Article not found' });
    }
})
}
```
<br>

### WRITE
```routes/article/create.js```
- API 문서 내용 : ```POST /article``` 안에 두가지 응답( 201, 400 )이 있다고 한다. 상황에 맞는 응답을 어떤식으로 전달해야하는지 써보자
### DELETE
```routes/article/delete.js```
### UPDATE
```routes/article/update.js```
<br>

> 위 CRUD의 내용을 구현 후 ```model/index.js``` 에 작성된 코드를 이해한다.