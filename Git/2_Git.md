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

![git_add](/Git/asset/2_Git/git_add.png)

```Unstaged files```를 ```Staging area```로 추가 !

