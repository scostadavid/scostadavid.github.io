import React, { useState } from "react";
import styled from "styled-components";
import { FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

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

const ButtonLink = styled.button`
  color: white;
  padding: 1rem;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 4px;
  padding: .5rem;
  display: flex;
  text-align: center;
  transition: .2s;
  :hover {
    border: 1px solid #535bf2;
    background-color: #535bf2;
    color: black;
  }
`;

export const IconLink = styled.a`
  svg {
    padding-right: .3rem;
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props?.color ?? '#fff'};
    transition: .2s;
  }
  :hover {
    cursor: pointer;
    color: #535bf2;

  }
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const List = styled.ul`
  align-items: center;
`;

async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  }
}

const DEFAULT_EMAIL: string = 'scostadavid@proton.me';

const EmailButton = (): JSX.Element => {
  const [content, setContent] = useState(DEFAULT_EMAIL);

  const handleClick = (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();
    return copyTextToClipboard(DEFAULT_EMAIL)
      .then(() => {
        setContent('copied to clipboard');
        setTimeout(() => {
          setContent(DEFAULT_EMAIL)
        }, 1000);
      })
  }

  return(
    <ButtonLink onClick={handleClick}>
      {content}
    </ButtonLink>
  )
}

export const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <List>
        <li>
          <IconLink color={'#0069bd'} rel={'noopener noreferrer'} href={'https://linkedin.com/in/scostadavid'} target={'_blank'}>
            <FaLinkedin />
            Linkedin
          </IconLink>
        </li>
	    	<li>
          <IconLink color={'#e4edf3'} rel={'noopener noreferrer'} href="https://github.com/scostadavid" target={'_blank'}>
            <FaGithub/>
            Github
          </IconLink>
        </li>
        {/* <li>
          <IconLink rel={'noopener noreferrer'} href={'https://twitter.com/scostadavid'} target={'_blank'}>
            <FaTwitter />
          </IconLink>
        </li> */}
        {/* <li>
          <EmailButton/>
        </li> */}
      </List>
    </StyledNav>
  )
}