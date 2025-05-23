export const project2 = {
  name: 'Van Cleef & Arpels Renewal',
  pointcolor: 'before:bg-[#DDF1EF]',
  title: 'Shopping Mall project',
  subtext:
    '쇼핑몰 프로젝트로 Van Cleef & Arpels 을 리뉴얼하는 작업입니다. \n 브랜드의 고급스러움을 강조하며 현대적인 디자인으로 새롭게 만들었습니다.',
  data: '2025.03 - 진행중 (70% 완성)',
  team: '4인 (프론트엔드 4명)',
  tag: ['팀'],
  imgurl:
    'https://raw.githubusercontent.com/to-flatwhite1/yeji-portfolio/refs/heads/main/src/assets/images/vancleef_main.webp',
  giturl: 'https://github.com/msun97/project-vancleef',
  deployurl: 'https://project-vancleef.vercel.app/',
  detailimginfo: [
    {
      imgurl:
        'https://raw.githubusercontent.com/to-flatwhite1/yeji-portfolio/refs/heads/main/src/assets/images/vancleef_main.webp',
      subject: '메인 화면',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/to-flatwhite1/yeji-portfolio/refs/heads/main/src/assets/images/vancleef_signup.webp',
      subject: '회원가입',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/to-flatwhite1/yeji-portfolio/refs/heads/main/src/assets/images/vancleef_login.webp',
      subject: '로그인',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/to-flatwhite1/yeji-portfolio/refs/heads/main/src/assets/images/vancleef_detail.webp',
      subject: '상품 리스트 페이지',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/to-flatwhite1/yeji-portfolio/refs/heads/main/src/assets/images/vancleef_deailpage.webp',
      subject: '상품 상세페이지',
    },
  ],
  featinfo: [
    '반클리프 아펠 홈페이지에서 data 수집',
    '구매하기 찜 기능',
    '입력한 상품 검색 가능',
    '회원 가입, 프로필 비밀번호 변경, 로그인 로그아웃 구현',
  ],
  tools: [
    {
      title: 'Vite',
      detail:
        'Vite는 최신 브라우저의 기본 ES 모듈 기능을 사용하여 더 빠른 개발 서버 시작 및 주문형 컴파일을 가능하게 합니다. 이로 인해 CRA의 Webpack 기반 서버에 비해 응답성이 뛰어난 개발 경험을 얻을 수 있었습니다.',
    },
    {
      title: 'React',
      detail:
        'React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.',
    },
    {
      title: 'Redux Toolkit',
      detail:
        'Redux Toolkit은 Redux 상태 관리 라이브러리를 사용하기 위한 보조 도구입니다. Redux보다 코드를 간결하게 작성할 수 있게 도와주며, 전역으로 상태를 관리할 수 있습니다.',
    },
    {
      title: 'Redux',
      detail:
        '애플리케이션에서 상태 관리를 단순화해주는 라이브러리입니다. 애플리케이션의 상태를 중앙에서 관리하며, 상태 변경을 예측 가능한 방식으로 처리할 수 있도록 도와줍니다. 이를 통해 여러 컴포넌트 간의 상태 공유와 복잡한 상태 변경 로직을 효율적으로 관리할 수 있습니다.',
    },
    {
      title: 'Tailwind Css',
      detail:
        'Tailwind CSS는 theme 설정을 통해 변수처럼 색상, 폰트 크기 등을 관리할 수 있어 유지보수가 편리하다. 또한 클래스명을 통해 코드에서 스타일을 즉시 확인할 수 있어 보기 편합니다.',
    },
  ],
  parts: [
    {
      title: '반클리프 아펠 사이트에서 데이터 수집',
      detailList: [
        `각 제품의 속성(Property)별 key-value 구조를 정의하여 체계적으로 데이터를 정리하였습니다.`,
        `상품명, 가격, 이미지, 상세 설명 등 주요 정보를 분류하여 API를 정리하였습니다.`,
        ,
      ],
    },
    {
      title: '제품리스트페이지, 제품구매디테일, 상세정보(제품세부사항), 추천상품, \n사이즈가이드(type 2가지) 구현',
      detailList: [
        `리액트 바이트(React-Boot) 기반으로 앱 생성 및 라우팅 설정하며 리덕스(Redux)를 활용한 상태 관리 및 데이터 흐름 관리를 하였습니다.`,
        `제품 리스트 페이지에서 API를 통해 데이터를 불러오고 필터 및 정렬 기능을 구현하였습니다.`,
        `제품 상세 페이지에서 선택한 제품 정보를 useParams로 PruductdetailPage에서 불러왔습니다.`,
        `추천 상품 섹션을 구현하여 관련 제품을 동적으로 노출하였습니다.`,
        `사이즈 가이드를 두 가지 타입으로 제공하여 해당 카테고리에 맞게 조건부 렌더링 처리 하였습니다.`,
      ],
    },
  ],
};
