# 회고
깃허브 블로그가 만들기 정말 어렵다고 생각했다. . .  
그래도 깃허브 블로그를 만드려는 목적이 무엇이냐, 내 TIL을 적음으로써 ! IT 인재가 되기 위해 지식의 밑천을 까는 (사실 잔디를) 것 아니었나 !  
시도를 하면서 그래도 깃허브에 대한 이모저모를 뼈로 느껴보는 시간이 되었다.  

<br>

# 새로운 테마로 
결국 내가 택한 테마는 처피 테마 보다 훨씬 간단한 테마이다.  
해당 테마에서 기본적으로 구현해주는 검색 기능에 기대가 컸기에 내 블로그 테마로 골랐다.
- 검색기능 
    > 이게 가장 나에게 필요했다.   
    내가 쓴 글을 한 파일 한 파일 열어보지 않아도 된다는 것이 가장 큰 매리트이다.  
    어떤 말을 어디에 썼는지 모르면 자료 찾는 시간이 꽤나 걸리기 때문이다.  
    티스토리나 velog, 네이버 블로그는 기본적으로 제공해주는 기능이지만 깃허브 블로그에서는 직접 구현하거나 이러한 모델을 사용해야한다.

    ![new](./assets/Newtheme.png)
    - 좌측에 나의 글 목록이 한 눈에 들어온다.
      > 너무 심플하여 향후 커스터마이징 할 예정


    게시물 ```Contact Syncing - Phone``` 을 열어서 살펴보면 프론트 구성은 아래와 같다.
    ![게시물](./assets/%EA%B2%8C%EC%8B%9C%EB%AC%BC.png)

    이번엔 마크다운 파일을 살펴본다. 1 대 1 비교를 통해 글을 수정해보며 바로 반영되는지 확인해본다. 

    ![md](./assets/md.png)

## Try

### 로컬 환경에서 수정하며 실시간 변화를 살펴본다.
1. 가상 서버 실행
    ```bash 
    bundle exec jekyll serve
    ```
2. 게시물 수정
    ![input](./assets/Input.png)
    ![Output](./assets/Output.png)
3. 자꾸만 ```https://hoonology.github.io/``` 페이지 들어가면 첫 화면에 
```--- layout: home # Index page ---``` 가 떠서 화가 나지만, 문제를 해결해본다.  
GPT에 따르면, ```index.html``` 을 추가해서 아래 코드를 입력하면 된다고 하는데, 이번엔 로컬에서 돌아가지 않는 문제가 발생하여 새로운 솔루션을 찾고자 한다.

    ```yaml
    ---
    layout: home
    ---

    {% include index.md %}
    ```
    ### 해결
    - 루트 디렉토리에 index.html을 생성한다.
    - index.html에 위 코드를 입력한다.
    - _includes 라는 폴더를 만든 뒤 index.md를 그 폴더에 옮긴다.


# Chirpy 스킨을 다시 입혀본다.
1. Fork : 내가 좋아하는 테마를 잘 사용중인 https://github.com/tired-o/tired-o.github.io 을 포크한 뒤, ```rename```을 통해 반드시 ```username.github.io```로 레포 이름을 바꿔야한다. master branch only 꼭 체크 해제해줘야 gh-pages 브랜치도 가져온다. 
2. 내 로컬에 Clone을 하고 해당 폴더로 이동한 뒤 (터미널), 브랜치 변경을 한다.
```bsah
git checkout gh-pages
```

