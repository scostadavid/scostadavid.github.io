import styled from "styled-components"

const H1 = styled.h1`
  color: ${props => `${props.color}`};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  color: ${props => `${props.color}`};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  color: ${props => `${props.color}`};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;
`;


const Span = styled.span`
  color: ${props => props.color || '#fff'};
`;


export {
  H1,
  H2,
  Paragraph,
  Span,
}