# npm & package.json

## node로 js 파일 실행하기
``` bash
nano helloWorld.js
```

``` js
function helloWorld () {
  console.log("Hello world!");
}

helloWorld();
```

이어서, 생성한 파일을 실행합니다. 다음 명령어를 입력하고 터미널의 출력을 확인하세요. ```node.js``` 환경에서 JavaScript 파일을 실행할 때에는 명령어 ```node```에 실행할 파일의 이름을 입력합니다.

``` bash
node helloWorld.js
```

```Hello world!```

---

</br>

## npm 모듈과 pakage.json
- npm 모듈 : 우리보다 잘하는 사람들이 만들어놓은 검증된 코드(모듈)  
- package.json : npm 모듈에 대한 정보를 담아둔 곳 

</br>

### npm
node.js 환경에서 외부 라이브러리를 다운로드하기 위해 다양한 방법이 존재하지만, 그중 대표적인 것은 바로 npm입니다. npm은 Node Package Manager로 일종의 앱스토어입니다. 필요한 모듈을 다운로드할 수 있는, 모듈들이 모여있는 모듈 스토어입니다.

어디선가 들어본 이야기죠? 리눅스의 패키지 매니저가 apt, macOS의 패키지 매니저가 brew이듯, node.js 생태계의 패키지 매니저는 npm입니다. 앞으로 필요한 모듈은 대부분 npm에서 다운로드해서 사용하면 됩니다.

</br>

### package.json
프로그램을 실행시키기 위해 필요한 모듈들이 무엇인지, 프로그램을 실행시키는 방법, 프로그램을 테스트하는 방법 등이 명시되어 있습니다.  

즉, 전자제품을 보러 갔을 때 제품 카탈로그가 바로 package.json이라 생각할 수 있습니다. 카탈로그만 보면 어떤 제품이 있는지 파악할 수 있는 것처럼 package.json만 보면 어떤 모듈이 들어가 있는지를 알 수 있습니다.