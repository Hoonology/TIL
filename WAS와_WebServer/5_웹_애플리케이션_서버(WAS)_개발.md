# Mini WAS 개발 Hands-on
# 목표
- Express를 이용해 Hello World가 출력되는 서버를 작성하며, 기본적인 서버의 구조를 이해합니다.
- 주어진 API 문서에 작성된 조건에 따른 서버를 작성합니다.
- 대소문자 변환하는 기능을 수행하는 서버를 작성하며 다음과 같은 개념을 학습 합니다.
    - Routing의 개념을 이해하고, 메서드와 URL에 따라 분기(Routing)합니다.
    - 클라이언트 요청을 처리하는 비지니스 로직을 작성하고 처리한 데이터를 응답으로 보냅니다.
    - CORS의 개념을 이해하며, 서버에 적용할 수 있어야 합니다.

<br>
<br>

# INDEX
- [Getting Started](#getting-started)
    - [1. Express 설치하기](#1-express-설치httpsexpressjscomkostarterinstallinghtml하기)
    - [2. 간단한 서버 만들기](#2-간단한-서버-만들기)
        - [앱 실행](#앱-실행)
        - [app.js 코드 의미](#appjs-코드-의미)
            - [require 모듈로더, express() 함수, port](#require-모듈로더-express-함수-port)
            - [get 메소드, '/', req, res, res.send()](#get메소드--req-res-ressend)
            - [app.listen 메소드](#applisten-메소드)
    - [3. Mini Node Server 만들기](#3-mini-node-server-만들기)
        - [Getting Started Mini - Node Server](#getting-startedmininodeserver)
          - [Mini Node Server API](#mini-node-server-api)
          - [Mini Node Server 서버작성](#mini-node-server-서버-작성)
          - [CORS 적용](#cors-적용)
          - [문자열을 대문자로 만들어 응답하기](#문자열을-대문자로-만들어-응답하기)
          - [확인하기](#확인하기)
            - [Client](#client)
            - [Server](#server)
          - [문제 발생](#문제-발생)
          - [문제 해결](#문제-해결)
---

<br>
<br>

# Getting Started

## 1. [Express 설치](https://expressjs.com/ko/starter/installing.html)하기
```bash 
mkdir myapp  
cd myapp
```
```bash
npm init
```

```entry point: (index.js)``` 기본 파일 이름 설정을 할 수 있다.   그냥 enter 누르면 index.js로 만들어짐

enter를 계속 치면 ```pacakge.json``` 파일이 생성된다.  
<br>

myapp 디렉토리에 Express 설치 후 종속 항목 목록에 저장
```bash
npm install express --save
```

![Pic](/WAS와_WebServer/assets/5_웹_애플리케이션_서버(WAS)_개발/npm_save.png)  

Express를 임시로 설치하고 종속 항목 목록에 추가하지 않으려면, --save 옵션 생략 !

```bash
npm install express 
```

<br>
<br>

## 2. 간단한 서버 만들기
myapp 디렉토리에 app.js 파일 작성 후 아래 코드 추가  
```nano app.js```

```json
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
앱은 서버를 시작하며, 3000번 포트에서 연결을 청취한다.  
앱은 루트 URL(/) 또는 라우트에 대한 요청에 “Hello World!”로 응답합니다.  
다른 모든 경로에 대해서는 404 Not Found로 응답한다.

- 터미널에 ```node app.js``` 를 입력하면 Example app listening on port 3001 이라고 나온다. ( 위에 포트 3000으로 했는데, 에러 떠서 왜 그런가 보니깐 다른 곳(nginx 등에서 3000번 포트로 지정해논게 있어서 충돌 뜬듯.. 그래서 3001로 바꾼 다음, 실행하니 저렇게 나왔다.)) -> localhost:3001 들어가면 Hello World! 뜬다.
 

### 앱 실행
```bash
node app.js
```
![pic](/WAS와_WebServer/assets/5_웹_애플리케이션_서버(WAS)_개발/node.png)

이후 브라우저에서 http://localhost:3000/을 로드하여 결과물을 확인

![pic](/WAS와_WebServer/assets/5_웹_애플리케이션_서버(WAS)_개발/3000.png)

### app.js 코드 의미
#### require 모듈로더, express() 함수, port
``` json
const express = require('express')
   const app = express()
   const port = 3000
```
<u>require 모듈로더</u>를 통해 http 서버를 생성하기 위해 <u>express 패키지 모듈</u>을 불러온다.  
- Express 서버를 생성하기 위해서 express 함수를 호출하여 app 변수에 할당
- 서버의 port(포트)번호를 지정, 해당 app에는 express() 함수를 통해 만들어진 객체가 할당

<br>

#### ```get메소드```, ```'/'```, ```req```, ```res```, ```res.send()```
```json
   app.get('/', (req, res) => {
     res.send('Hello World!')
   })
```
해당 코드는 HTTP 요청 중, 메소드가 get, 엔드포인트(Endpoint)가 /인 요청을 또 다른 함수로 처리하는 비지니스 로직이다.
- 요청에 대한 정보는 ****req 객체****에 담는다.
- 서버에서 보내야 하는 답변에 대한 정보는 ****res 객체****에 담는다.
- ```res.send()``` 를 통해 원하는 데이터를 클라이언트에 보낼 수 있다.  

현재 이 코드에서는 Hello World! 라는 문구를 응답으로 보내고 있다.

<br>

#### app.listen 메소드
```json
   app.listen(port, () => {
     console.log(`Example app listening at http://localhost:${port}`)
   })
```

app 객체의 listen 메소드 사용
- 기본형태 : ```app.listen(port, callback)```
- 터미널에 ```Node app.js``` 를 입력하면 Example app listening on port 3001 이라고 나온다. ( 위에 포트 3000으로 했는데, 에러 떠서 왜 그런가 보니깐 다른 곳(nginx 등에서 3000번 포트로 지정해논게 있어서 충돌 뜬듯.. 그래서 3001로 바꾼 다음, 실행하니 저렇게 나왔다.)) -> localhost:3001 들어가면 Hello World! 뜬다.



<br>
<br>

## 3. Mini Node Server 만들기
### Getting Started_MiniNodeServer
- 제공 받은 레포지토리 포크 후 클론
- ```git add``` , ```git commit```
- 내 컴퓨터의 master 브랜치로 push
- 내 레파지토리에 가서 Pull request
- base 레파지토리의 master 브랜치로 PR을 보내 과제 제출


### Mini Node Server API

| Endpoint(URL) | Method       |       기능      |
| ------------ | ------------- |  ------------- |
| /lower | POST  |  문자열을 소문자로 만들어 응답      |
| /upper Cell | POST  | 문자열을 대문자로 만들어 응답  |


요구사항
- POST에 문자열을 담아 요청을 보낼 때는 HTTP 메시지의 body(payload)를 이용합니다.
- 서버는 요청에 따른 적절한 응답을 클라이언트로 보내야 합니다.
- 서버는 POST 요청 이외의 다른 모든 요청에 대하여, 클라이언트에 잘못된 요청이라고 알려줄 수 있어야 합니다.
- CORS 관련 설정을 적용해야 합니다.

### Mini Node Server 서버 작성
Hello World 서버를 작성 했을 때 사용한 기본설정 외, 추가된 3개의 부분이 있다.

![pic](/WAS와_WebServer/assets/5_웹_애플리케이션_서버(WAS)_개발/3부분.png)

<br>

### CORS 적용
CORS : 서로 다른 출처(protocol, host, port) 간의 리소스 공유(Cross-Origin Resource Sharing)를 위한 정책을 의미

```server-express.js``` 파일에 보면   
```const cors = require('cors')```라고 적힌 것을 확인할 수 있다.  

일단, 함수를 파일에서 사용할 수 있도록 불러온다.  
그리고 ```app.use(cors())``` 를 작성하면, CORS 관련 복잡한 설정을 따로 하지 않고, cors 함수를 통해 처리할 수 있습니다.
<br>

### 문자열을 대문자로 만들어 응답하기
- <u>API 문서 내용대로</u>, ```/upper``` 라는 엔드포인트의 요청을 처리하는 코드 작성  
- 위의 Hello World 예시에서는 GET 요청일 경우 ```app.get(path, callback)```의 형태로 코드를 작성 하였기 때문에, 이와 비슷하게 작성한다.

```bash
app.post('/upper', (req, res) => {
	let data = req.body.toUpperCase();
	res.json(data);
})
```
먼저 요청은 모두 POST 메소드를 사용하기 때문에 ```app.post()```형태의 메소드를 사용하고, 여기에 각각의 요청은 엔드포인트에 따라 다르게 들어온다. 따라서 엔드포인트 별로 분기, 라우팅진행!  
여기서는 일단 ```/upper``` 로 라우팅을 하였고, 뒤이어 callback 함수로 들어온 문자열을 대문자로 변경하는 자바스크립트 메소드를 사용했다.  

> express가 JSON 미들웨어를 사용하므로 모든 요청을 JSON 형태로 받기 때문에, body를 보낼 때엔 ```"test string"``` 처럼 꼭 따옴표가 붙고 보내야한다.  
=> Content-Type 은 ```application/json```

<br>

### 확인하기
#### Client
```bash
npx serve ./client -l 3000
```
#### Server
``` bash
node server/server-express.js
# 또는
npm start
```

---

### 문제 발생
1. [Client]  
  ```npx serve ./client -l 3000``` 명령을 사용하면 터미널에 주소가 2가지가 나오고 그 중 하나를 선택하여 브라우저를 열면 localhost:3000에서  
   toUpperCase랑 toLowerCase 요청 및 응답하는 페이지가 나와야하데 안 나온다.  

    [문제 해결]
    ```json
    app.use(cors());
    app.use(express.json({"strict":false}));

    app.get('/', (req, res) => {
      res.send("Hello World!")
    })

    // TODO: 아래에 '/upper'로 들어오는 요청을 처리하는 코드를 작성하세요.

    app.post('/upper', (req, res) => {
      let data = req.body.toUpperCase();
      res.json(data);
    })


    // TODO: 아래에 '/lower'로 들어오는 요청을 처리하는 코드를 작성하세요.

    app.post('/lower', (req, res) => {
            let data = req.body.toLowerCase();
            res.json(data);



    app.listen(port, () => {
      console.log(`Server listening on http://${ip}:${port}`)
    })
    ```

    해결은 아니고... 또 다른 문제..   
    req 에 따른 res가 안 나온다 ...



  
2. [Server]   
```node server/server-express.js``` 혹은 ```npm start``` 명령을 사용하고,  
localhost:4000 들어가면 Hello World! 라고 떠야하는데, 사이트에 연결할 수 없다고 나온다.   

 ### 문제 해결
  내가 바보다.  
    명령어 ```npx serve ./client -l 3000``` 와 ```npm start```  를  
    ```/sprint-mini-node-server/server```  혹은 ```/sprint-mini-node-server/client``` 디렉토리에 들어가서 입력하면 안되고,  
    상위 디렉토리인 ```/sprint-mini-node-server/``` 에 가서 (package.js 파일이 있는 디렉토리)  
    ```npx serve ./client -l 3000``` 와 ```npm start``` 를 입력하니깐   
    localhost:3000 과 localhost:4000 에서 구동된다고 나온다.  
    ![pic](/WAS와_WebServer/assets/5_웹_애플리케이션_서버(WAS)_개발/localhost4000.png)
    [클라이언트] 요청, 응답 창이 뜬다 !
    ![4000](/WAS와_WebServer/assets/5_웹_애플리케이션_서버(WAS)_개발/3000s.png)  
    [서버] Hello World! 가 뜬다 !  
    ![4000](/WAS와_WebServer/assets/5_웹_애플리케이션_서버(WAS)_개발/4000.png)  

---



