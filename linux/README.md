# 리눅스 운영체제

# INDEX

[1. 리눅스인 이유](/linux/1%20%EB%A6%AC%EB%88%85%EC%8A%A4%EC%9D%B8%20%EC%9D%B4%EC%9C%A0%20122cfc1649dd435ca659e90a11b8630e.md)

[2. CLI 기본 명령어](/linux/2_CLI%20_%EA%B8%B0%EB%B3%B8_%EB%AA%85%EB%A0%B9%EC%96%B4.md)

[3. 패키지와 패키지 매니저](/linux/3_%ED%8C%A8%ED%82%A4%EC%A7%80%EC%99%80_%ED%8C%A8%ED%82%A4%EC%A7%80%EB%A7%A4%EB%8B%88%EC%A0%80.md)

=========[1st 발표](/linux/%EB%B0%9C%ED%91%9C.md)=========

[4. 출력 관련 명령어 ( 스트림 )](/linux/4_%EC%B6%9C%EB%A0%A5_%EA%B4%80%EB%A0%A8_%EB%AA%85%EB%A0%B9%EC%96%B4_(%EC%8A%A4%ED%8A%B8%EB%A6%BC).md)

[5. 관리자로서의 리눅스](/linux/5_%EA%B4%80%EB%A6%AC%EC%9E%90%EB%A1%9C%EC%84%9C%EC%9D%98_%EB%A6%AC%EB%88%85%EC%8A%A4.md)

=========[2nd 발표](/linux/%EB%B0%9C%ED%91%9C2.md)=========

[6. 프로세스 관리](/linux/6_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4%EA%B4%80%EB%A6%AC.md)

[7. 서비스 관리](/linux/7_%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B4%80%EB%A6%AC.md)

[8. 자동화](/linux/8_%EC%9E%90%EB%8F%99%ED%99%94.md)

[리눅스 실습](/linux/%EB%A6%AC%EB%88%85%EC%8A%A4%20%EC%8B%A4%EC%8A%B5.md)

[9. 시스템 모니터링](/linux/9_%EC%8B%9C%EC%8A%A4%ED%85%9C_%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81.md)

[3.14 수업 - 리눅스의 쓰임](/linux/3_14%20%EC%88%98%EC%97%85_%EB%A6%AC%EB%88%85%EC%8A%A4%EC%9D%98%EC%93%B0%EC%9E%84.md)

</br>
</br>
</br>
</br>

---

# 리눅스

- Unix 계열 운영체제
- 오픈소스
- 리눅스 설치
    
    [[Naver Cloud Platform/Server] 네이버 클라우드 플랫폼으로 서버 구축하기 (with Ubuntu Linux) +21.06.19 update](https://growingarchive.tistory.com/152)
    
</br>


## 맥북 환경에서의 리눅스 설치


기본적으로 모든 유저가 리눅스를 클라우드에서 서버를 운영하여 사용하는줄 알고 있었다. 

우분투 18.04를 지원하는 ncloud ( Micro 로 할 시 무료로 1년 지원 )로 버전을 최신으로 맞추기 어렵다고 생각해 멘탈이 파괴될 뻔 했지만,

맥북은 로컬 환경에서 iTerm 이용하면 ( 벤투라 이상 iOS ) 된다는 소식을 방금 들었다. 내가 멍청했다.

학습 할 때는 클라우드 환경과 로컬 환경을 둘다 고려할 것이다.

![스크린샷 2023-03-09 09.42.52.png](/linux/linux.png)

</br>

| [Unix](https://w3techs.com/technologies/details/os-unix) | 80.7% |
| --- | --- |
| [Linux](https://w3techs.com/technologies/details/os-linux) | 38.8% |
|  | W3Techs.com, 8 March 2023 |
| 웹사이트에서 리눅스를 사용하는 비율 |  |

</br>

## **Subcategories of Linux**

This diagram shows the percentages of websites using various subcategories of Linux.

How to read the diagram:Ubuntu is used by 31.9% of all the websites who use Linux

| [Ubuntu](https://w3techs.com/technologies/details/os-ubuntu) | 31.9% |
| --- | --- |
| [Debian](https://w3techs.com/technologies/details/os-debian) | 16.8% |
| [CentOS](https://w3techs.com/technologies/details/os-centos) | 8.4% |
| [Red Hat](https://w3techs.com/technologies/details/os-redhat) | 0.7% |
| Unknown | 41.2% |
|  | W3Techs.com, 8 March 2023 |
| Linux의 다양한 하위 범주를 사용하는 웹 사이트의 백분율 |  |

</br>

### 용어

- GNU ( GNU's Not Unix ) : 리눅스 커널 그 자체만으로는 시스템을 구성할 수 없기 때문에, 우리는 흔히 리눅스라고 호칭하는 시스템을 GNU/리눅스라는 이름으로 사용합니다. GNU/리눅스는 **유닉스(Unix) 운영체제를 모델로 만든 운영체제**

### 윈도우와 macOS가 아닌 이유

- 서버 당 부과되는 운영체제 라이선스
- 아키텍처의 한계

---

[용어정리_배포금지](%E1%84%85%E1%85%B5%E1%84%82%E1%85%AE%E1%86%A8%E1%84%89%E1%85%B3%20%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%A6%200c4f4774e24f482789579df6af574bad/%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8B%E1%85%A5%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5_%E1%84%87%E1%85%A2%E1%84%91%E1%85%A9%E1%84%80%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%B5%20e9ac9e7ae83c4adf895993f7c836899e.md)