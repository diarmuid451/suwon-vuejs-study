# Do-it 7장
## 1. 지식
### Vuex : 상태 관리 라이브러리
``` bash
# 상태 관리란?
상태 : 특정 데이터를 여러 컴포넌트가 공유하고 있을 때 그 데이터를 지칭
필요성 :
    1 props로 데이터를 전달 시 해당 화면과 최상위 사이에 있는 모든 컴포넌트에 props 설정
    2 이벤트 버스 활용시 단방향 데이터 흐름이 아니게 되어 흐름 파악 어려움
    3 컴포넌트가 너무 많아 관리가 어려운 복잡한 규모의 애플리케이션에서 사용
    
기능 : State, Getters, Mutations, Actions

```
### Vue Reactivity : 데이터 변화 감지하고 자동으로 화면을 갱신하려는 특성
``` bash
# 뷰의 화면 갱신 순서
    1 인스턴스 생성
    2 인스턴스 생성될 때 data속성에 정의된 객체들은 특정 변환 작업 진행
        - data에 정의된 모든 속성(객체)을 getter, setter형태로 변환(사용자 접근 X)
    3 watcher 속성 - 모든 컴포넌트에 존재하는 속성, 화면을 다시 그리는데 중요한 역할    

# 인스턴스 data속성에 반응성이 생기는 시기
인스턴스를 생성하는 시점 
    - 인스턴스를 정의할 때 data속성을 정의하지 않고 생성 후 data 속성을 추가하면 반응성 없음
```
### Server Side Rendering : 서버 사이드 렌더링
#### 서버 사이드 렌더링은 뷰에서 Nuxt.js 라이브러리로 제공
``` bash
# 서버 사이드 렌더링과 클라이언트 사이드 렌더링의 차이

클라이언트 사이드 렌더링 :
다 그려져 있지 않은 HTML 페이지를 브라우저에서 받고 프런트엔드 프레임워크과 같은 자바스크립트를 이용하여 나머지 부분을 그리는 것
장점 : 매끄러운 화면 전환, 사용자 경험의 향상

서버 사이드 렌더링 : 
완벽히 그려진 HTML 페이지를 브라우저에서 받는 것을 의미
장점: 검색 엔진 최적화(내용의 노출 정도가 높음), 초기 화면 렌더링 속도
```
## 2. 웹팩
``` bash
# 웹팩이란?
정의 : 서로 연관이 있는 모듈 간의 관계를 해석하여 정적인 자원으로 변환해 주는 변환 도구
- 파일간의 연관 관계를 파악하여 하나의 자바스크립트 파일로 변환해주는 변환 도구

* 왜 모든 파일의 내용을 하나의 파일에 담는가?
: 웹 앱의 로딩속도를 향상시키는 것과 연관

# 웹팩의 주요 속성
    1 entry : 웹팩으로 빌드(변환)할 대상 파일을 지정하는 속성
    2 output : 웹팩으로 빌드한 결과물의 위치와 파일 이름 등 세부 옵션을 설정하는 속성
    3 loader : 웹팩으로 빌드할 때 HTML, CSS, PNG(이미지) 파일 등을 자바스크립트로 변환하기 위해 필요한 설정을 정의하는 속성
    4 plugin : 웹팩으로 빌드하고 나온 결과물에 대해 추가 기능을 제공하는 속성
    5 resolve : 웹팩으로 빌드할 때 해당 파일을 어떻게 해석되는지 정의하는 속성
```
## 3. NPM
``` bash
# NPM(Node Package Manager)
정의 : 전 세계 자바스크립트 라이브러리가 존재하는 공개 저장소

# NPM 설치 명령어
- npm install 
    - --save 옵션 : package.json파일의 dependencies 속성에 라이브러리 이름 추가 
    - --save-dev 옵션 : package.json파일의 devDependencies 속성에 라이브러리 이름 추가     
    
# 전역 설치 VS 지역설치
    전역설치 : -global 옵션을 이용해 시스템 레벨에 설치 (-g 로도 가능, 마찬가지로 install 역시 i로 축약 가능)
    지역 설치 : 해당 프로젝트에 설치
    
# NPM 커스텀 명령어
    npm 설정 파일(package.json)의 script 속성 
    - 필요에 따라 명렁어 추가해서 사용 가능 
    
    예) npm run dev : 
    "webpack-dev-server --open --hot" 명령어를 입력한 것과 같은 효과
```