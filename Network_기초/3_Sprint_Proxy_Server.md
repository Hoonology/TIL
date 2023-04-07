# Sprint - Proxy Server
이번 스프린트에서는 nginx를 통해 아래의 요구사항을 반영한 리버스 프록시(Reverse Proxy) 서버를 작성합니다. nginx는 정적 웹페이지를 호스팅하기 위해서 사용될 뿐만 아니라, 원(origin) 서버의 앞 단에 위치하여, 로드밸런서, 캐싱, 보안 등을 위한 프록시 서버로 사용됩니다.

# Achievement Goals
- 리버스 프록시(Reverse Proxy)와 포워드 프록시(Forward Proxy)에 대해서 이해하고, 특징을 학습합니다.
- 프록시 서버에 사용되는 지시어(directives)를 학습하고, 이를 활용합니다.
- 프록시 서버에서 원 서버로 전달되는 요청 헤더를 설정하는 방법을 학습합니다.
- 프록시 서버의 cache-control 방법과 캐시 관련 지시어 사용법을 확인합니다.

# 요구사항
- 내 컴퓨터를 원(origin) 서버의 리버스 프록시 서버로 만들어야 합니다.
- 캐싱 기능을 포함한 프록시 서버를 작성해야 합니다.
- sprint-proxy-server 레포지토리에 Pull Request를 통해, nginx.conf 설정 내용을 제출해야 합니다.

## 출발

```bash
sudo brew services start nginx
```
## 오류 발생

계속 오류가 나서 conf 파일을 손봤다.  

<br>

## 해결
 
```bash
sudo nginx -t
```
를 통해 nginx status 를 확인하고 문제를 해결할 수 있었다.  
conf 파일을 다음과 같이 수정 ( access_log, error_log 경로를 다시 지정해줬다. )


```
log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                '$status $body_bytes_sent "$http_referer" '
                '"$http_user_agent" "$http_x_forwarded_for"';

access_log /opt/homebrew/var/log/nginx/access.log main;
error_log /opt/homebrew/var/log/nginx/error.log;

server {
    listen       10026;
    server_name  example.com;

    location /some/path/ {
        proxy_set_header Host $host;
        proxy_set_header myname "devops01-name";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_pass  3.39.193.136:8080;
    }
}
```

돌아가는 서비스 확인 가능( 괜히 postgreSQL 돌아가고 있길래 꺼줌)
```bash
brew services list
```




```bash
brew services start nginx

==> Successfully started `nginx` (label: homebrew.mxcl.nginx)
```


