ㅊ하세요.
![사진](/HTTP/assets/발표/http-question-1.png)

요청 및 응답 형식과 헤더를 포함하여 HTTP의 기본 구조를 보여줍니다.


- HTTP 요청 구조:
HTTP 요청은 요청 라인, 헤더 및 메시지 본문의 세 가지 주요 부분으로 구성됩니다. 요청 라인에는 HTTP 메서드, 요청 중인 리소스의 URL 및 HTTP 버전이 포함됩니다. 헤더 섹션에는 사용자 에이전트, 콘텐츠 유형 및 인증과 같은 요청에 대한 추가 정보가 포함되어 있습니다. 마지막으로 메시지 본문에는 양식 데이터 또는 파일과 같이 서버로 전송되는 데이터가 포함됩니다.


- HTTP 응답 구조:
HTTP 응답도 상태 표시줄, 헤더 및 메시지 본문의 세 가지 주요 부분으로 구성됩니다. 상태 표시줄에는 HTTP 버전, 상태 코드 및 상태 코드를 설명하는 간단한 메시지가 포함되어 있습니다. 헤더 섹션에는 콘텐츠 유형 및 응답을 생성한 서버와 같은 응답에 대한 추가 정보가 포함되어 있습니다. 마지막으로 메시지 본문에는 HTML 코드나 이미지와 같이 클라이언트로 다시 전송되는 데이터가 포함됩니다.


- HTTP 헤더:
HTTP 헤더는 요청 또는 응답에 대한 추가 정보를 전송하는 데 사용됩니다. 콜론(:)으로 구분된 키-값 쌍입니다. 일반적인 요청 헤더에는 Accept-Language, User-Agent 및 Authorization이 포함됩니다. 일반적인 응답 헤더에는 Content-Type, Content-Length 및 Server가 포함됩니다.


전반적으로 이미지는 요청 및 응답 형식과 헤더를 포함하여 HTTP의 기본 구조에 대한 명확한 개요를 제공합니다.

## General
- Request URL : https://toss.im/ 액세스 중인 웹 주소가 https://toss.im/
- Request Method : GET 방식으로 요청
- Status Code : 200 OK, 서버가 요청을 성공적으로 처리했으며 상태 코드 200(성공 표시)과 함께 요청된 리소스를 다시 보내고 있음을 나타낸다.
- Remote Address : 211.155.96.201:443 
    - 원격 주소 211.155.96.201:443은 네트워크 통신에 사용되는 IP 주소와 포트 번호 조합입니다. 이 경우 IP 주소는 211.155.96.201이고 포트 번호는 443입니다.
- Referrer Policy : strict-origin-when-cross-origin  
    한 사이트에서 다른 사이트로 이동할 때 리퍼러 헤더가 전송되는 방식을 제어하기 위해 웹 개발자가 사용하는 설정입니다.


    이 정책에서 리퍼러 헤더는 보안(HTTPS) 출처에서 다른 보안 출처로 이동할 때만 전송됩니다. 비보안(HTTP) 원본에서 보안 원본으로 탐색할 때 리퍼러 헤더가 전송되지 않습니다. 마찬가지로 보안 또는 비보안 출처에서 비보안 출처로 탐색할 때 리퍼러 헤더도 전송되지 않습니다.


    이 정책은 사이트 간에 공유되는 정보의 양을 제한하여 사용자의 개인 정보 및 보안을 보호하는 데 도움이 됩니다. 추적 또는 기타 악의적인 목적으로 사용될 수 있는 리퍼러 헤더를 통해 민감한 정보가 유출되는 것을 방지합니다.


    전반적으로 "strict-origin-when-cross-origin" 리퍼러 정책은 웹 개발자가 자신의 사이트에서 구현할 수 있는 좋은 보안 조치입니다.

## 요청

```GET /index.html HTTP/1.1``` 요청 라인으로 시작하는 요청 메시지  
클라이언트가 HTTP GET 메서드와 HTTP/1.1 프로토콜 버전을 사용하여 리소스 "index.html"을 요청하고 있음을 나타낸다.
- Host : 
- User-Agent : 
"Mozilla/5.0(Windows NT 10.0; Win64; x64) AppleWebKit/537.36(Gecko와 같은 KHTML) Chrome/58.0.3029.110 Safari/537.36"
- Accept : 클라이언트가 응답에서 수락할 내용의 유형 ```text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8```
- Accept-Language : 자연어 - 한국어(우선순위 1), 영어 
- Connection : 지속적인 연결을 유지하기 위한 ```keep-alive```


## 응답 
```HTTP/1.1 200 OK```로 시작하는 응답 메시지  
 서버가 요청을 성공적으로 처리했으며 상태 코드 200(성공 표시)과 함께 요청된 리소스를 다시 보내고 있음을 나타낸다.
 - Date : 응답이 생성된 날짜와 시간, 날짜 헤더의 값은 "Fri, 19 Mar 2021 20:27:12 GMT
 - Server : 응답을 생성한 서버 소프트웨어를 식별. 이 예에서 서버 헤더의 값은 "Apache/2.4.29(Ubuntu)"
 - Content-Type: text/html 또는 application/json과 같이 응답으로 반환되는 콘텐츠 유형, 이 예에서 Content-Type 헤더의 값은 "text/html; charset=UTF-8"
 - Content-Length: 응답으로 반환되는 콘텐츠의 길이. Content-Length 헤더의 값은 "1270"
