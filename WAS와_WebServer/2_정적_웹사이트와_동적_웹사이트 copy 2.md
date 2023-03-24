# 정적 웹사이트와 동적 웹사이트

# INDEX
- [정적 웹사이트 VS 동적 웹사이트](#정적-웹사이트-vs-동적-웹사이트)
    - [정적 웹사이트와 동적 웹사이트](#정적-웹사이트와-동적-웹사이트)
    - [웹사이트 렌더링 방식의 변천](#웹사이트-렌더링-방식의-변천)
<br>

- [빌드와 언어별 빌드 도구](#빌드와-언어별-빌드-도구)
    - [빌드](#빌드)
    - [프레임워크](#프레임워크)
        - [백엔드 웹 애플리케이션 개발용 프레임워크](#백엔드-웹-애플리케이션-개발용-프레임워크)
        - [프론트엔드 웹 애플리케이션 개발용 프레임워크](#프론트엔드-웹-애플리케이션-개발용-프레임워크)
        - [모바일 및 데스크탑 애플리케이션 개발용 프레임워크](#모바일-및-데스크탑-애플리케이션-개발용-프레임워크)
    - [대표적인 빌드 도구](#대표적인-빌드-도구)
        - [JavaScript 기반의 React 생태계](#javascript-기반의-react-생태계)
        - [Java/Kotlin 기반의 Spring Boot 생태계(gradle)](#javakotlin-기반의-spring-boot-생태계gradle)
    - [빌드가 필요 없는 경우](#빌드가-필요-없는-경우)

---
<br>
<br>


# 정적 웹사이트 VS 동적 웹사이트
## 정적 웹사이트와 동적 웹사이트

- 정적 웹사이트 : HTML 파일 코드 자체로 배포되는 사이트(CSR)
    - 특징
        - HTML 및 CSS 파일로 구성
    - 장점
        - 간단하고 생성 및 유지 관리가 쉬워 일반적으로 빠르게 로드
        - 콘텐츠 양이 제한된 단순한 웹사이트에 적합
    - 단점
        - 기능이 제한되어 쉽게 업데이트 하거나 사용자 지정 불가  
    
<br>

- 동적 웹사이트 : 서버에 의해 HTML 파일이 동적으로 생성되는 사이트(SSR)
    - 특징
        - PHP 또는 Node.js와 같은 서버측 언어를 사용하여 복잡한 웹사이트
    - 장점
        - 다양하고 쉽게 사용자 지정 및 업데이트
        - 복잡한 기능을 가진 대규모 웹사이트에 더 적합
        - 사용자 인증 및 DB 통합과 같은 고급기능 제공
    - 단점
        - 생성 및 유지관리에 많은 기술 전문 지식 필요하며 로드 속도가 느림

<br>


🥸 정적 웹사이트가 뒤쳐진게 아니다. 오히려 2 티어 아키텍처에서 정적 웹사이트의 사용이 더욱 보편적이다.
> 2 tier 아키텍처  : '클라이언트<-> 서버'  
    - 데스크톱 응용 프로그램이나 소규모 웹 사이트와 같은  
    소규모 응용 프로그램에 가장 일반적으로 사용한다.  
    - 클라이언트가 직접 서버의 DB에 접속하여 자원을 활용  
    - 편리하지만 보안에 취약하고, 유지보수도 어려움

> 3 tier 아키텍처 : '클라이언트 <-> 서버/애플리케이션 <-> DB  



<br>

## 웹사이트 렌더링 방식의 변천  
AJAX 이전 : 서버가 매번 동적으로 생성, 서버가 HTML 형태로 브라우저에게 제공하는 동적 웹사이트가 헤더 및 푸터 등 페이지의 구성요소의 중복 요청과 응답이 많았다. 패킷의 크기가 클 수 밖에 없는 환경

AJAX 보편화 후 : 필요한 부분만 클라이언트가 요청 -> 서버 과부화 줄어듦
> JSON 포맷의 순수 데이터를 제공하는 방식으로 변하게 되었다.  
```JavaScript + AJAX ``` = ```고도화된 웹 앱```

<u>JavaScript</u>는 동적인 렌더링을 이처럼 지원하지만 웹 페이지를 렌더링 하지 않고 HTML/CSS/JS 파일의 소스 코드를 그대로 작동하기에   
<u>정적 웹사이트</u>라고 할 수 있다.

---




<br>
<br>

# 빌드와 언어별 빌드 도구
## 빌드
프로그램의 소스코드를 독립적인 아티팩트로 변환화는 과정  
(소스 코드를 실행 가능한 프로그램이나 응용 프로그램으로 컴파일하는 프로세스)


<br>


## 프레임워크

- 빌드를 위해 필요한 도구  
- 소프트웨어를 만드는 기본 골격 제공
- 현대 개발에서 많은 의존성이 보임

<br>

### 백엔드 웹 애플리케이션 개발용 프레임워크
- Spring ( Java, Kotlin)   
<img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">


- Django ( Python )  
<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white">
- Express ( JavaScript)  
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">

### 프론트엔드 웹 애플리케이션 개발용 프레임워크
- React 및 관련 라이브러리( JavaScript )  
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
- Vue.js, Svelte (JavaScript)  
<img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=white">

### 모바일 및 데스크탑 애플리케이션 개발용 프레임워크
- Flutter (Android, iOS 등)  
<img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=Flutter&logoColor=white">
- .NET Framework (Windows)  
<img src="https://img.shields.io/badge/.Net Framework-512BD4?style=for-the-badge&logo=.Net&logoColor=white">
- Apple 운영체제 기본 Native 프레임워크 Cocoa (macOS),Cocoa Touch (iOS)  

- 안드로이드 기본 Native 프레임워크 (Android)  

<br>
<br>
<br>

## 대표적인 빌드 도구  

<br>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

---

### JavaScript 기반의 React 생태계

---

React 프레임워크를 사용하는 경우 create-react-app 또는 next.js 와 같은 프레임워크를 사용 
1. node.js 개발 환경 준비
2. 프로젝트 폴더로 이동
    - ```package.json``` 파일이 있는지 확인
3. 의존성 (dependency) 설치
    - ```npm install``` 명령 입력
4. 빌드
    - ```npm run build``` 명령 입력
5. 빌드 결과물 확인
    - build 폴더 확인
    - React는 프론트엔드 웹 애플리케이션이므로 결과물로는 HTML, CSS, JS 파일을 포함
6. 의존성 설치 후 빌드 하지 않고  ```npm run start``` 가능

<br>

<p align="center"><u>이후 이 파일들을 nginx 등에서 정적 호스팅 가능</u></p align="center">

<br>
<br>

---

<img src="https://img.shields.io/badge/Spring BOOT-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"> <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">

---

### Java/Kotlin 기반의 Spring Boot 생태계(gradle)
---
1. 자바 개발 환경( JDK - OpenJDK) 준비
2. gradle 설치
    - gradle : Domain-specific-language"를 사용  
     덕분에 기존의 pom.xml파일을 사용하는 Maven보다 코드가 훨씬 간결하고 보기가 좋다.

3. 프로젝트 폴더로 이동
4. 빌드
    - ```gradlew build```
5. 실행
    - ```gradle bootRun```


<br>
<br>


## 빌드가 필요 없는 경우    

---

<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">

---

node.js 앱이나 Python 같이 소스 코드 그대로 런타임을 실행할 수 있으면 빌드 과정 생략  