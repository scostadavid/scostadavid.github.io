import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${props => `${props.color}`};
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media (max-width: 850px) {

  }
`;

const H2 = styled.h2`
  color: ${props => `${props.color}`};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media (max-width: 850px) {
    font-size: 1rem;
    word-break: break-word;
  }
`;

const H3 = styled.h3`
  color: ${props => `${props.color}`};
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media (max-width: 850px) {
  }
`;


const Paragraph = styled.p`
  color: ${props => `${props.color}`};
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 0.6rem;

  @media (max-width: 850px) {
  }
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

const TypeMachineParagraph = ({quote}: {quote: string}): JSX.Element => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex(index + 1), 40);
    return () => clearInterval(interval);
  }
  , [index]);

  return (
    <div>
      <Span color="#9C79FF">{'› '}</Span>
      {quote.substring(0, index)}
      <BlinkingCursor />
    </div>
  );
}


const Span = styled.span`
  color: ${props => props.color || '#fff'};
`;

// componente para marcar a parte de games, web e projetos academicos do meu sobre como uma tag kbd mas com cores invertidas
const Highlight = styled.mark`
  color: ${props => props.color || '#000'}
  background-color: #fff;
`;


export {
  H1,
  H2,
  H3,
  Paragraph,
  TypeMachineParagraph,
  Span,
}