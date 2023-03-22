# HTTP 헤더

# INDEX
- [HTTP 주요 헤더](#http-주요-헤더)
    - [Request에서 사용되는 헤더](#request에서-사용되는-헤더)
    - [Response에서 사용되는 헤더](#response에서-사용되는-헤더)
- [표현 헤더(Representation Headers)](#표현-헤더)
- [콘텐츠 협상 헤더](#콘텐츠-협상-헤더)
- [miniQuiz](#miniquiz)

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
Accept-Language : ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
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
```

<br>

# miniQuiz
1. HTTP 헤더와 그에 대한 설명이 틀린 것을 고르시오. C


    A.
    Location : 페이지 리다이렉션


    B.
    Retry-After : 유저 에이전트가 다음 요청을 하기까지 기다려야 하는 시간


    **C.
    Content-Language: 표현 데이터의 프로그래밍 언어**


    D.
    Content-Type: 표현 데이터의 형식

    해설
    Content-Language는 표현 데이터의 자연 언어(e.g. 한국어)를 설명하는 헤더입니다.

<br>

2. HTTP 헤더를 통해 콘텐츠 협상을 할 때, 한국어, 영어, 일본어 순으로 우선순위가 적용될 수 있는 헤더를 모두 고르시오. A,B


    A. Accept-Language: ko,us;q=0.9,ja;q=0.8

    B. Accept-Language: ko;q=1,us;q=0.9,ja;q=0.8

    C. Accept-Language: ko,us;q=0.1,ja;q=0.2 
     
    
    해설
    우선순위는 0~1사이의 숫자로 표현하며 숫자가 클수록 더 높은 우선순위를 가집니다.

<br>

3. 다음 중 표현 헤더와 헤더를 설명하는 내용이 일치하지 않는 것을 고르시오. D


    A.
    Content-Type : 표현 데이터의 형식을 설명하며, 미디어 타입 및 문자 인코딩의 내용을 담고 있습니다.


    B.
    Content-Language : 표현 데이터의 자연 언어를 의미합니다.


    C.
    Content-Encoding : 표현 데이터를 압축하기 위해서 사용하며, 데이터를 전달하는 쪽에서 압축 후, 인코딩 헤더를 추가합니다.

    정답

    D.
    Content-Length : 표현 데이터의 길이를 의미하며, Transfer-Encoding와 함께 사용합니다.
    
    <br>

4. 다음 중 옳지 않은 것을 고르시오. D


    A.
    HTTP 헤더는 HTTP 전송에 필요한 모든 부가정보를 담기 위해 사용합니다.


    B.
    표현헤더는 요청, 응답 둘 다 사용합니다.


    C.
    Content-Type 헤더는 표현 데이터의 형식을 나타내며, 대표적으로는 application/json, Text/html 등이 있습니다.

    정답

    D.
    Content-Language 헤더는 표현 데이터의 길이를 의미합니다.
    - Content-Language 헤더는 표현 데이터의 자연언어를 의미합니다.


</br>

5. HTTP 주요 헤더와 헤더를 설명하는 내용이 일치하는 것을 모두 고르시오. ABCD

    A.
    Referer : 현재 요청된 페이지의 이전 웹 페이지 주소를 의미하며, 만약 링크를 타고 들어왔다면 해당 링크를 포함하고 있는 페이지의 주소가 이 헤더에 포함됩니다.



    B.
    User-Agent : 클라이언트의 애플리케이션 정보를 의미하며, 해당 애플리케이션, OS 등의 정보를 제공합니다.

  

    C.
    Host : 요청한 호스트 정보(도메인명)을 의미하며, 하나의 IP 주소에 여러 도메인이 적용되어 있을 때 호스트 정보를 명시하기 위해 사용합니다.



    D.
    Origin : 서버로 POST 요청을 보낼 때, 요청을 시작한 주소를 나타냅니다.

</br>

6. HTTP 주요 헤더와 헤더를 설명하는 내용이 일치하는 것을 모두 고르시오. ABCD



    A.
    Server : 요청을 처리하는 ORIGIN 서버의 소프트웨어 정보를 나타내며, 프록시 서버를 사용하는 경우, 프록시 서버의 정보를 나타내기도 합니다.



    B.
    Location : 리다이렉트할 페이지의 URL을 의미하며, 웹 브라우저는 3xx 응답의 결과에 Location 헤더가 있으면, Location 위치로 리다이렉트 합니다.



    C.
    Allow : 허용 가능한 HTTP 메서드를 의미합니다.



    D.
    Retry-After : 유저 에이전트가 다음 요청을 하기까지 기다려야 하는 시간을 의미하며, 503(Service Unavailable) 응답 코드와 함께 보내지면, 언제까지 기다려야 하는지 알 수 있습니다.

</br>

7. 콘텐츠 협상 헤더에 대한 설명으로 옳지 않은 것을 모두 고르시오. AC

    A.
    협상 헤더는 요청과 응답 둘 다 사용 가능합니다.


    B.
    협상 헤더에서는 원하는 콘텐츠에 대한 우선순위를 지정할 수 있습니다.

    

    C.
    Accept-Language: ko-KR,ko;q=0.9, en-US;q=0.8 일 경우, 영어를 1순위로 지원합니다.


    D.
    Accept는 클라이언트가 선호하는 미디어 타입을 전달합니다.

    해설  

    협상 헤더는 요청에서 사용 가능합니다.
    Accept-Language: ko-KR,ko;q=0.9, en-US;q=0.8 일 경우, 한국어를 1순위로 지원합니다.