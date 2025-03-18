import { project1 } from './projecsDetailDatas/project1';
import { project2 } from './projecsDetailDatas/project2';
import { project8 } from './projecsDetailDatas/project8';
import { project9 } from './projecsDetailDatas/project9';

export const projectData = [
  {
    name: project2.name,
    type: 'team',
    title: project2.title,
    subject: 'Shopping Mall project',
    tag: project2.tag,
    imgurl: project2.imgurl,
    giturl: project2.giturl,
    deployurl: project2.deployurl,
  },
  {
    name: project1.name,
    type: 'team',
    title: project1.title,
    subject: '영화 감상 OTT Platform',
    tag: project1.tag,
    imgurl: project1.imgurl,
    giturl: project1.giturl,
    deployurl: project1.deployurl,
  },
  {
    name: project8.name,
    type: 'single',
    title: project8.title,
    subject: 'Next.js samsung-sdi 클론코딩',
    tag: project8.tag,
    imgurl: project8.imgurl,
    giturl: project8.giturl,
    deployurl: project8.deployurl,
  },
  {
    name: project9.name,
    type: 'single',
    title: project9.title,
    subject: '설화수 웹사이트 리뉴얼',
    tag: project9.tag,
    imgurl: project9.imgurl /* thumnailIMG */,
    giturl: project9.giturl,
    deployurl: project9.deployurl,
  },
];
