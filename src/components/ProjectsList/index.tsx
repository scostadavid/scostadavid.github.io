import styled from 'styled-components';
import dlh from '../../images/dlh.avif';
import shirmp from '../../images/shrimp.css.avif';
import gof from '../../images/gameoflife.webp';
import fn from '../../images/fn.avif';

export const projects = [
  {
    title: '🎯 Focus nook',
    description: 'Productivity focused app',
    imageSrc: fn,
    link: 'https://scostadavid.github.io/focusnook/',
  },
  {
    title: '🦐 shrimp.css',
    description: 'Classless CSS framework for markdown generated html',
    imageSrc: shirmp,
    link: 'https://scostadavid.github.io/shrimp.css',
  },
  {
    title: '🌱 Game of life',
    description: 'C++ cellular automata simulation',
    imageSrc: gof,
    link: 'https://github.com/scostadavid/game-of-life',
  },
  {
    title: '🕹️ Dawn\'s Lighthouse',
    description: 'C# plataformer game',
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