import styled from 'styled-components';


export const projects = [
  {
    title: '🦐 shrimp.css',
    description: 'A single file CSS framework for simple blogs and markdown generated html.',
    imageSrc: 'https://github.com/scostadavid/shrimp.css/raw/main/public/img/screenshot.png',
    link: 'https://github.com/scostadavid/shrimp.css',
  },
  {
    title: '🌱 Game of life',
    description: 'Cellular automata simulation implemented in c raylib.',
    imageSrc: 'https://github.com/scostadavid/game-of-life/raw/main/resources/screenshots/preview.gif',
    link: 'https://github.com/scostadavid/game-of-life',
  },
  {
    title: '🕹️ Dawn\'s Lighthouse',
    description: 'Unity3d game jam project.',
    imageSrc: 'https://m.gjcdn.net/game-header/2000/574359-wa42iiym-v4.webp',
    link: 'https://gamejolt.com/games/dawnslighthouse/574359',
  },
  // { title: '', description: '', imageSrc: '', link: '' },
];


export default styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;