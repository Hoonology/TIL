
# INDEX

[API 디자인의 선행 과정](#api-디자인의-선행-과정)
- [관계형 데이터 모델링](#api-디자인의-선행-과정)
- [블로그에 필요한 데이터 모델](#블로그에-필요한-데이터-모델)
- [HTTP API를 통한 데이터 전송](#http-api를-통한-데이터-전송)
- [리소스에 따른 HTTP API](#리소스에-따른-http-api)

[API 디자인 실습 도구](#api-디자인-실습-도구)
- [스프레드시트(Google Sheet)](#스프레드시트google-sheet)
- [스프레드시트 기반 API 변환 도구](#스프레드-시트-기반-api-변환-도구)
    - [Sheety](#sheety)
- [API 문서 작성하기( Open API )](#api-문서-작성하기-open-api)
    - [API 문서를 잘 작성해야하는 이유](#api-문서를-잘-작성해야하는-이유)
---
<br>

# API 디자인의 선행 과정

## API 디자인의 선행 과정: 관계형 데이터 모델링

> 관계형 데이터 모델링: 관계형 데이터베이스는 데이터베이스의 종류 중 하나이며, 행(row)과 열(column)로 구성된 표(table) 형식으로 표현한다. 관계형 데이터베이스에서 데이터의 개념적 표현을 만드는 프로세스가 관게형 데이터 모델링이다.  
관계형 모델에서 데이터는 테이블로 구성되며 각 테이블은 고객, 제품 또는 주문과 같은 시스템의 엔터티를 나타낸다. 각 엔터티의 속성은 테이블의 열로 표현되며 엔터티 간의 관계는 공통 열을 통해 테이블을 연결하여 표시된다.

REST API는 데이터나 자원(resource)을 HTTP URI로 표현하는 데에 그 목적이 있습니다. 따라서 API 작성에 앞서 다음 과정이 선행됩니다.

- 요청 / 응답으로 주고 받을 리소스
- 리소스의 내용

</br>
</br>

## 블로그에 필요한 데이터 모델

1. 사용자
2. 블로그 게시물
3. 댓글

| login_name | name | email | is_admin |
| -------- | -------- | -------- | -------- |
| kimcoding | 김코딩 | kimcoding@naver.com | false |
| parkdev | 박개발 | parkdev@naver.com | false |
| choiops | 최운영 | choiops@naver.com | true |

> 관계형 데이터 모델링에서는 필드 정의가 우선적으로 실행  
즉, 칼럼을 먼저 정의해야 한다.  
그 후 데이터 타입(str,num,boolean) 을 정한 뒤 데이터를 넣어준다.


</br>
</br>



## HTTP API를 통한 데이터 전송
데이터를 **HTTP 프로토콜**을 통해 전달 - 문자열로 표시
> HTTP body는 문자열로만 구성한다.  
JSON 형태의 포맷을 이용하고, HTTP의 Content-Type 사용도 가능하다.


```json
[
  {
    "login_name": "kimcoding",
    "name": "김코딩",
    "email": "kimcoding@naver.com",
    "is_admin": false
  },
  {
    "login_name": "parkdev",
    "name": "박개발",
    "email": "parkdev@naver.com",
    "is_admin": false
  },
  {
    "login_name": "choiops",
    "name": "최운영",
    "email": "choiops@naver.com",
    "is_admin": true
  }
]

```




</br>
</br>

## 리소스에 따른 HTTP API
- 위 순서 : 데이터 모델링 ( 리소스 정의 ) - HTTP 전송에 필요한 JSON 작성  
- URI Path 디자인 
- 잘 설계된 HTTP API ( REST API ) 는 리소스를 대표하는(representational) 문자열로 Path를 지정

``` bash
GET /users
```

``` bash
POST /article
```

``` bash
POST /article
Content-Type : application/json

{ "title": "오늘의 TIL", "body": "오늘은 REST API를 배웠다", "author": "parkdev" }

```



---

<br>
<br>
<br>

# API 디자인 실습 도구

## 스프레드시트(Google Sheet)
![pic1](/HTTP/assets/RESTAPI문서작성/RESTAPI.png)
- 첫번째 행(row)에는 반드시 필드 이름이 들어가야 합니다. 공백을 포함하지 않는 영문자로 작성되어야 합니다. _ 문자열은 사용할 수 있습니다.
- 두번째 행부터는 필드에 맞는 데이터가 들어가야 합니다.
- 필드에 데이터를 넣을 때는 모든 값이 일관된 자료형(type)이어야 합니다
 
 </br>

 ## 스프레드 시트 기반 API 변환 도구
 ### [Sheety](https://sheety.co/)  

 No-code 로 API 서버를 위해 Sheety 사용을 하는 경우도 더러 있지만, 프로그래밍 언어로 개발하는 것이 보통이다.  
 - node.js : [express](https://expressjs.com/), [fastify](https://www.fastify.io/)
 - Python : [Django](https://www.djangoproject.com/), [Flask](https://flask.palletsprojects.com/en/2.2.x/)
 - Java : [Spring Boot](https://spring.io/projects/spring-boot#overview)

[New Project] -> [From Google Sheet] -> GET, POST, PUT, DELETE를 Enable 한다.

![sheety](/HTTP/assets/RESTAPI문서작성/sheety.png)

- 메소드: PUT
    - 수정(Update)을 위한 메소드입니다. 여기서는 PATCH 대신 PUT을 채택했습니다.
- 엔드포인트: https://api.sheety.co/<사용자고유주소>/<프로젝트이름>
    - 일반적으로 도메인 이름 뒤에 나오는 주소는 Path에 속하지만, 이 경우 앞단의 고유 주소는 바뀌지 않으므로 프로젝트 이름까지 포함해 엔드포인트로 취급합니다.
- Path: /user
    - 리소스 이름을 포함하고 있으며, 메소드와 Path가 RESTful하게 디자인되어 있습니다.
- Path 파라미터: /<객체ID>
    - 객체 ID는 변수입니다. 특정 행(row)을 수정하려는 것이 이 API의 목적이므로, 해당 행을 선택해서 URI에 넘겨주어야 합니다. 각 고유의 행은 객체 ID를 가지고 있습니다. (GET 요청으로 확인할 수 있습니다) 이 객체 ID로 특정 행을 선택해 해당 행의 내용을 수정할 수 있습니다.
- 본문: JSON

하나의 행을 생성하거나 수정하려면 본문이 반드시 있어야 합니다. Content-Type은 JSON으로 고정되어 있으며, 다음과 같은 형태를 함께 본문에 실어 요청을 보내야 합니다.

</br>
</br>

# API 문서 작성하기( Open API )
## API 문서를 잘 작성해야하는 이유
REST API의 요소
- 요청
    - 엔드포인트
    - Path
    - Path 파라미터 or 쿼리 파라미터
    - 헤더 정보
    - 요청 본문( POST, PUT 등의 요청에 필요 )

- 응답
    - 상태 코드
    - 응답 본문

[OpenWeather](https://openweathermap.org/current#one),
[카카오스토리](https://developers.kakao.com/docs/latest/ko/kakaostory/rest-api) 처럼 만들어본다.


## OpenAPI 명세서
API 문서를 **가독성** 있게 만드는 것이 굉장히 중요하다. 
> 정해진 규칙에 맞게 내용을 JSON, YAML 문서로 만들어주는 서비스 존재  

[Swagger Editor](https://swagger.io/tools/swagger-editor/)

