import styled from 'styled-components';
import dlh from '../../images/dlh.png';

export const projects = [
  {
    title: '🌱 Game of life',
    description: 'C language cellular automata simulation implementation.',
    imageSrc: 'https://github.com/scostadavid/game-of-life/raw/main/resources/screenshots/preview.gif',
    link: 'https://github.com/scostadavid/game-of-life',
  },
  {
    title: '🦐 shrimp.css',
    description: 'Classless CSS framework for markdown generated html.',
    imageSrc: 'https://github.com/scostadavid/shrimp.css/raw/main/public/img/screenshot.png',
    link: 'https://github.com/scostadavid/shrimp.css',
  },
  {
    title: '🕹️ Dawn\'s Lighthouse',
    description: 'C# plataformer game.',
    imageSrc: dlh,
    link: 'https://gamejolt.com/games/dawnslighthouse/574359',
  },
];


export default styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;