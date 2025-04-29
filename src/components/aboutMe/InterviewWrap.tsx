import tw from 'tailwind-styled-components';
import PointText from '../atoms/text/PointText';

const RightContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-20
`;

const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
  pb-6
`;

const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

const MyMindTxt = tw.div`
  relative
  text-base
  mb-5
  bg-lightGray
  p-5
  rounded-tl-2xl
  rounded-tr-2xl  
  rounded-bl-2xl
`;

const InterviewWrap = () => {
  return (
    <RightContainer>
      <MyMind>
        <Tit>Interview</Tit>
        <MyMindTxt>
          <SubTit>Q. React 기반 프로젝트에서 협업과 상태 관리를 어떻게 경험했고, 어떤 점을 배우셨나요?</SubTit>
          React 기반 프론트엔드 구현 시, 페이지 간 상태 공유 문제를 해결하기 위해 Redux를 도입했고, 공통 컴포넌트 구조를
          설계하여 유지보수성을 높였습니다. 또한, 상태 관리의 중요성도 깊이 느꼈습니다.
          <PointText>Redux를 활용해 전역 상태를 관리</PointText>하면서, 기능이 많아질수록 상태가 어떻게 흘러가는지
          명확히 이해하는 것이 효율적인 개발로 이어진다는 점을 직접 체험했습니다. 또한{' '}
          <PointText>styled-components</PointText>를 활용해 UI를 구성하면서도{' '}
          <PointText>재사용성과 유지보수성</PointText>을 고려하는 연습을 했습니다.{' '}
          <PointText>협업 시 GitHub를 통해 Git Flow를 적용</PointText>했고, Pull Request 리뷰를 통해 코드 품질을
          관리했습니다. merge conflict 발생 시 직접 해결하며 Git 활용 역량을 쌓았습니다. 이 프로젝트를 통해 단순한 기능
          구현을 넘어, 팀과 함께 더 좋은 결과물을 만들어 가는 법을 배웠습니다. “팀원들과 얼마나 원활하게 소통하느냐”가
          프로젝트의 완성도를 결정한다는 걸 깨달았습니다. 서로 다른 파트를 맡아 개발하면서도 데이터 구조를 맞추기 위해
          끊임없이 의견을 나누었고, 예상치 못한 오류가 발생했을 때도 팀원들과 함께{' '}
          <PointText>해결책을 고민하며 성장</PointText>할 수 있었습니다.
          <br />
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?</SubTit>
          개발 과정에서 <PointText>사용자의 니즈와 경험을 최우선으로 생각 </PointText>합니다. 그리고 문제가 발생했을
          때는 단순히 해결책을 찾는 것을 넘어, 근본 원인을 분석하고 이를 통해 성장하는 기회로 삼습니다. 한 번은 예상치
          못한 버그가 발생했을 때, 코드를 꼼꼼히 분석하며 문제의 본질을 파악했고, 이 과정에서 새로운 기술적 인사이트를
          얻었습니다. 이런 경험들을 통해 기획 단계에서의 철저한 준비와 체계적인 코드 아키텍처의 중요성을 알게
          되었습니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 자기계발을 위해 어떤 것들을 해왔는지?</SubTit>
          전공자가 아니기 때문에 새로운 기술과 이론을 습득하기 위해 다양한 방법으로 공부하고 있습니다. <br />그 중에서도
          자격증 공부와 기술적인 배경 지식에 대해서도 집중해왔습니다. 먼저,
          <PointText>웹디자인기능사와 정보처리 산업기사 필기 시험에 합격</PointText>하였습니다. 이를 통해 실무에서
          필요한 기본적인 지식과 기술을 체계적으로 익혔으며, 개발자로서의 이해도를 높일 수 있었습니다. 또한, 새로운
          기술과 트렌드에 대한 학습을 꾸준히 해왔습니다.
          <PointText>동영상 강의나 오프라인 강의</PointText>를 통해 최신 기술에 대한 이론과 실습을 병행하며, 프론트엔드
          개발에 필요한 다양한 도구와 라이브러리들을 학습 하고 있습니다.
        </MyMindTxt>
      </MyMind>
    </RightContainer>
  );
};

export default InterviewWrap;
