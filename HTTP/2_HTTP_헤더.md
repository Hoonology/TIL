# HTTP 헤더

# INDEX
- [HTTP 주요 헤더](#http-주요-헤더)
    - [Request에서 사용되는 헤더](#request에서-사용되는-헤더)
    - [Response에서 사용되는 헤더](#response에서-사용되는-헤더)
- [표현 헤더(Representation Headers)](#표현-헤더)
- [콘텐츠 협상 헤더](#콘텐츠-협상-헤더)
- miniQuiz

---
</br>
</br>



# HTTP 주요 헤더 
![HTTP헤더](/HTTP/assets/2_HTTP_헤더/HTTP.png)

### Request에서 사용되는 헤더
- From : 유저 에이전트의 이메일 정보
    - 일반적으로 사용하지 않음
    - 검색 엔진에서 주로 사용
    - **요청에서 사용**

- Regerer : 이전 웹 페이지 주소
    - A to B 로 갈 경우 B 를 요청할 때, ```Referer : A```를 포함해서 요청
    - ```Referer``` 를 사용하면 유입경로 수집 가능
    - **요청에서 사용**

- User - Agent : 유저 에이전트 앱 정보
    - 클라이언트의 애플리케이션 정보
    - 통계 정보
    - 어떤 종류의 브라우저 안의 장애 발생 파악
    - **요청에서 사용**

- Host : 요청한 호스트 정보(도메인)
    - 필수 헤더
    - 하나의 서버가 여러 도메인을 처리할 때 호스트 정보를 명시
    - 하나의 IP 주소에 여러 도메인이 적용되어 있을 때 호스트 정보를 명시하기 위해 사용
    - **요청에서 사용**
-  Origin : 서버로 POST 요청 보낼 때 요청을 시작한 주소를 나타냄, 요청을 시작한 페이지의 출처(즉, 도메인 및 프로토콜)를 지정
    - 웹 브라우저에서 보낸 요청에 포함된 표준 HTTP 헤더
    - 웹 페이지가 다른 도메인을 요청할 때 브라우저는 요청에 Origin 헤더를 포함
        - 서버는 Origin 헤더를 사용하여 요청을 허용할지 여부를 결정
    - 요청 보낸 주소와 받는 주소가 일치해야함 ( 아닐 경우 CORS 에러 발생 )
    - 잠재적인 ```CSRF``` 공격으로 요청을 거부, 여러 도메인에 걸쳐 리소스에 대한 제어된 액세스를 가능하게 하는 중요한 보안 기능
- Authorization : 인증 토큰, 클라이언트가 보호된 리소스에 액세스할 수 있도록 요청에 대한 인증 자격 증명
    - 예시) Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l

    <br>

## Response에서 사용되는 헤더
- Server : 요청을 서리하는 ORIGIN 서버의 소프트웨어 정보
    - 응답에서 사용
    - 예시)  
      Server: Apache/2.2.22 (Debian)  
      Server: nginx

- Data : 메시지가 발생한 날짜와 시간
    - 응답에서 사용
    - 예시)  
    Date: Tue, 15 Nov 1994 08:12:31 GMT

- Location : 페이지 리다이렉션
    - 웹 브라우저는 3xx 응답의 결과에 Location 헤더가 있으면, Location 위치로 리다이렉트(자동 이동)
    - 201 : Location 값은 요청에 의해 생성된 리소스 URI
    - 3xx : location 값은 요청을 자동으로 리다이렉션 하기 위한 대상 리소스
- Allow : 허용 가능한 HTTP 메소드
    - 405에서 응답에 포함
    - 예시)         
      Allow: GET, HEAD, PUT
- Retry-After : 유저 에이전트가 다음 요청을 하기 까지 기다려야하는  시간
    - 503 : 서비스가 언제까지 불능인지 알려줌
    - 예시)  
      Retry-After: Fri, 31 Dec 2020 23:59:59 GMT(날짜 표기)  
      Retry-After: 120(초 단위 표기)     

[List of HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)


<br>
<br>
<br>

# 표현 헤더( Representation Headers)
HTTP 메시지 : **헤더 - 바디**로 구분 
- 바디 : 데이터 메시지 본문을 통해 표현 데이터를 전달( 페이로드 : 전달 )
- 헤더 : ```<field-name> : <field-value>```
    - Host : www.google.com - Content-type : text/html;charset = UFT-8
    - Content-Type : 표현 데이터의 형식  
    ![pic1](/HTTP/assets/2_HTTP_헤더/contentType.png)
     
    - Content-Encoding : 표현 데이터의 압축 방식  
    ![pic2](/HTTP/assets/2_HTTP_헤더/contentEncoding.png)

    - Content-Language : 표현 데이터의 자연 언어  
    ![pic3](/HTTP/assets/2_HTTP_헤더/contentLanguage.png)

    - Content-Length : 표현 데이터의 길이  
        - Transfer-Encoding(전송 코딩)을 사용하면 Content-Length를 사용하면 안됨  

        ![pic4](/HTTP/assets/2_HTTP_헤더/contentLength.png)

    - **표현 헤더는 요청과 응답에 둘다 사용한다.**


</br>
</br>
</br>

# 콘텐츠 협상 헤더 - 요청시에만 사용 
콘텐츠 협상 : 클라이언트가 선호하는 표현 요청
- Accept : 클라이언트가 선호하는 미디어 타입 전달 
- Accept-Charset : 클라이언트가 선호하는 문자 인코딩 
- Accept-Encoding : 클라이언트가 선호하는 압축 인코딩
- Accept-Language : 클라이언트가 선호하는 자연언어

``` bash
(한국어 브라우저) GET/event 

-> (다중 언어 지원 서버) - 기본 영어(en), 한국어 지원(ko)
Content-Language : en = Hello
```

```bash
(한국어 브라우저)
GET/event -Accept-Language:ko 

-> (다중 언어 지원 서버) - 기본 독일어(de), 영어 지원(en)
Content-Language : de = Hallo
```
위 코드의 경우와 같이 한국어가 지원이 안돼서 영어로라도 협상을 원한다면, 
```bash
GET /event
Accept-Language : kor-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
```
- Quality Values(q) 값 사용
- 0~1, 클수록 높은 우선 순위
- 생략하는 경우 : 1
- ```Accept-Language : ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7```
    - ko-KR;q=1(q생략)
    - ko;q=0.9
    - en-US;q=0.8
    - en:q=0.7

1순위인 한국어를 서버에서는 지원하지 않지만, 2순위인 영어를 지원하기에 서버는 우선순위에 있는 영어를 독일어 보다 클라이언트가 선호하기에 영어로 응답을 주게 된다.

```bash
GET/event -Accept-Language:ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7

-> (다중 언어 지원 서버) - 기본 독일어(de), 영어 지원(en)
Content-Language : de = Hello