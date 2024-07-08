**[Nomad 배포 바로가기](https://nomad-gold.vercel.app/)**

## 팀 소개
<table>
    <tr>
        <td align="center"><img src="https://github.com/eundin.png" width="150"></td>
        <td align="center"><img src="https://github.com/yulmai999.png" width="150"></td>
        <td align="center"><img src="https://github.com/FE3-part4-team2/-Nomad/assets/91825771/883065db-d08f-4fd6-9cf0-02863870c6c5" width="150"></td>
        <td align="center"><img src="https://github.com/2zzzyoung.png" width="150"></td>
        <td align="center"><img src="https://github.com/FE3-part4-team2/-Nomad/assets/73398624/32b4370c-db54-4535-8c85-ae403ca47ad7" width="150"></td>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/eundin">장은진</a></td>
        <td align="center"><a href="https://github.com/yulmai999">김율민</a></td>
        <td align="center"><a href="https://github.com/jjunhyuki">김준형</a></td>
        <td align="center"><a href="https://github.com/2zzzyoung">이주영</td>
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
- 내정보
- 예약 내역
- 내 체험 관리
- 404 페이지
- 알림 토스트

### 이주영
- 체험 상세 페이지
- 로그인, 회원가입 페이지
- 헤더, 푸터

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
![main](https://github.com/FE3-part4-team2/-Nomad/assets/73398624/35a1d410-c516-4235-a62b-b09aaba92e86)

### 📄 로그인&회원가입 페이지
![loginsignin](https://github.com/FE3-part4-team2/-Nomad/assets/73398624/9dbf59a8-4c85-49f5-bbe8-1cbdea830f0d)

### 📄 체험상세 페이지

### 📄 내정보 페이지
 #### 내정보
 #### 예약내역
 ![예약관리](https://github.com/FE3-part4-team2/-Nomad/assets/73398624/e64231c1-8e59-4334-b634-82331171c0fb)

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

#### 장은진
- 초반에 서로 진행상황 공유가 잘 안되고 소통이 부족했던 거 같다. 이로 인해 프로젝트 진행이 더뎠지만, 후반에 가서는 서로 진행상황을 자세히 공유하고 소통하면서 프로젝트 진행이 원활히 됐다. 기술 스택도 중요하지만 이런 커뮤니케이션도 팀 프로젝트 진행에 중요한 부분이라는 걸 깨달았다.

#### 최지희
- Keep<br/>
  - 초반에 기술스택을 정할 때 독단으로 정하는 것이 아닌, 왜 넣고싶고, 넣으면 어떤점이 좋을지 논의를 거쳐 정할 수 있어 좋았다.
  - 컨벤션을 의식하고, 지키려 노력했으며 그 덕분에 나중에 유지보수할때 코드가 읽기 쉬웠다. 
- Problem<br/>
  - 협업팀에 비해 시간적 여유가 있었다는 생각때문인지 초반에 작업기한을 잘 지키지 못했다. 후반에 위기감을 느껴 일정이나 완성도를 본인이 주도했으나 좀 더 일찍 리더십을 발휘했으면 좋았겠다는 아쉬운 점이 있다.
  - ESlint를 모두가 넣으니까 우리도 넣어보자 하며 이 프로젝트에 있어서 이 규칙이 왜 필요한지를 고려하지 않고 넣어 불필요한 타임로스가 생겨버렸다. 
- Try/배운점<br/>
  - 기술적인 역할을 하는 컴포넌트와 UI를 나타내는 컴포넌트를 나누는 Container/Presentational 패턴을 처음 도전해봤는데 유지보수를 위해서는 관심사분리를 철저하고 일관성있게 하는것이 중요하다고 느꼈다.
  - 컨벤션이나 ESlint, 기술스택을 넣거나 정할때 이 프로젝트에서 정말 필요한가, 왜 필요한가?를 충분히 고려한 후 넣어야 한다고 느꼈다.
  - 누군가가 이끌어주겠지, 어떻게든 되겠지 생각하지 말고 모두가 책임감을 갖고 주도적으로 프로젝트를 끌어가야한다. 

<br/><br/>
<br/><br/>

# Q & A


<br/><br/>
<br/><br/>
<br/><br/>
