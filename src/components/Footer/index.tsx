import React from 'react';
import styled from 'styled-components';
import {Link} from '../Link';
import { Paragraph } from '../Typography';
import {IconLink} from '../Nav';
import { FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

export const Footer = (): JSX.Element => {
  const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: white;
    padding: 1rem 0;

    ul {
      list-style: none;
      display: flex;
      gap: .5rem;
    }
  `;

  return (
    <FooterContainer>
      <Paragraph>
        &copy; 2023
        <Link href={'https://github.com/scostadavid'} target={'_blank'} rel={'noreferrer noopener'}>
          {' '}scostadavid
        </Link>
      </Paragraph>

      <ul>
        <li>
          <IconLink color={'#fff'} rel={'noopener noreferrer'} href={'https://linkedin.com/in/scostadavid'} target={'_blank'}>
            <FaLinkedin />
          </IconLink>
        </li>
	    	<li>
          <IconLink color={'#fff'} rel={'noopener noreferrer'} href="https://github.com/scostadavid" target={'_blank'}>
            <FaGithub/>
          </IconLink>
        </li>
      </ul>

    </FooterContainer>
  )
}