# git branch

## 브랜치 명령어

### `git branch`

- git 프로젝트의 브랜치 목록 출력

### `git branch <브랜치명>`

- 새로운 브랜치 생성
- 작업 공간을 생성

### `git switch <브랜치명>`

- 브랜치 전환
- 작업 공간을 바꿈

### `git branch -d <브랜치명>`

- 병합이 된 브랜치만 삭제

### `git branch -D <브랜치명>`

- 병합이 안 된 브랜치도 삭제 (강제 삭제)
- 조심히 사용해야 한다

## 서브(기능) 브랜치 워크플로우

1. 브랜치 생성 `git branch <브랜치명>`
2. 브랜치 전환 `git switch <브랜치명>`
3. 작업
4. `git add .`
5. `git commit -m "커밋 메세지"`
6. 브랜치 전환 `git switch main`
7. 브랜치 병합 `git merge <브랜치명>`
8. (선택)브랜치 삭제 `git branch -d <브랜치명>`
   - 추후 문제 발생 가능성: 동일한 브랜치명을 못 사용한다는 문제

## github로 병합하기
5번까지 하고 
6. git push origin 현재 브랜치명
7. github 접속
8. github 병합처리
   pull requests 클릭 -> new pull requests 클릭
   compare을 병합할 브랜치로 변경
   create pull request 클릭
   제목과 설명 작성
   create pull request 클릭
   코드 리뷰
   3개의 병합 방법 중 하나를 선택하여 병합처리
   브랜치 삭제
   (로컬) git switch main
   (로컬) git pull origin main
   (로컬) git branch -D 브랜치명
   