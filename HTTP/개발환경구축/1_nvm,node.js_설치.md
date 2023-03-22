# nvm & node.js

node.js에서 JavaScript를 실행시키기 위해서는, 당연히 node.js를 설치해야 합니다. 별도의 프로그램으로 설치할 수도 있지만, 패키지 매니저처럼 node.js의 버전을 관리할 수 있도록 ```nvm```(Node Version Manager)으로 ```node.js```를 설치합니다. ****nvm을 사용하면 node.js의 다양한 버전을 쉽게 설치하고, 사용할 수 있습니다.****

</br>

# INDEX

- [nvm 설치](#1-nvm-설치)
- [설치 확인](#2-설치-확인)
- [node.js 설치](#3-nodejs-설치)
- [node 버전 변경](#4-node-버전-변경)
---
</br>

## 1. nvm 설치
``` bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

만일 Command 'wget' not found 메세지와 함께 설치가 진행되지 않는 경우, Package Manager를 이용해 wget을 설치하세요.

``` bash
# Ubuntu
sudo apt update
sudo apt install wget
# macOS
brew update
brew install wget
```

</br>

## 2. 설치 확인
``` bash
nvm --version
```

버전이 잘 나온다면, NVM 설치를 성공하였습니다.


</br>

## 3. node.js 설치
``` bash
nvm install --lts
```

``` bash
node -v
```
터미널에 버전 정보가 출력되면, node를 성공적으로 설치했습니다.

</br>

</br>

## 4. node 버전 변경
사용중인 node version을 다른 버전으로 변경하고 싶을 땐 아래 코드를 입력한다.

``` bash
nvm use 버전넘버  
# 예를 들어, nvm use 12.18.3,  nvm use 14.15.5
```