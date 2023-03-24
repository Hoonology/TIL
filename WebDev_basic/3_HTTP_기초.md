# 3. HTTP 기초

# ****HTTP Messages****

### **HTTP** ( HyperText Transfer Protocol )

---

HTML과 같은 문서를 전송하기 위한 [Application Layer](https://en.wikipedia.org/wiki/Application_layer) 프로토콜

- 웹 브라우저와 웹 서버의 소통을 위해 디자인
- HTTP messages 양식에 맞춰 요청을 보내면, 서버도 HTTP messages 양식에 맞춰 응답
- HTTP는 특정 상태를 유지하지 않는 특징
    - 노트북 매장에서 내가 서버(판매자)로 일하고 있을 때, 손님이 와서 노트북 얼마에요 ? 라고 물어보면 나는 얼마입니다. 대답 할 수 있다. 그 뒤 흐름이 끊기고 와서 손님이 두개는 얼마에요? 물어볼 때 이미 흐름이 끊겼기 때문에 대답을 할 수 없다 !
    - **Stateless**
        
        Stateless는 말 그대로 상태를 가지지 않는다는 뜻입니다. HTTP로 클라이언트와 서버가 통신을 주고 받는 과정에서, HTTP가 클라이언트나 서버의 상태를 확인하지 않습니다. 사용자는 쇼핑몰에 로그인하거나 상품을 클릭해서 상세 화면으로 이동하고, 상품을 카트에 담거나 로그아웃을 할 수도 있습니다. 클라이언트에서 발생한 이런 모든 상태를 HTTP 통신이 추적하지 않습니다. 만약 쇼핑몰에서 카트에 담기 버튼을 눌렀을 때, 카트에 담긴 상품 정보(상태)를 저장해둬야 합니다. 그러나 HTTP는 통신 규약일 뿐이므로, 상태를 저장하지 않습니다. 따라서, 필요에 따라 다른 방법(쿠키-세션, API 등)을 통해 상태를 확인할 수 있습니다.
        

## HTTP Method

---

[2nd 발표](2nd%20%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%20186b2f582e674f45b2c96c080eec96ef.md)

상세한 설명이 있음

- 주요 메소드
    - **GET :** 리소스 조회, 요청
    - **POST:**  요청 데이터 처리, 주로 등록에 사용 ( **고유식별자**를 이용해 새 리소스를 만들고 해당 식별자를 응답으로 클라이언트에 반환 )
        - 데이터를 서버로 보내는 데 사용
        - 멱등성은 아니다. 
        ( 멱등성 : 여러 개의 동일한 요청을 할 수 있고 결과가 동일하게 유지 되는 작업의 속성 )
        - POST 메서드는 동일한 POST 요청이 서버에 대해 생성될 때마다 새 리소스를 생성하거나 기존 리소스를 업데이트하여 결과가 달라지기 때문에 멱등성이 아닙니다. 따라서 각 요청이 다른 결과를 초래할 수 있으므로 여러 POST 요청을 할 때 주의하는 것이 중요합니다.
    
    - **PUT :** 리소스를 대체( 덮어쓰기 - **멱등성** ), 해당 리소스가 없으면 생성
    - **PATCH :** 리소스 부분 변경 (PUT이 전체 변경, PATCH는 일부 변경)
    - **DELETE :** 리소스 삭제

POST와 PUT의 주요 차이점은 POST는 새 리소스를 만드는 데 사용되는 반면 PUT은 기존 리소스를 업데이트하는 데 사용된다는 것입니다. 또한 POST 요청은 서버에서 생성한 ID로 새 리소스를 생성할 수 있는 반면 PUT 요청은 클라이언트가 업데이트할 리소스의 ID를 지정하도록 요구합니다.

- 기타 메소드
    - **HEAD :** GET과 동일하지만 메시지 부분(body 부분)을 제외하고, 상태 줄과 헤더만 반환
    - **OPTIONS :** 대상 리소스에 대한 통신 가능 옵션(메서드)을 설명(주로 CORS에서 사용)
    - **CONNECT :** 대상 자원으로 식별되는 서버에 대한 터널을 설정
    - **TRACE :** 대상 리소스에 대한 경로를 따라 메시지 루프백 테스트를 수행

[[WEB] 🌐 HTTP 메서드 종류 & 요청 흐름 💯 총정리](https://inpa.tistory.com/entry/WEB-🌐-HTTP-메서드-종류-통신-과정-💯-총정리#http_method_종류)

### CRUD와 HTTP 메소드

---

- Create: POST method
    - POST 메서드는 서버에 새 리소스를 만드는 데 사용됩니다. POST 요청에는 서버에 저장되는 새 리소스를 나타내는 페이로드가 포함되어 있습니다.
    - POST는 새 리소스를 만드는 데 사용
    - POST 요청은 서버에서 생성한 ID로 새 리소스를 생성할 수 있는 반면 PUT 요청은 클라이언트가 업데이트할 리소스의 ID를 지정하도록 요구합니다.
- Read: GET method
- Update: PUT or PATCH method
    - PUT 메서드는 서버의 기존 리소스를 업데이트하는 데 사용됩니다. PUT 요청에는 서버의 기존 리소스를 대체하는 업데이트된 리소스를 나타내는 페이로드가 포함되어 있습니다.
    - PATCH 방법은 서버의 기존 리소스를 업데이트하는 데 사용된다는 점에서 PUT과 유사합니다. 그러나 PATCH 요청에는 전체 리소스 페이로드가 아닌 리소스에 대한 변경 사항만 포함됩니다.
- Delete: DELETE method

---

## **HTTP messages**

---

- 요청(Requests)
- 응답(Responses)

1. start line : start line에는 요청이나 응답의 상태를 나타냅니다. 항상 첫 번째 줄에 위치합니다. 응답에서는 status line이라고 부릅니다.
2. HTTP headers : 요청을 지정하거나, 메시지에 포함된 본문을 설명하는 헤더의 집합입니다.
3. empty line : 헤더와 본문을 구분하는 빈 줄이 있습니다.
4. body : 요청과 관련된 데이터나 응답과 관련된 데이터 또는 문서를 포함합니다. 요청과 응답의 유형에 따라 선택적으로 사용합니다.

![Untitled](3%20HTTP%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba81a96ac3064f9996d26d13745dc618/Untitled.png)

### 요청( Requests )

---

### **Start line**

클라이언트가 서버에 보내는 메시지

- origin 형식 : `?`와 쿼리 문자열이 붙는 절대 경로입니다. POST, GET, HEAD, OPTIONS 등의 method와 함께 사용합니다.
    
    `POST / HTTP 1.1`
    
    `GET /background.png HTTP/1.0`
    
    `HEAD /test.html?query=alibaba HTTP/1.1`
    
    `OPTIONS /anypage.html HTTP/1.0`
    
- absolute 형식 : 완전한 URL 형식으로, 프록시에 연결하는 경우 대부분 GET method와 함께 사용합니다.
`GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1`
- authority 형식 : 도메인 이름과 포트 번호로 이루어진 URL의 authority component 입니다. HTTP 터널을 구축하는 경우, `CONNECT`와 함께 사용할 수 있습니다.
`CONNECT developer.mozilla.org:80 HTTP/1.1`
- asterisk 형식 : `OPTIONS` 와 함께 별표(`*`)하나로 서버 전체를 표현합니다.
`OPTIONS * HTTP/1.1`

### **Headers**

헤더 이름(대소문자 구분이 없는 문자열), 콜론( : ), 값을 입력합니다. 값은 헤더에 따라 다릅니다. 여러 종류의 헤더가 있고, 다음과 같이 그룹을 나눌 수 있습니다.

- General headers : 메시지 전체에 적용되는 헤더로, body를 통해 전송되는 데이터와는 관련이 없는 헤더입니다.
- Request headers : fetch를 통해 가져올 리소스나 클라이언트 자체에 대한 자세한 정보를 포함하는 헤더를 의미합니다. User-Agent, Accept-Type, Accept-Language과 같은 헤더는 요청을 보다 구체화합니다. Referer처럼 컨텍스트를 제공하거나 If-None과 같이 조건에 따라 제약을 추가할 수 있습니다.
- Representation headers : 이전에는 Entity headers로 불렀으며, body에 담긴 리소스의 정보(컨텐츠 길이, MIME 타입 등)를 포함하는 헤더입니다.
    
    

### **Body**

HTTP messages 구조의 마지막에 위치

- Single-resource bodies(단일-리소스 본문) : 헤더 두 개(Content-Type과 Content-Length)로 정의된 단일 파일로 구성됩니다.
- Multiple-resource bodies(다중-리소스 본문) : 여러 파트로 구성된 본문에서는 각 파트마다 다른 정보를 지닙니다. 보통 [HTML form](https://developer.mozilla.org/en-US/docs/Learn/Forms)과 관련이 있습니다.

### 응답( Responses )

---

### **Status line**

응답의 첫 줄은 Status line이라고 부르며, 다음의 정보를 포함합니다.

1. 현재 프로토콜의 버전(HTTP/1.1)
2. 상태 코드 - 요청의 결과를 나타냅니다. (200, 302, 404 등)
3. 상태 텍스트 - 상태 코드에 대한 설명

Status line은 `HTTP/1.1 404 Not Found.` 처럼 생겼습니다.

### **Headers**

응답에 들어가는 HTTP headers는 요청 헤더와 동일한 구조를 가지고 있습니다. 대소문자 구분 없는 문자열과 콜론(`:`), 값을 입력합니다. 값은 헤더에 따라 다릅니다. 요청의 헤더와 마찬가지로 몇 그룹으로 나눌 수 있습니다.

- General headers : 메시지 전체에 적용되는 헤더로, body를 통해 전송되는 데이터와는 관련이 없는 헤더입니다.
- Response headers : 위치 또는 서버 자체에 대한 정보(이름, 버전 등)와 같이 응답에 대한 부가적인 정보를 갖는 헤더로, Vary, Accept-Ranges와 같이 상태 줄에 넣기에는 공간이 부족했던 추가 정보를 제공합니다.
- Representation headers : 이전에는 Entity headers로 불렀으며, body에 담긴 리소스의 정보(컨텐츠 길이, MIME 타입 등)를 포함하는 헤더입니다.

### **Body**

응답의 본문은 HTTP messages 구조의 마지막에 위치합니다. 모든 응답에 body가 필요하지는 않습니다. 201, 204와 같은 상태 코드를 가지는 응답에는 본문이 필요하지 않습니다. 응답의 body는 다음과 같이 두 종류로 나눌 수 있습니다.

- Single-resource bodies(단일-리소스 본문) :
    - 길이가 알려진 단일-리소스 본문은 두 개의 헤더(Content-Type, Content-Length)로 정의합니다.
    - 길이를 모르는 단일 파일로 구성된 단일-리소스 본문은 Transfer-Encoding이 `chunked` 로 설정되어 있으며, 파일은 chunk로 나뉘어 인코딩되어 있습니다.
- Multiple-resource bodies(다중-리소스 본문) : 서로 다른 정보를 담고 있는 body입니다.

---

![Untitled](3%20HTTP%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba81a96ac3064f9996d26d13745dc618/Untitled%201.png)

![Untitled](3%20HTTP%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba81a96ac3064f9996d26d13745dc618/Untitled%202.png)

---

## HTTP 상태 코드

---

[HTTP 상태 코드 - HTTP | MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)

HTTP 응답 코드는 클라이언트의 요청에 대한 서버의 응답 상태를 나타내는 데 사용됩니다. 200대의 코드는 성공적인 요청/응답을 나타내고 300대의 코드는 일반적으로 일종의 리디렉션을 나타내며 400대 및 500대의 코드는 각각 클라이언트 또는 서버 오류를 나타냅니다.

각 코드의 구체적인 의미는 사용되는 컨텍스트에 따라 다를 수 있으며 개발자가 서버의 응답을 적절하게 처리하기 위해서는 각 코드의 의미를 이해하는 것이 중요합니다.

- 200 : OK, 성공적으로 응답을 마침
- 302 : Found, 리다이렉트할 URL을 확인함
- 404 : Not Found 서버가 요청받은 리소스를 찾을 수 없다는 것을 의미
- 500 : Internal Server Error, 서버에서 에러가 발생함

[mini Quiz](3%20HTTP%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba81a96ac3064f9996d26d13745dc618/mini%20Quiz%2034ae401a12d041fbba88eb8d97378191.md)