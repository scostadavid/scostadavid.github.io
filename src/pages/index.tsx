import React from 'react';
import styled from 'styled-components';
import {
  H1,
  H2,
  H3,
  Paragraph,
  TypeMachineParagraph,
  Span,
} from '../components/Typography';
import Header from '../components/Header';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Link } from '../components/Link';

import { GridList, projects }  from '../components/ProjectsList';
import { Container } from '../layout/Container';

const Content = styled.section`
  padding: 0 0 1rem 0;
  color: #fff;
`;

const AboutSection = (): JSX.Element => (
  <Content>
    <H1>
      <TypeMachineParagraph quote={'Hi, i’m David Costa'}/>
      <noscript>
      Hi, i’m David Costa and i currently developing web and mobile wellness solutions with React, Node, Rails and AWS at <a href={'https://gogood.com.br'} target={'_blank'} rel={'noreferrer noopener'}>GoGood Software</a>.
      </noscript>
    </H1>
    <H2 color={'#535bf2'}>
      Software Engineer
    </H2>
    <Paragraph>
    Currently developing web and mobile wellness solutions with React, Node, Rails, and AWS at <Link href={'https://gogood.com.br'} target={'_blank'} rel={'noreferrer noopener'}>GoGood Software</Link>.
    </Paragraph>
    <Nav/>
  </Content>
);

const StyledEntry = styled.li`
  border: 1px solid #454545;
  border-radius: 5px;
  padding: .5rem;
  :hover {
    border: 1px solid #535bf2;
    cursor: pointer;
  }
  img {
    border-radius: 5px;
  }
`;

interface ProjectEntry {
  title: string,
  description: string,
  imageSrc: string,
  link: string,
};

const Image = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
`;

const ProjectEntry = ({title, description, imageSrc, link}: ProjectEntry): JSX.Element => (
  <StyledEntry>
    <a
      href={link}
      target={'_blank'}
      rel={'noreferrer noopener'}
    >
      <Image src={imageSrc} />
      <H3>
      {title}{' '}
      </H3>
      <Paragraph>
      {description}
      </Paragraph>
    </a>
  </StyledEntry>
);

const ProjectsSection = (): JSX.Element => {
  return (
    <Content>
      <H2>
        <TypeMachineParagraph quote={'Projects'}/>
        <noscript>
          projects
        </noscript>
      </H2>
      <GridList>
        {projects.map((project) => <ProjectEntry key={'pr_' + project.title} {...project}/>)}
      </GridList>
    </Content>
  )

};

const IndexPage = (): JSX.Element => {
  return (
    <>
      <title>scostadavid</title>
      <Container>
        <Header/>
      </Container>
      <main>
        <Container>
          <AboutSection/>
          <ProjectsSection/>
        </Container>
      </main>
      <Container>
        <Footer/>
      </Container>
    </>
  )
}

export default IndexPage
