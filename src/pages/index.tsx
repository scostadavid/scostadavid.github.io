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

import { GridList, projects }  from '../components/ProjectsList';
import { Container } from '../layout/Container';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

const Content = styled.section`
  padding: 0 0 1rem 0;
  color: #fff;
`;

const AboutSection = (): JSX.Element => (
  <Content>
    <H1>
      <TypeMachineParagraph quote={'Your Full Stack problem solver'}/>
      <noscript>
      Hi, i’m David Costa and i currently developing web and mobile wellness solutions with React, Node, Rails and AWS at <a href={'https://gogood.com.br'} target={'_blank'} rel={'noreferrer noopener'}>GoGood Software</a>. Passionate about developing software experiences and solve problems with tech.
      </noscript>
    </H1>
    <Paragraph>
    Hi, I'm David Costa and I'm currently developing web and mobile wellness solutions with React, Node, Rails, and AWS at GoGood Software. I'm passionate about developing software experiences and solving problems with technology. Feel free to contact me to consultancies, discuss projects, and more.
    </Paragraph>
    <Nav/>
  </Content>
);

const StyledEntry = styled.li`
  border: 1px solid #454545;
  border-radius: 5px;
  padding: .5rem;
  :hover {
    border: 1px solid #00FF97;
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

const ProjectEntry = ({
  title,
  description,
  imageSrc,
  link
}: ProjectEntry): JSX.Element => (
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
    <H2><Span color={'#00FF97'}>{'› '}</Span>Projects</H2>
    <GridList>
      {projects.map((project) => <ProjectEntry key={'pr_' + project.title} {...project}/>)}
    </GridList>
  </Content>
  )

};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  color: white;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Developed by 👨‍💻 <a href="">David Costa</a>.
    </StyledFooter>
  )
}

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
