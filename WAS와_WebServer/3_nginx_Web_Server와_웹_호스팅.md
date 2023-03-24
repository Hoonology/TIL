# nginx Web Server 호스팅

# INDEX
- [최소 요구사항](#최소-요구사항)
    - [1. nginx 설치](#1-nginx-설치)
    - [2. 정적 콘텐츠 호스팅하기](#2-정적-콘텐츠-호스팅하기)
        - [nginx.conf 구조](#nginxconf-파일-구조)
- [Hands-On) 기본 샘플 페이지 테스트](#hands-on-conf-파일에-server-블록-작성)
    - [TroubleShooting](#nginx-설치---트러블슈팅)
    - [오류 발생](#오류-발생)
    - [404 에러 발생](#이번엔-404-not-found-오류-발생)
    - [해결 방법](#해결-방법)

---

<br>
<br>

## 최소 요구사항 
### 1. nginx 설치 
- [homebrew를 이용한 Mac용 nginx 설치 레퍼런스
](https://formulae.brew.sh/formula/nginx)
```bash
brew install nginx
```
![pic1](/WAS와_WebServer/assets/3_nginx_Web_Server와_웹호스팅/설치1.png)

### 2. 정적 콘텐츠 호스팅하기
#### ```nginx.conf``` 파일 구조
논리적으로 작성되어 있는 <u>지시어 목록</u>
- 지시어 목록을 묶어 <u>모듈 형태</u>로 만들어 작동하게 한다.
nginx.conf 파일 위치 파악 명령어
    ```bash
    sudo find / -name nginx.conf
    ```
    > 나는 어째서 ```permission denied```가 뜨는가..  
    모든 디렉토리에서 찾기 권한을 요청해서 연락처, 사진 등에서 찾게 했는데, 시간이 너무 오래걸려 취소했다.

<br>

## nginx 설치 - 트러블슈팅

1. nginx를 macOS에 설치 됐는지 확인하기
    ```bash
    brew services
    ```
    ![pic2](/WAS와_WebServer/assets/3_nginx_Web_Server와_웹호스팅/설치확인.png)
2. 설치가 되지 않았음 확인, 설치를 진행하자
    ```bash
    brew install nginx
    ```
3. 테스트
    ```bash
    brew services start nginx
    ```
    ![pic3](/WAS와_WebServer/assets/3_nginx_Web_Server와_웹호스팅/설치테스트.png)

    브라우저에 ```localhost``` 입력 - 오류 발생
    ![img_url](https://velog.velcdn.com/images%2Fdavelee%2Fpost%2Fa2259226-51bb-49f6-a952-483f7e1a1984%2Fimage.png)
    ```localhost:8080``` 입력
    ![img_url](https://velog.velcdn.com/images%2Fdavelee%2Fpost%2F68269eda-34c3-4325-b1c5-e7312e07e45b%2Fimage.png)

    ```localhost``` 만 입력해도 접근할 수 있도록 한다.

    <br>
    <br>
    <br>


근데, 여기서 발견한 해결법 ...  
 ```bash
 cd /opt/homebrew/etc/nginx
 ```
```bash
cat nginx.conf.default
```

![pic4](/WAS와_WebServer/assets/3_nginx_Web_Server와_웹호스팅/오류해결.png)

- worker_processes number | auto;
    nginx 프로세스 실행 가능 수를 정의하는 지시어입니다. 최적의 값으로는 CPU의 코어 수, 데이터를 저장하는 하드 디스크 수, 로드 패턴을 비롯한 여러 요인에 따라 달라집니다. 보통은 CPU 코어 수 만큼을 할당하는 것이 보통이며, auto로 설정해두면 자동으로 값을 알맞게 설정해 줍니다.
    include file | mask;
    include 지시어는 특정 파일을 포함하는 기능을 수행합니다. 지시어가 있는 바로 그 위치에 해당 파일 내용이 삽입 됩니다.

    ```bash
    # nginx.conf
    include mime.types
    include /dir/*
    ```
    예를 들어 위와 같이 nginx.conf 파일 내부에 include 지시어를 사용해서 mime.types과 같은 단일 파일 내의 내용과 /dir/* 과 같이 어떤 디렉토리 내부의 모든 파일을 가져올 수도 있습니다. 따라서 필요한 설정을 파일 단위로 나누어 include 지시어로 간편하게 사용 가능합니다.
- 지시어 블록(directive block)
    모듈 안에 작성된 지시어들은 블록 안에서만 사용할 수 있기 때문에, 블록 내에 작성된 지시어는 블록의 문맥에서만 의미를 갖습니다. 하지만 예외로 일부 지시어들은 서버의 전 범위에 효력을 가지기 때문에 메인 블록이라 부르는 환경 설정 파일에 작성될 수도 있고, 경우에 따라서는 한 블록 안에 다른 블록이 삽입될 수도 있습니다.
- events { ... }
    events 블록은 네트워크의 작동 환경을 설정하는 지시어를 제공합니다.
    - worker_connections
    하나의 프로세스가 처리할 수 있는 연결(connections)의 수로, 최대 연결 수는 worker_processes X worker_connections 로 계산합니다.
- http { ... }
    http 블록은 웹서버에 대한 동작을 설정합니다. HTTP 부분과 관련된 모듈의 지시어와 값을 정의하며, 이후 설명할 server와 location의 루트 블록이라고 할 수 있습니다.
    http, server, location 블록은 계층 구조를 가지고 있으며, 많은 지시어가 각 블록에서 동시에 사용될 수 있는데, http 블록의 내용은 server 블록의 기본값이 되고, server 블록은 location 블록의 기본 값이 됩니다. 만약 상위 블록에서 선언된 지시어를 하위 블록에서 다시 선언하면 상위의 지시어는 무시됩니다.
    http 블록 안에는 한 개 이상의 server 블록을 선언할 수 있습니다.
- server { ... }
    server 블록은 하나의 호스트를 선언하는데 사용하며, http 블록 안에서만 사용될 수 있습니다. server 블록 안에는 한 개 이상의 location 블록을 선언할 수 있습니다.

- location { ... }
    location 블록은 특정 URL을 처리하는 방법을 정의합니다. 예를 들면, ```http://example.com/hello```와 ```http://example.com/world``` 에 접근하는 요청을 다르게 처리하고 싶을 때 사용합니다.

<br>

---
## 다시 본론으로 돌아와서 

   ```localhost:8080``` 입력
    ![img_url](https://velog.velcdn.com/images%2Fdavelee%2Fpost%2F68269eda-34c3-4325-b1c5-e7312e07e45b%2Fimage.png)
Server 블록 Checking,
![pic5](/WAS와_WebServer/assets/3_nginx_Web_Server와_웹호스팅/localhost.png)

```bash
nano nginx.conf
```
![pic6](/WAS와_WebServer/assets/3_nginx_Web_Server와_웹호스팅/listen80.png)

server의 ```listen 8080``` 을 ```80```으로 수정 

하 ... 여전히 안된다 ...

localhost 들어가도 사이트에 연결할 수 없다고 나온다.

<br>
<br>
<br>


다시 과제 진행해보자 ..

---

## Hands-On) conf 파일에 Server 블록 작성
새로운 HTML 페이지를 만들어 다른 포트로 접속해보자,  
아무 폴더 생성 후 아래 코드를 이용해 ```index.html``` 생성해보자
```html
<!DOCTYPE html>
<html>
<head>
<title>My Awesome Web</title>
</head>
<body>

<h1>Hello World</h1>
<p>This is for Codestates DevOps Bootcamp!</p>

</body>
</html>
```

html을 작성한 후에는 해당 파일이 있는 위치(경로)를 파악  
난 ```/opt/homebrew/etc/nginx/anything/```에 넣겠다.  
아래와 같이 listen 값을 10024번 포트로하고, root에 새로 작성한 html 파일이 있는 경로로 지정, 그리고 location 블록을 생성해서 pathname과 index 수정
![pic6](/WAS와_WebServer/assets/3_nginx_Web_Server와_웹호스팅/root_index.png)

<br>

## 오류 발생 
localhost:10024로 접근 시 , 사이트에 연결할 수 없음이 뜬다.
```bash
sudo nginx -t # 상태 확인
sudo nginx # 오류가 없으면 이 명령을 실행 
```

## 이번엔 404 Not Found 오류 발생
진전이 있다.   
진전이 있다.   
진전이 있다.   
...........................

<br>

어 ?... 그런데 ?
<br>
<br>

![finally](/WAS와_WebServer/assets/3_nginx_Web_Server와_웹호스팅/드디어.png)
![finally](/WAS와_WebServer/assets/3_nginx_Web_Server와_웹호스팅/드디어2.png)

![img_url](https://blog.kakaocdn.net/dn/evmN8l/btq69RB0y7d/GZAFKhr8iVK7ZRfsjC89xk/img.jpg)

## 해결 방법 
우선, 내가 기존에 ```nginx.conf```를 어떻게 구성했는지 보자,
```bash
    server {
        listen       10024;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /opt/homebrew/etc/nginx/anything/index.html;
            index  index.html;
        }
```
location의 root 를 보면, 패스 설정을 ```/opt/homebrew/etc/nginx/anything/index.html``` 라고 했는데, 중요한건, ```index.html```이 위치한 디렉토리를 지정해야한다는 것이다. 즉,```/opt/homebrew/etc/nginx/anything/``` 인 것 !

그 다음 nano 편집기를 이용해 ```nginx.conf``` 를 수정했으니 저장을 할 것이다. 그 후에 <u>아무런 동작</u>을 취하지 않고 ```localhost:10024```를 접속하니 당연히 404 not Found 에러가 뜨는거 아니겠는가 !!!  

그 아무런 동작 ! 바로, nginx를 리로드 해야한다는 것이다 !!
``` bash
sudo nginx -s reload
```
문제해결.  
끝.




![img_url](https://blog.kakaocdn.net/dn/evmN8l/btq69RB0y7d/GZAFKhr8iVK7ZRfsjC89xk/img.jpg)
![img_url](https://blog.kakaocdn.net/dn/evmN8l/btq69RB0y7d/GZAFKhr8iVK7ZRfsjC89xk/img.jpg)
