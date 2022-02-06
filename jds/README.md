# Do-it 6장

> 실전 애플리케이션 만들기

## 0. 뷰 CLI 설치

``` bash
# Command Line Interface(CLI)
커맨드 창에서 명령어로 특정 동작을 수행할 수 있는 도구

# 뷰 CLI 설치
명령 프롬프트 창(윈도우 환경)에서 'npm install vue-cli -global' 입력
- 설치 후 'vue' 입력시
    'Usage', 'Options', 'Commands' 항목 조회시 설치 완료

# 뷰 CLI 명령어
초기 프로젝트 구성 명령어 : 'vue init'
    webpack, wabpack-simple, browerify, browserify-simple, simple, pwa
```

## 1. 프로젝트 초기 설정
### 반응형 웹 디자인 태그 설정
``` bash
# viewprot <meta> 태그 추가
    - width=device-width : 기기의 너비만큼 웹 페이지의 너비를 지정
    - initial-scale=1.0 : 페이지의 배율로, 페이지가 로딩되었을 때 줌(ZOOM) 레벨   
```

### 어썸 아이콘 CSS 설정, 폰트와 바비콘 설정
``` bash
# favicon
    - 웹 사이트 제목의 왼쪽에 표시되는 로고
      '<link rel="shortcut icon" href="src/assets/favicon.ico" type="image/x-icon">'
      '<link rel="icon" href="src/assets/favicon.ico" type="image/x-icon">'
    
# font
    - 구글 폰트 중 Ubuntu 
       '<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">'
```
## 2. 컴포넌트 등록
### components 생성
    TodoHeader.vue, TodoInput.vue, TodoList.vue, TodoFooter.vue 생성
    
### componets 등록
    - 최상위 컴포넌트인 App.vue에 등록 
        components: {'컴포넌트 이름' : 컴포넌트 내용}
    - <div id="app"> 안에 컴포넌트 태그 삽입

## 3. 컴포넌트 내용 구현
### TodoHeader : 애플리케이션 제목
    - 제목 추가 : <div> 태그 대신 <header> 태그 사용    
    * scoped : 뷰에서 지원하는 속성, 스타일 정의를 해당 컴포넌트에만 적용 
### TodoInput : 할일 입력하는 컴포넌트
    - input , button 추가 : input 내용을 button 클릭시 localStorage에 저장하는 기능 추가
    - 아이콘을 이용해 직관전인 버튼 모양 제작 : button 태그 대신 span+i 태그 조합 사용(디자인 추세?)
### TodoList : 저장된 할 일 목록을 표시
    - 로컬 스토리지의 데이터 개수만큼 목록에 추가하여 표시
        └ 로컬 스토리지 데이터를 뷰 데이터에 저장 → 뷰 데이터의 아이템 개수만큼 리스트 아이템 표시
    - 할 일 삭제 기능
        └ 선택한 일을 뷰에서 인식 → 선택한 할 일을 로컬 스토리지에서 삭제 → 선택한 할 일을 뷰 데이터에서 삭제
### TodoFooter : 모두 삭제하기 버튼
    - 로컬 스토리지의 데이터 전부 삭제

## 4. 애플리케이션 구조 개선
### 한 영역의 처리 결과를 다른 영역에서 감지하지 못하는 문제 해결
    - 최상위 컴포넌트에 데이터를 정의하고, 하위 컴포넌트에 props로 전달

## 5. 추가 기능
### 뷰 애니메이션
    - transition-group 태그 이용
### 뷰 모달
    - alert 창 대용