import React from 'react';
import styled from 'styled-components';
import {Link} from '../Link';
import { Paragraph } from '../Typography';

export const Footer = (): JSX.Element => {
  const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    color: white;
    padding: 1rem;
  `;

  return (
    <FooterContainer>
      <Paragraph>
        Developed by 👨‍💻 {'   '}
        <Link href={'https://github.com/scostadavid'} target={'_blank'} rel={'noreferrer noopener'}>
          David Costa
        </Link>
        {'   '}Check out{'   '}
        <Link href={'https://github.com/scostadavid/scostadavid.github.io'} target={'_blank'} rel={'noreferrer noopener'}>
          Github
        </Link>
      </Paragraph>
    </FooterContainer>
  )
}