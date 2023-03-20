# INDEX

- [Git 인트로](#git-인트로)
- [Git과 Github](#git과-github)
    - [Git](#git)
    - [Github](#github)
    - [Repository](#git-repository--저장소)
        - [Fork](#fork) 
        - [Clone](#clone) 
        - [Pull](#pull) 
- [Git Command](#git-command)
- [Git 혼자 작업하기](#git-혼자-작업하기)
  - [순서(git init-add-commit-push)](#순서)
  - [restore](#restore)
  - [git add](#git-add)
  - [git reset](#git-reset)
  - [git push](#git-push)
- [Git Command Quiz](#git-command-quiz)
  

---

</br>
</br>
</br>

# Git 인트로

Git이란 개발자의 코드를 효율적으로 관리하기 위해서 개발된 ‘분산형 버전 관리 시스템’ 입니다.

`commit`이라는 기능을 통해서 변경 사항에 대한 스냅샷이 만들어지고 이전의 기록들에 대한 추적이 가능하다면 버전 관리뿐만 아니라 회사에서 협업을 할 때도 굉장히 유용하겠죠?

Git에서는 이렇게 소스 코드가 변경된 이력을 쉽게 확인할 수 있고, 특정 시점에 저장된 버전과 비교하거나 **특정 시점으로 되돌아갈 수도 있습니다**.

</br>

# Git과 Github

Git 을 통해서 버전관리!  
그럼 Github는 무엇일까 ?

## Git
소스 코드 기록 관리 및 추적 ( 버전 관리 시스템 )
## Github
Git Repository를 관리하는 클라우드 기반 서비스

</br>
Github에서 Code Review 등을 통해 협업이 가능하고, 수많은 오픈 소스 프로젝트들이 GitHub로부터 호스팅되고 있어서, 누구든 자유롭게 기여할 수 있습니다.

</br>

### Git Repository : 저장소
  - Local Repository, Remote Repository

![Repository](/Git/asset/2_Git/%08git_repository.png)

</br>

### `Fork`

> 프로젝트에 contribute을 하기 위해 원격 저장소를 내 원격 저장소로 가지고 오는 작업

![fork1](/Git/asset/2_Git/fork1.png)

</br>

### `Clone`

> 원격저장소(Remote Repository)에 있는 코드를 Clone 해서 내 컴퓨터(Local)로 가지고 오는 작업

</br>
Remote Repository에 React 코드를 옮겨온 상태

![fork2](/Git/asset/2_Git/fork2.png)
Local Repository에서 변경된 사항을 Remote Repository 에 업로드하기 위해 `Push`

</br>

### `Pull`

> Remote Repository에서 변경 사항이 있을 때 Local Repository 로 가져오는 작업

![pull](/Git/asset/2_Git/pull.png)

</br>

## **Git Command**


| Command     | Description |
|-------------|------------------------------------------------------------------------------------------------------|
| Fork        | GitHub 계정에 리포지토리 사본 생성 |
| Clone       | 컴퓨터에 원격 저장소의 로컬 복사본 생성|
| Status      |   로컬 저장소의 현재 상태 표시 |
| Restore     | 파일을 이전 버전으로 복원 |
| Add         | 파일에 대한 변경 사항을 스테이징 영역에 추가|
| Commit      | 로컬 리포지토리의 파일에 대한 변경 사항 저장 |
| Reset       | 리포지토리를 이전 상태로 재설정 |
| Log         | 리포지토리에 대한 커밋 기록 표시 |
| Pull        |원격 저장소에서 변경 사항을 가져와 로컬 저장소와 병합|
| Push        | 커밋된 변경 사항을 원격 저장소로 전송 |
| Init        | 디렉터리에서 새 Git 리포지토리 초기화 |
| Remote add  | 새 원격 저장소 추가 |
| Remote -v   | 로컬 리포지토리와 연결된 원격 리포지토리 목록 표시 |


</br>

---
</br>
</br>
</br>

# Git 혼자 작업하기
- 나만의 오픈소스 프로젝트 제작의 절차
- Git으로 관리하며 누구나 contribute 하는 방법

## 순서

![overview](/Git/asset/2_Git/workflow_overview.png)

1. 오픈 소스 코드를 저장할 디렉토리 생성  
```local Git repository``` 생성 
    ``` bash
    git init
    ```

2. 코드 작성 후 저장
    ```bash
    git add
    ```
3. ```staging area```의 파일 ```commit``` 
    ```bash
    git commit -m "message"
    ```
4. ```local repository```에 기록한 내역을 ```push```
    ```bash
    git push
    ```
</br>

### restore
```commit``` 되지 않은 ```Local Repository```의 변경사항 폐기
```bash
git restore <파일명>
```

### git add

![git_add](/Git/asset/2_Git/git_un.png)

```Unstaged files```를 ```Staging area```로 추가 !

- git의 트래킹이 되고 있지 않은 파일들에서 git의 관리 하에 있는 ```Staging area```로 파일들을 추가하는 명령어

`git add` 후, `Staging area`로 올려 놓은 상태에서 수정을 한다면, `staged + modifed`인 상태  
즉, git add 명령을 실행하면 Git은 파일을 바로 staged 상태로 만든다. 이 때, commit을 하면 staged 되어 있는 파일만 commit 된다. gitt add 후에 또 파일을 수정하고 싶다면 `git add` 명령을 다시 실행해서 최신 버전을 `staged` 상태로 만들어야한다.



</br>

### Git의 세 가지 영역 및 상태
- Untracked area : Git이 관리하고 있지 않은 영역  
- Tracked area : Git의 관리를 받는 영역
  - Unmodified : 기존에 커밋했던 파일을 수정하지 않은 상태
  - Modiofied : 기존에 커밋했던 파일을 수정한 상태
  - Staged : 커밋이 가능한 상태

</br>

![git commit](/Git/asset/2_Git/%08git_commit.png)

### git reset
- commit한 기록을 취소하고 에러를 수정
- 아직 Remote Repository에 업로드 되지 않고 Local Repository에만 commit 해 놓은 기록이라면 reset 명령어를 통해서 commit 을 취소 가능

![git reset](/Git/asset/2_Git/git_reset.png)

가장 최근의 커밋 취소
```bash
git reset HEAD^
```

### git push
![git push](/Git/asset/2_Git/git_push.png)

### git log
남긴 커밋들이 잘 기록되어 있는지 확인
![git loㅍ g](/Git/asset/2_Git/git_log.png)

</br>

## Git Command Quiz

### git remote
혼자 작업을 조금 진행하고 commit 기록을 남겼습니다. 내 Remote Repository와 연결해서 Remote 상에도 이 코드를 적용해야겠어요. origin이라는 이름으로 내 Remote Repository를 등록하세요. 내 Repository 링크는 https://github.com/kimcoding/test 입니다.

```bash
git remote add origin
```

</br>

페어와 함께 작업을 진행하려고 합니다. 지금까지 main 브랜치에 커밋한 기록을 방금 등록한 origin remote repository에 올려서, 페어에게 코드를 공유해야겠어요.

``` bash
git push origin main
```

### git remote

</br>


 페어가 내 Remote Repository를 Fork 했다고 합니다. 페어의 Remote Repository를 내 Local에 pair라는 이름으로 등록해야겠어요. 페어의 리파지토리 링크는 https://github.com/pair/test 입니다.

```bash
git remote add pair https://github.com/pair/test
```
리모트 리파지토리가 잘 연결된 것이 맞는지 모르겠어요. 연결된 리모트 리파지토리의 목록과 주소들을 확인해 볼까요?

```bash
git remote -v
```

</br>

리모트 연결이 완료되었으니 페어와 나누어서 작업을 진행했습니다. 내 commit을 Push하기 전에 페어가 작업해서 본인의 Remote Repository에 올려 놓은 내용을 합치려고 합니다. 페어의 코드를 내 Local로 받아올 수 있을까요?
```bash
git pull pair main
```

특정 commit 시점으로부터 각기 다른 commit을 만들면, 기본적으로 다음과 같이 자동으로 merge가 됩니다. 이제 내 Remote Repository에도 Local의 내용을 반영합시다.

```bash
git push origin main
```

</br>

내가 footer.html 파일을 수정했습니다. 작업한 사항을 commit 하기 위해 먼저 staging area에 작업한 파일을 추가해주세요.
```bash
git add footer.html
```

</br>

staging area에 파일이 추가되었습니다. 'footer 수정' 이라는 메시지로 commit 을 진행해주세요.
```bash
git commit -m "footer 수정"
```
</br>

페어도 footer.html에 변경한 사항이 있다고 합니다. 내 커밋을 Remote에 푸시하기 전에 페어의 코드를 내 컴퓨터로 받아올 수 있을까요?
```bash
git pull pair main
```

</br>

앗.. 하필 페어도 footer.html 파일의 동일한 라인을 수정했군요. 페어가 작성한 파일과의 충돌이 발생했습니다. 더 진행하기 전에 이 충돌을 해결해야만 합니다. 파일 내 충돌하는 부분은 다음과 같은 모양을 띄고 있습니다. (enter를 눌러 터미널 창에서 확인하세요. 터미널에 나오는 내용은 실제 터미널에는 나오지 않습니다. 여러분이 파일을 어떻게 수정할 지를 보여주는 예시입니다.)

</br>

충돌이 생긴 부분의 수정을 완료했어요! 다시 Remote Repository에 Push 하기 위해서 수정한 파일을 staging area에 추가해주세요.

```bash
git add .
```

</br>

충돌이 해결된 후 staging area에 올라간 파일은 자동으로 commit 메시지가 생성됩니다. 자동 생성된 commit 메시지를 적용하는 명령어를 입력하세요.
```bash
git commit
```

</br>

다음과 같이 merge commit 메시지가 자동으로 생성됩니다. 이제 내 Remote Repository에도 Local Repository의 내용을 반영합시다.
```bash
git push origin main
```

</br>

## Branch
Github 에서 공동 프로젝트 Repository를 생성했어요. 각자의 Repository로 Fork 하고 clone 을 받았습니다. 내가 맡은 회원가입 기능을 구현하기 위해서 feat/signup 이라는 브랜치를 생성하고 해당 브랜치로 이동해 볼까요?
``` bash
git switch -c feat/signup
# c : 만들고 이동하겠다.
git checkout -b feat/signup
```

</br>

### 브랜치 확인
 feat/signup 브랜치를 만들었습니다. 생성한 브랜치 목록과 내가 현재 어떤 브랜치에 있는지 확인해 봅시다.
 ```bash
 git branch  # 목록
```
</br>

### 브랜치 만들기, 이동 (git checkout / switch)

기본 회원가입 기능 구현을 완료했습니다! 여기에 추가로 페이스북으로 가입하기 기능을 만들고 싶어요. 구현해놓은 기본 회원가입 기능이 망가질 수도 있으니 feat/signup-oauth 브랜치를 하나 더 만들어서 작업해 볼까요?


```bash
git switch -c feat/signup-oauth
```

</br>

### 브랜치 이동 (git checkout / switch)

 소셜 회원가입 기능까지 구현을 완료했습니다! 구현한 기능을 feat/signup 브랜치에 병합하려고 합니다. 먼저 feat/signup 브랜치로 이동하세요.

```bash
git checkout feat/signup
```

</br>

### 병합 (git merge)
feat/signup-oauth 브랜치의 내용을 feat/signup 브랜치로 병합하는 명령어를 입력하세요.

```bash
git merge feat/signup-oauth
```

</br>


회원가입 기능 구현이 완료된 feat/signup 브랜치를 Remote Repository로 업로드하세요.

```bash
git push origin feat/signup
```

</br>

### 임시 저장(git stash)

구글 로그인 기능도 추가를 해 보려고 시도하다가 어려워서 그만두었습니다. 작업하던 코드를 잠시 다른 공간에 저장해 둘 방법이 있을까요?
```bash
git stash
```