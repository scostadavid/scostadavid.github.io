import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${props => `${props.color}`};
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  @media (max-width: 850px) {}
`;

const H2 = styled.h2`
  color: ${props => `${props.color}`};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 850px) {
    font-size: 1.4rem;
    word-break: break-word;
  }
`;

const H3 = styled.h3`
  color: ${props => `${props.color}`};
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 850px) {}
`;

const Paragraph = styled.p`
  color: ${props => `${props.color}`};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 0.6rem;

  @media (max-width: 850px) {}
`;

const Span = styled.span`
  color: ${props => props.color || '#fff'};
`;

const BlinkingCursor = (): JSX.Element => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShow(!show), 500);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <Span color={'#fff'}>
      {show && '_'}
    </Span>
  );
};

const MS_INTERVAL: number = 40;

interface TypeMachineParagraph {
  quote: string
};
const TypeMachineParagraph = ({quote}: TypeMachineParagraph): JSX.Element => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex(index + 1), MS_INTERVAL);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <Span color="#00FF97">{'› '}</Span>
      {quote.substring(0, index)}
      <BlinkingCursor />
    </>
  );
}

export {
  H1,
  H2,
  H3,
  Paragraph,
  TypeMachineParagraph,
  Span,
}