3. 디렉토리를 구성하는 파일들을 먼저 살펴본다. (출처 : https://devmjun.github.io/archive/CreatGithubBlog )
    - README.md : 만들어진 github blog 마다 사용방법이 조금씩 다릅니다. 홈페이지에 대해서 친절하게 설명이 되어있는것도 있지만, 그렇지 않은것도 있습니다. 하지만 기본적으로 읽어주고 시작 합니다. 그러면 조금더 빠르게 theme 에 대한 이해를 할수 있습니다.

    - _config.yml : 환경설정 정보를 보관합니다. 기본적인 설정은 대부분은 이곳에서 합니다

    - _includes : 재사용하기 위한 파일은 담는 곳 입니다. 포스트나, 레이아웃을 손쉽게 편집할수 있는 녀석들을 담아 놓는 곳입니다.(모든 github blog theme 이 다 이런 구조는 아니지만, 대략적으로 이런 용도로 사용한다라고 생각하시고 읽어주시면 좋을것 같습니다!)

    - _layouts : github page의 포스트별로 적용되는 code 들이 있는곳입니다. post의 모습을 편집하고 싶으시다면, 해당 디렉토리에 들어가서 살펴 보시면 될것 같습니다

    - _index.html : 가장 기본적인 부분입니다. 이부분에서 homepage를 그려준다(?) 라고 생각하시면 됩니다.(엄밀하게 이 부분에서 그려주는것은 아니지만, 처음에는 그렇게 이해하시면 조금 편합니다)

    - _posts: github blog 에서 글을 포스팅 할때 이 디렉토리에 markdown 파일을 생성 해서 작성을 합니다. 주의해야할 사항은, markdown 으로 작성한 글이 blog에 올라가려면 어떤 형식을 따라줘야 합니다 예를 들어 서 파일이름은 YEAR-MONTH-DAY-title.MARKDOWN 형식을 사용하고, 내부에서 글을 작성할때 작성해야하는 것들이 있는데, 이러한 설명들은 대부분 README.md 에 설명이 되어있습니다.

4. _config.yaml 파일에서 설정을 다 바꿔보자

<br>

### 이슈 발생 1
_config.yml 파일이 보이지 않는다.
### 이슈 해결 
    ``` git checkout gh-pages```를 했기 때문에 로컬에서 파일이 보이지 않는것이다.( master 브랜치에 있는 파일이기 때문 !)
    ```bash
    git checkout master
    ```
    를 입력하면 다시 로컬 파일에 ```_config.yml```이 보이게 된다.  
<br>

5. 번들을 다시 깔아준 뒤, 로컬에서 돌려본다.
    ```bash
    bundle install
    bundle exec jekyll serve
    ```

    > 정상 작동  

<br>

### 이슈 발생 2_ continuous-delivery 문제
푸시가 되지 않아 ..!  

### 이슈 해결 Try
bundle exec jekyll serve를 실행하려고 하는데 Dart Sass 2.0.0에서 제거될 calc() 외부의 분할과 관련된 두 가지 사용 중단 경고가 발생하는 것 같습니다. 권장 솔루션은 math.div() 또는 calc()를 사용하는 것입니다. 경고는 문제가 _sass/addon/commons.scss 및 jekyll-theme-chirpy.scss의 두 파일에서 발생함을 나타냅니다.

이 문제를 해결하려면 math.div() 또는 calc()를 사용하도록 해당 파일의 관련 코드를 업데이트해야 합니다. 필요한 사항을 변경했으면 bundle exec jekyll serve를 다시 실행하여 경고가 해결되었는지 확인하세요.

아래와 같이 수정하면 문제 해결
```bash
left: calc(#{ $cursor-width} / 2);
$top: -$offset * $tab-height + calc(( $tab-height - $tab-cursor-height) / 2);
```

<br>

### 이슈 발생 3_ continuous-delivery 문제
또 푸시가 되지 않아...
> 1. 문제는 hoonology.github.io 리포지토리에 대한 GitHub 페이지 웹 사이트 배포 중 빌드 실패입니다. 오류 메시지는 경로가 "404.html"인 파일을 리포지토리에서 찾을 수 없음을 나타내며, 이로 인해 웹 사이트가 배포되지 않습니다. 이는 파일이 삭제, 이름 변경 또는 다른 위치로 이동되었기 때문이거나 배포 구성 문제 때문일 수 있습니다.  
> 2. jekyll-seo-tag 플러그인과 관련된 것으로 보이며 jekyll-paginate 플러그인도 설치해야 합니다. 이 문제를 해결하려면 Gemfile에 jekyll-paginate 플러그인을 추가해야 합니다.


### 이슈 해결 Try
프로젝트에서 Gemfile을 열고 아래 내용 추가 
```bash
gem 'jekyll-paginate'
```
```bash
bundle install
```


### 이슈 발생 4_ continuous-delivery 문제
오류 메시지는 _sidebar.scss라는 Sass 파일에 문제가 있음을 보여줍니다. 특히 none으로 설정되는 CSS background-image 속성에 문제가 있는 것 같습니다.


이 문제를 해결하려면 다음 중 하나를 시도해 보십시오.


1. background-image 속성에서 참조되는 이미지 파일이 프로젝트 폴더의 올바른 위치에 있는지 확인하십시오.
2. 참조되는 이미지의 파일 확장자가 올바른지 확인하십시오(예: .jpg, .png 등).
3. 이미지 파일의 경로가 올바른지, Sass 코드에 오타나 구문 오류가 없는지 다시 확인하십시오.
4. 이미지가 필요하지 않은 경우 background-image 속성을 모두 제거해 볼 수 있습니다.
