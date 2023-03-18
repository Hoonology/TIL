# 2. CLI 기본 명령어

- 기본적인 CLI 명령어 토글
    - **pwd : 현재 위치 확인**
    - ****mkdir: 새로운 폴더 생성하기****
    - ****ls: 특정 폴더에 포함된 파일이나 폴더 확인하기****
    - **open . : 현재 디텍토리를 GUI로 열기**
    - ****cd: 폴더에 진입하기****
    - ****touch: 파일 생성하기****
        
        ```bash
        touch hi.txt
        ```
        
    - ****cat: 파일의 내용을 터미널에 출력하기****
        
        ```bash
        cat hi.txt
        ```
        
    - ****rm: 폴더나 파일 삭제하기****
        
        ```bash
        rm bye.txt # 단일 파일 삭제
        rm -rf bye # 폴더 삭제 # r : 폴더 삭제 시 사용 , f : 질문을 받지 않을 때 사용
        ls 
        # 출력 값 없음
        ```
        
    - ****mv: 폴더나 파일의 이름을 변경, 또는 폴더나 파일의 위치 옮기기****
        
        ```bash
        mkdir bye # bye 폴더를 생성합니다.
        touch bye.txt # bye.txt 파일을 생성합니다
        mv bye.txt bye/
        ls
        # bye 폴더만 출력됩니다.
        
        cd bye
        ls
        # bye.txt 파일이 출력됩니다.
        ```
        
        ```bash
        ls # 현재 폴더에 있는 폴더나 파일을 출력합니다.
        # bye.txt 파일이 출력됩니다.
        mv bye.txt helloWorld.txt
        ls
        # helloWorld.txt 파일이 출력됩니다.
        ```
        
    - ****cp: 폴더나 파일을 복사하기****
        - 명령어 `cp`는 copy의 약자로, 폴더나 파일을 복사할 때 사용합니다. 먼저, 파일을 복사합니다. 파일을 복사하기 위해 명령어 `cp`를 사용하는 경우에는, `cp [원본 파일 이름] [복사할 파일 이름]`을 프롬프트에 입력합니다.
        
        ```bash
        ls
        # helloWorld.txt 가 출력됩니다.
        cp helloWorld.txt hiComputer.txt
        ls
        # helloWorld.txt hiComputer.txt 가 출력됩니다.
        ```
        
        ```bash
        cd .. # 상위 폴더로 이동
        cp -rf bye hi
        ls
        # bye hi 가 출력됩니다.
        ```
        
    - **nano, vim : txt 수정**
    
    [[linux] vi/vim 명령어 총 정리 끝판왕!!](https://stricky.tistory.com/135)
    
    ```bash
    pwd # /Users/teddykim
    mkdir test
    cd test
    pwd # /Users/teddykim/test
    touch sample.txt
    ls # sample.txt
    vim sample.txt
    ```
    
    ![스크린샷 2023-03-09 16.33.20.png](/linux/asset/2_CLI_%EA%B8%B0%EB%B3%B8%EB%AA%85%EB%A0%B9%EC%96%B4/helloWorld.png)
    
    [ esc ] - :wq! : 저장 후 나가기
    
    ```bash
    cat sample.txt # Hello world !
    ```
    
     
    

## 절대 경로와 상대 경로

**절대 경로**
처음부터 시작하여 목적지까지의 절대적인 경로를 의미한다. 시작 지점부터 목표지점까지의 어느 누가 봐도 절대적으로 이곳을 가리킬 수 있는 곳이며 특징은 최상위 /를 포함한다. 

**상대 경로**
는 현재 위치를 기준으로 하여 목적지까지의 상대적인 경로를 의미한다.

```bash
cd ./hi # 현재 폴더 아래의 hi 폴더로 진입하는 명령
pwd
# (Ubuntu) /home/[username]/helloWorld/hello/hi
# (macOS) /Users/[username]/helloWorld/hello/hi
ls
# helloWorld.txt hiComputer.txt
```

```bash
mv helloWorld.txt ../../
ls
# hiComputer.txt
cd ../../
pwd
# (Ubuntu) /home/[username]/helloWorld/
# (macOS) /Users/[username]/helloWorld/
ls
# hello helloWorld.txt hi.txt
```

### 리눅스 디렉터리 구조

![Untitled](/linux/asset/2_CLI_기본명령어/Untitled.png)

- 토글
    
    Linux의 디렉토리 구조는 트리 맨 위에 루트 디렉토리 "/"가 있는 계층적 방식으로 구성됩니다. 다음은 가장 일반적인 디렉토리와 그 목적에 대한 간략한 개요입니다.
    
    - /bin: 모든 사용자가 사용하는 명령과 같은 필수 바이너리 파일을 포함합니다.
    - /boot: Linux 커널 및 부트로더와 같이 부팅 프로세스 중에 필요한 파일을 포함합니다.
    - **/dev**: 하드웨어 장치를 나타내는 장치 파일 포함
        - HDD, SSD
    - /etc: 시스템 및 응용 프로그램에 대한 구성 파일을 포함합니다**.**
    - **/home**: 일반 사용자의 홈 디렉토리 포함
    - **/lib**: 시스템 및 응용 프로그램에서 사용하는 공유 라이브러리 파일을 포함합니다.
    - **/media**: USB 드라이브 및 CD와 같은 이동식 미디어를 자동으로 마운트하는 데 사용
    - **/mnt**: 파일 시스템 또는 장치를 수동으로 마운트하는 데 사용
        - 사용자가 직접 마운트
    - **/opt**: 옵션 또는 타사 소프트웨어 패키지 포함
    - /proc: 실행 중인 프로세스 및 시스템 리소스에 대한 정보를 제공하는 가상 파일 시스템
    - **/root**: 루트 사용자의 홈 디렉토리
    - /run: 시스템 시작 시 생성되는 임시 파일을 저장하기 위해 사용
    - **/sbin**: 시스템 관리 작업에 사용되는 필수 시스템 바이너리를 포함합니다.
    - **/srv** : 시스템에서 제공하는 서비스에 대한 데이터를 저장하기 위해 사용
    - /sys: 시스템의 하드웨어에 대한 정보를 제공하는 가상 파일 시스템 ( USB )
    - /tmp: 애플리케이션 및 사용자가 생성한 임시 파일을 저장하기 위해 사용
        - 재부팅 시 삭제되는 파일
    - /usr: 사용자 바이너리, 라이브러리, 설명서 및 소스 코드를 포함합니다.
    - /var: 로그, 메일 및 스풀 파일과 같은 가변 데이터 파일을 포함합니다.