import styled from 'styled-components';
import dlh from '../../images/dlh.avif';
import shirmp from '../../images/shrimp.css.avif';
import chameleon from '../../images/chameleon.avif';
import fn from '../../images/fn.avif';

export const projects = [
  {
    title: '🦎 Chameleon',
    description: 'A URL shortener that helps digital marketers track campaigns performance',
    imageSrc: chameleon,
    link: 'https://github.com/scostadavid/chameleon',
  },
  {
    title: '🎯 Focus Nook',
    description: 'A productivity app that helps users focus and complete tasks more efficiently',
    imageSrc: fn,
    link: 'https://scostadavid.github.io/focusnook/',
  },
  {
    title: '🦐 Shrimp.css',
    description: 'A CSS framework that makes it easy to style markdown-generated HTML pages',
    imageSrc: shirmp,
    link: 'https://scostadavid.github.io/shrimp.css',
  },
  {
    title: '🕹️ Dawn\'s Lighthouse',
    description: 'A PC platformer game that tells the story of a sailor trapped in a lighthouse',
    imageSrc: dlh,
    link: 'https://gamejolt.com/games/dawnslighthouse/574359',
  },
];


export const GridList = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
`;