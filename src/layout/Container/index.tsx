import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 750px;
  :last-child {
    margin-bottom: 2rem;
  }
  @media (max-width: 850px) {
    width: 80%;
  }
`;