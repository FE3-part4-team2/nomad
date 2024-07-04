**[Nomad 배포 바로가기](https://nomad-gold.vercel.app/)**

## 팀 소개
<table>
    <tr>
        <td align="center"><img src="https://github.com/eundin.png" width="150"></td>
        <td align="center"><img src="https://github.com/yulmai999.png" width="150"></td>
        <td align="center"><img src="" width="150"></td>
        <td align="center"><img src="" width="150"></td>
        <td align="center"><img src="https://github.com/FE3-part4-team2/-Nomad/assets/73398624/32b4370c-db54-4535-8c85-ae403ca47ad7" width="150"></td>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/eundin">장은진</a></td>
        <td align="center"><a href="https://github.com/yulmai999">김율민</a></td>
        <td align="center">김준형</td>
        <td align="center">이주영</td>
        <td align="center"><a href="https://github.com/jihee1103">최지희</a></td>
    </tr>
    <tr>
        <td align="center">팀장</td>
    </tr>
</table>

## 역할분담
### 장은진
- 내 체험등록 페이지
- 내 체험수정 페이지
- 드랍다운

### 김율민
- 예약현황페이지
- 로그인 액세스토큰, 리프레시 토큰처리
- 캘린더
- 다크모드 추가
- 사이드바,레이아웃 

### 김준형

### 이주영

### 최지희
- 메인페이지
- 모달/버튼 공통 컴포넌트
- 로고 디자인




## 🔨 사용 기술 및 도구

### 배포

<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

### 개발

<img src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/reqct_query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/next.js_12-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">


### 협업

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=eslint&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)

<br/>

## 폴더 구조

```bash
public
├── assets
│   └── icons
│   └── images
│       └── button-icon.png
│ 
src
├── apis 
├── types // 타입 지정 관련 파일(Props 타입은 해당 컴포넌트 상단에 지정)
├── components 
│   └──Layout
│   └── Input
│       └── Input.tsx
├── store // 전역 상태 관리
├── constants
│   └── userContext.ts
├── pages 
│   └── DashboardPage
│       └── DashboardPage.tsx
├── styles
│   └──GlobalStyle.css
├── utils  
│   └── calculateDate.ts
├── hooks  
    └── useHook.ts
```
<br/><br/>

## ✨ 서비스 주요 기능


### 📄 메인화면


### 📄 로그인&회원가입 페이지

### 📄 체험상세 페이지

### 📄 내정보 페이지
 #### 내정보
 #### 예약내역
 #### 내 체험관리
 #### 예약현황
     - 캘린더(리액트캘린더 라이브러리사용)
     - 캘린더모달(get, post, patch API를 사용하면 데이터 변화 실시간반영) *무한스크롤기능추가
     



<br/><br/>


## 💡 문제 및 해결

### 1️⃣ 문제 : 캘린더 모달을 열때 모달의 데이터가 갱신되기전에 모달이 열려서 화면이 깜빡이는 문제가있었음.
### 💡 해결 
- 리액트 쿼리의 isfetching 을 모달 컴포넌트 랜더링의 조건부로 붙여줘서 해결
<br/>

### 2️⃣ 
### 💡 해결 
- 

<br/>

## 🗒️ 팀 회고

#### 김율민
- 프로젝트를 시작할때 사용할 기술스택에 대한 충분한 사전공부가 안되었던거같다. 공부하는데 시간을 많이썼다.
  특히 캘린더를 만드는데 있어서 확실한 방향을 정하지못하고 이것저것 시도하다가 시간을 많이 잡아먹혔다. <br/>
  또, 프로젝트의 방향성이나 주제가 내가 원했던방향과 많이달라서 적극적으로 팀을 이끌기보다는 팀의 요구사항에 집중하는 수동적인 태도를 취했는데
  프로젝트 일정관리가 안되거나 부족한 마무리를 생각하면 아쉬운부분이다. 좀더 적극적으로 주도했어야했지않나라는 생각이든다.  



<br/><br/>
<br/><br/>

# Q & A


<br/><br/>
<br/><br/>
<br/><br/>
