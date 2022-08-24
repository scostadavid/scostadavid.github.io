import React from "react";
import styled from "styled-components";
import { H1 } from '../Typography';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0;
  }

  li {
    padding: 0 .7rem;
  }

  button {
    position: relative;
    right: 110px;
    bottom: 80px;
  }

  @media (max-width: 850px) {
    ul {
      display: none;
    }
    margin-bottom: 2rem;
  }

`;

export default (): JSX.Element => {
  return (
    <StyledNav>
      <ul>
        <li>
          <a href="#">🚧{' '}projects</a>
        </li>
        <li>
          <a rel={'noopener noreferrer'} href="https://linkedin.com/in/scostadavid" target={'_blank'}>✉️{' '}contact</a>
        </li>
        {/* <li>
          <a href="#">✏️{' '}blog</a>
        </li> */}
        <li>
          <a rel={'noopener noreferrer'} href="https://github.com/scostadavid" target={'_blank'}>🌐{' '}github</a>
        </li>
      </ul>
    </StyledNav>
  )
}