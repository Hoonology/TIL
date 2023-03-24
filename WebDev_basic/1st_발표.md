# 1st 발표

[[DOB 4] 발표 제출](https://docs.google.com/forms/d/e/1FAIpQLSc_YJEwigFhsf0x8CFKjR7z_WqTsy0Ja40rTfFMaKaW9qvgAA/viewform)

## 문제 1) public IP와 Private IP의 차이점을 설명하세요.

[공인 IP와 사설 IP… 다양한 IP 유형의 차이는?](https://nordvpn.com/ko/blog/public-ip-and-private-ip/)

IP 주소는 인터넷에 연결된 장치가 웹 서버와 통신하는 데 사용됩니다. 이때 IP 주소에는 다양한 유형이 존재합니다. 

- IP 주소 : 인터넷 프로토콜 주소 ( 숫자로 구성 ), 인터넷에 연결된 장치를 식별
    - IPv4 : 네 부분의 숫자로 구성되어 있으며 각 숫자는 x.x.x.x와 같이 점으로 구분
    - IPv6 : 주소가 숫자와 알파벳이 포함된 16진법으로 구성 - 암호화와 인증 기능을 제공

먼저 **공인 IP 주소**는 인터넷이 사용자를 찾을 수 있도록 사용자를 식별하는 역할을 합니다. 반대로 **사설 IP 주소**는 사설 네트워크에서 다른 장치와 안전하게 연결하기 위해 사용되며, 동일한 네트워크의 각 장치에는 고유한 사설 IP 주소가 할당됩니다.

- 공인 IP : 인터넷 업체가 사용자에게 할당하며 공유기가 인터넷과 통신하도록 하는 역할을 하는 외부 IP 주소, 동일한 인터넷 연결을 사용하는 장치는 IP 주소를 공유 - 공인 IP 주소를 사용하는 경우 인터넷 활동이 추적되고 모니터링
- 사설 IP : 공유기가 노트북, 스마트 TV, 휴대폰 등 홈 네트워크에 연결된 장치에 할당한 내부 IP 주소, 사설 IP 주소를 확인하면 IP 주소가 192.168로 시작하는 경우를 자주 확인할 수 있습니다. 192.168이 전 세계 네트워크에서 가장 널리 사용되는 기본 사설 IP 주소 형식이기 때문입니다.

### ****공인 IP 주소와 사설 IP 주소의 차이****

---

    인터넷에 연결된 장치에는 공인 IP 주소와 사설 IP 주소가 모두 할당됩니다. 공유기에서 웹 트래픽을 동일한 네트워크에 연결된 모든 장치로 전송하는 역할을 하며, 공유기는 각 장치에 고유한 사설 IP 주소를 할당합니다.

![Untitled](1st%20%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%20b1683fa555e74f1d9b03e05ed822b921/Untitled.png)

IP 주소 부족 문제를 해결하기 위해 사설 IP 주소와 NAT 시스템이 도입되었습니다.( NAT : 공유기에서 웹 트래픽을 동일한 네트워크에 연결된 모든 장치로 전송하는 역할을 하며, 공유기는 각 장치에 고유한 사설 IP 주소를 할당 )

---

## 문제 2) 터미널에서 nslookup 명령을 실행 했을 때 나오는 결과값에 대한 설명을 작성하세요.

### nslookup

---

리눅스, 맥OS, 윈도우 등에서 사용할 수 있는 커맨드라인 명령어 중 하나로 DNS 레코드를 조회할 때 사용

[nslookup이란? DNS 레코드 조회 도구](https://www.44bits.io/ko/keyword/cli--nslookup)

```bash
nslookup <HOSTNAME>
```

DNS 레코드를 조회하고자 하는 서버를 지정하고자 하는 경우 서버 주소를 지정할 수 있습니다.

```bash
nslookup <HOSTNAME> <DNS_SERVER>
```

- 예를 들어 `google.com`의 DNS 레코드를 조회한다면 다음과 같이 사용합니다.
    
    ```bash
    nslookup google.com
    nslookup google.com
    Server:     192.168.1.1
    Address:    192.168.1.1#53
    
    Non-authoritative answer:
    Name:   google.com
    Address: 216.58.220.110
    ```
    
    - DNS 서버를 명시적으로 지정하는 경우 다음과 같이 사용합니다.
    
    ```bash
    nslookup google.com 8.8.8.8
    Server:     8.8.8.8
    Address:    8.8.8.8#53
    
    Non-authoritative answer:
    Name:   google.com
    Address: 172.217.175.46
    ```
    

### **nslookup 사용방법**

정방향 조회

```bash
nslookup <HOSTNAME>
```

역방향 조회

```bash
nslookup <IP_ADDRESS>
```

특정 레코드 조회

```bash
nslookup -query=<RECORD_TYPE> <HOSTNAME>
```

타임아웃 지정

```bash
nslookup -timeout=<TIMEOUT> <HOSTNAME>
```

---

## 문제 3) 검색창에 [http://google.com](http://google.com/) 을 검색하면, DNS에서 어떤 일이 일어나나요? 이에 대한 설명을 작성하세요.

### DNS

---

**DNS**는 Domain Name System의 약자로 사람이 읽을 수 있는 도메인 이름(예: [google.com](http://google.com/))을 **컴퓨터가 읽을 수 있는 IP 주소(예: 172.217.6.206)로 변환하는 시스템**입니다. 사용자가 복잡한 IP 주소 대신 기억하기 쉬운 도메인 이름을 입력하여 웹 사이트 및 서비스에 액세스할 수 있도록 하기 때문에 인터넷 인프라의 필수 부분입니다.

DNS 시스템은 도메인 이름 및 관련 IP 주소에 대한 정보를 저장하고 배포하는 서버 계층으로 구성됩니다.

사용자가 웹 브라우저에 도메인 이름을 입력하면 브라우저는 DNS 쿼리를 DNS 확인자 서버로 보냅니다. 확인 서버는 캐시를 확인하여 이미 저장된 도메인 이름에 대한 IP 주소가 있는지 확인합니다. 그렇지 않은 경우 도메인 이름의 IP 주소를 찾기 위해 일련의 DNS 서버에 요청을 보냅니다.

DNS 해석기 서버가 도메인 이름에 대한 IP 주소를 얻으면 이를 사용자의 웹 브라우저로 반환한 다음 적절한 웹 서버에 연결하여 웹 사이트 콘텐츠를 검색할 수 있습니다.

DNS는 이메일 전달 및 서버 간 통신과 같은 다른 용도로도 사용됩니다. DNS 레코드에는 IP 주소, 메일 서버 주소 및 기타 메타데이터를 비롯한 다양한 유형의 정보가 포함될 수 있습니다. 전반적으로 DNS는 전 세계 사람들이 인터넷에 액세스하고 사용하기 쉽게 만드는 데 중요한 역할을 합니다.

![Untitled](1st%20%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%20b1683fa555e74f1d9b03e05ed822b921/Untitled%201.png)

1. 검색창에 "[http://google.com](http://google.com/)"을 검색하면 웹 브라우저가 DNS(Domain Name System) 요청을 DNS 리졸버 서버로 보냅니다. 요청에는 액세스하려는 도메인 이름 'google.com'이 포함됩니다.
2. 그런 다음 DNS 해석기 서버는 캐시를 확인하여 "[google.com](http://google.com/)"에 대한 IP 주소가 이미 저장되어 있는지 확인합니다. 그렇다면 웹 브라우저에 IP 주소를 반환하고 브라우저는 해당 IP 주소와 연결된 웹 서버에 연결할 수 있습니다.
3. DNS 확인자 서버의 캐시에 IP 주소가 없으면 ".com" 도메인에 대한 신뢰할 수 있는 DNS 서버를 찾기 위해 루트 DNS 서버에 요청을 보냅니다. 루트 DNS 서버는 ".com" DNS 서버의 IP 주소로 응답합니다.
4. 그런 다음 DNS 확인자 서버는 "[google.com](http://google.com/)"에 대한 신뢰할 수 있는 DNS 서버를 찾기 위해 ".com" DNS 서버에 요청을 보냅니다. ".com" DNS 서버는 "[google.com](http://google.com/)"에 대한 신뢰할 수 있는 DNS 서버의 IP 주소로 응답합니다.

![스크린샷 2023-03-15 16.32.47.png](1st%20%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%20b1683fa555e74f1d9b03e05ed822b921/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-03-15_16.32.47.png)

1. 그런 다음 DNS 확인자 서버는 도메인 이름의 IP 주소를 찾기 위해 "[google.com](http://google.com/)"에 대한 권한 있는 DNS 서버에 요청을 보냅니다. 신뢰할 수 있는 DNS 서버는 "[google.com](http://google.com/)"과 연결된 웹 서버의 IP 주소로 응답합니다.
2. 마지막으로 DNS 확인자 서버는 IP 주소를 웹 브라우저에 반환하고 브라우저는 해당 IP 주소와 연결된 웹 서버에 연결하여 웹 사이트 콘텐츠를 검색할 수 있습니다.