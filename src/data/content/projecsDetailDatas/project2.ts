export const project2 = {
  name: 'Shopping Mall project',
  pointcolor: 'before:bg-[#DDF1EF]',
  title: 'Van Cleef & Arpels Renewal',
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
        'https://raw.githubusercontent.com/to-flatwhite1/yeji_portfolio-main/refs/heads/main/src/assets/images/Reelpick_signup.webp',
      subject: '회원가입',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/to-flatwhite1/yeji_portfolio-main/refs/heads/main/src/assets/images/ReelPick_login.webp',
      subject: '로그인',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/to-flatwhite1/yeji_portfolio-main/refs/heads/main/src/assets/images/Reelpick_membership.webp',
      subject: '멤버십',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/to-flatwhite1/yeji_portfolio-main/refs/heads/main/src/assets/images/Reelpick_mypage.webp',
      subject: '마이페이지',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/to-flatwhite1/yeji_portfolio-main/refs/heads/main/src/assets/images/Reelpick_playList.webp',
      subject: '영화 플레이리스트',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/to-flatwhite1/yeji_portfolio-main/refs/heads/main/src/assets/images/Reelpick_playList_detail.webp',
      subject: '영화 상세페이지',
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
      title: '마이페이지,로그인 로그아웃 회원가입',
      detailList: [
        `리액트 바이트(React-Boot) 기반으로 앱 생성 및 라우팅 설정하며 리덕스(Redux)를 활용한 상태 관리 및 데이터 흐름 관리를 하였습니다.\n로컬스토리지를 이용한 사용자 정보 저장 및 유지 기능 구현 하였습니다.`,
      ],
    },
    {
      title: '와이어프레임',
      detailList: [`디자인 작업을 위해  \`Figma\`을 활용해 팀원들과 [와이어프레임]으로 디자인 구체화 함`],
    },
  ],
};
