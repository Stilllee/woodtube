# WoodTube

![image](https://github.com/Stilllee/woodtube/assets/108785772/849d86bb-5f29-4883-9550-f09d465a8adc)
<br>

[woodTube](https://woodtube.netlify.app/)는 유튜브 API를 사용하여 실시간으로 동영상을 검색하고 시청할 수 있는 사이트입니다.
<br>

## 목차

- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
  <br>

## 기술 스택

- **React**: UI 구축을 위한 주요 라이브러리
- **Create React App**: 프로젝트 초기 설정을 위한 환경
- **tailwindcss**: 반응형 디자인 및 스타일링
- **axios** & **React Query**: 데이터 요청 및 상태 관리
- **react-router-dom**: 페이지 라우팅을 위한 라이브러리
- 기타 유틸리티: timeago.js (시간 표시), react-icons (아이콘 사용)
  <br>

## 주요 기능

### 1. 홈 페이지에 인기 동영상 목록 표시

![홈 페이지](https://github.com/Stilllee/woodtube/assets/108785772/1fa0bb60-5c27-4b1b-ad9b-26e464455f2d)

- 홈 페이지(`/`)에서는 유튜브의 가장 인기 있는 동영상 목록(Most Popular)이 표시됩니다. 이 기능을 통해 사용자는 사이트에 접속하자마자 현재 가장 인기 있는 동영상들을 쉽게 확인하고 탐색할 수 있습니다.
  <br>

### 2. 동적 검색 기능

![동적 검색 기능](https://github.com/Stilllee/woodtube/assets/108785772/9729639c-04cc-4bdb-811c-fcaa605d6667)

- `SearchHeader` 컴포넌트를 통해 유튜브 동영상을 검색할 수 있습니다.
- `useNavigate`와 `useParams`를 사용하여 검색된 키워드에 따라 동영상 목록 페이지로 라우팅합니다.
  <br>

### 3. 동영상 및 채널 정보 표시

![VideoCard](https://github.com/Stilllee/woodtube/assets/108785772/d56e385a-90a4-4a39-bf60-9aecf169a2e2)

- `VideoCard` 컴포넌트는 각 동영상의 섬네일, 제목, 채널명, 업로드 시간을 표시합니다.
  <br>

![상세 페이지로 이동](https://github.com/Stilllee/woodtube/assets/108785772/f5f682b4-5af5-416a-9537-52a21adeeb3f)

- 사용자가 카드를 클릭하면 해당 동영상의 상세 페이지로 이동합니다.
  <br>

![ChannelInfo](https://github.com/Stilllee/woodtube/assets/108785772/e5e937de-3388-426e-88ff-a82f7d6eead0)

- `ChannelInfo` 컴포넌트는 선택된 채널의 이미지와 이름을 보여줍니다. `react-query`를 사용하여 채널 이미지 URL을 가져옵니다.
  <br>

![RelatedVideos](https://github.com/Stilllee/woodtube/assets/108785772/f204d655-fa53-47f6-890d-183ef6660d5a)

- `RelatedVideos` 컴포넌트는 선택된 동영상과 관련된 다른 동영상 목록을 표시합니다. `react-query`를 사용하여 데이터를 로딩하고, 에러 처리를 합니다.
  <br>

### 4. 상태 관리 및 데이터 요청

- `YoutubeApiProvider`를 통해 유튜브 API와 관련된 데이터를 전역적으로 관리합니다.
- `QueryClientProvider`와 `react-query` 라이브러리를 사용하여 서버 상태를 관리하고, 비동기 데이터 요청 및 캐싱을 처리합니다.
  <br>

### 5. 라우팅 및 페이지 구성

- `Outlet` 컴포넌트를 사용하여 다양한 페이지 컴포넌트를 동적으로 렌더링합니다. 이를 통해 검색 결과 및 동영상 상세 페이지로의 이동을 관리합니다.
  <br>

### 6. 반응형 레이아웃

![반응형1](https://github.com/Stilllee/woodtube/assets/108785772/e989d201-0272-4a92-baea-7460659d757d)
![반응형2](https://github.com/Stilllee/woodtube/assets/108785772/5509afba-7d3f-426a-874e-7b7ab0ad4c71)

- Tailwind CSS를 활용해 다양한 화면 크기에 최적화된 사용자 경험을 제공합니다.
