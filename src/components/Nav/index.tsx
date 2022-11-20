import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0;
  }

  li:first-child {
    padding-left: 0;
  }

  li {
    padding: 0 .7rem;
  }
`;

const ButtonLink = styled.a`
  color: white;
  background-color: transparent;
  border: 1px solid #00FF97;
  border-radius: 4px;
  padding: .5rem;
  display: block;
  width: 4rem;
  text-align: center;
  transition: .5s;
  :hover {
    background-color: #00FF97;
    color: black;
  }
`;

export default (): JSX.Element => {
  return (
    <StyledNav>
      <ul>
        <li>
          <ButtonLink rel={'noopener noreferrer'} href={'mailto:scostadavid@proton.me'}>E-mail</ButtonLink>
        </li>
	    	<li>
          <ButtonLink rel={'noopener noreferrer'} href={'https://linkedin.com/in/scostadavid'} target={'_blank'}>Linkedin</ButtonLink>
        </li>
    		<li>
          <ButtonLink rel={'noopener noreferrer'} href="https://github.com/scostadavid" target={'_blank'}>Github</ButtonLink>
        </li>
      </ul>
    </StyledNav>
  )
}