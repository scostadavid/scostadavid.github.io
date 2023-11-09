import React from "react";
import styled from "styled-components";
import { H2 } from '../Typography';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  li {
    padding: 0 .7rem;
  }

  a {
    text-decoration: none;
    color: #535bf2;
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
    <StyledHeader>
      <H2 color="#535bf2">{'{scostadavid}'}</H2>
      {/* <ul>
        <li>
          <a rel="noopener noreferrer" href="https://github.com/scostadavid" target="_blank">/github</a>
        </li>
        <li>
          <a rel="noopener noreferrer" href="https://github.com/scostadavid" target="_blank">/linkedin</a>
        </li>
        <li>
          <a rel="noopener noreferrer" href="https://github.com/scostadavid" target="_blank">/twitter</a>
        </li>
      </ul> */}
    </StyledHeader>
  )
}