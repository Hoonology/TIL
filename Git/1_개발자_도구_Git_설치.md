# INDEX
- [학습목표](#학습목표)
- [Git 환경설정](#git-환경설정)
- [SSH 등록](#ssh-등록)

---
</br>
</br>
</br>


# 학습목표
- 자신이 사용하는 OS에 git 설치
- CLI 환경에서 git 명령어 입력

</br>

# Git 환경설정
```bash
git
```
사용자 정보
``` bash
git config --global user.name "나의 사용자 이름"
git config --global user.email "내 이메일 주소"
```

에디터 -> nano 에디터로 변경 
```bash
git config --global core.editor nano
```

</br>

# SSH 등록
최근 Github의 정책이 변경되어, HTTPS로 git을 사용할 때에는 토큰을 발행하여 접속해야 합니다. 반드시 알아야하는 내용이지만 지금 적용하기에는 상당히 번거롭고 추후 제공되는 토큰 콘텐츠에서 상세히 다루므로, 이 콘텐츠에서는 ssh를 이용해 github와 소통하는 법을 다룹니다.

***ssh***는 ***Secure shell***의 줄임말(Secure SHell)로, 보안이 강화된 shell 접속을 뜻합니다. CLI 환경(터미널)에서 다른 PC에 접속하거나 요청할 때 사용하며, 비대칭키를 이용해 사용자를 인증합니다. 요청이나 비대칭키에 대해서는 추후 제공되는 콘텐츠에서 상세히 다룹니다. 이 콘텐츠에서는 github에 ssh 공개키(비대칭키 중 하나)를 등록하는 방법과 ssh를 이용해 git clone하는 방법을 안내합니다.