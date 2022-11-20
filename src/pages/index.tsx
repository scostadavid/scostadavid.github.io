import React, { useState, useEffect } from 'react';
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
import Nav from '../components/Nav';

import ProjectsList, { projects } from '../components/ProjectsList';

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 650px;
  :last-child {
    margin-bottom: 5rem;
  }
  @media (max-width: 850px) {
    // background-color: #fff;
    width: 80%;
  }
`;

const Content = styled.section`
  padding: 0 0 1rem 0;
  color: #fff;
`;

const AboutSection = (): JSX.Element => (
  <Content>
    <H1>
      <TypeMachineParagraph quote={'Hi, i\'m David Costa'}/>
    </H1>
    <Paragraph>
    {' A full stack developer currently developing web and mobile wellness solutions with React, Node, Rails and AWS at Good Software 🦊.'}
    </Paragraph>
    <Nav/>
  </Content>
);

const StyledEntry = styled.li`
  img {
    max-width: 100%;
    border-radius: 4px;
  }
  margin-bottom: 1rem;
`;

interface HoverImage {
  src: string,
  link: string,
  hoverContent: string,
};

const HoverImage = ({
  src,
  link,
  hoverContent
}: HoverImage): JSX.Element => {

  const IContainer = styled.div`
    position: relative;
  `;

  const Image = styled.img`
    // display: block;
    // width: 100%;
  `;

  const Overlay = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 4px;

    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #000000;
    background: rgba(0, 0, 0, 0.8); /* Black see-through */
    color: #f1f1f1;

    transition: .5s ease;
    opacity: 0;

    :hover {
      opacity: 1;
    }
  `;

  return (
    <a
    href={link}
    target={'_blank'}
    rel={'noreferrer noopener'}
    >
      <IContainer>
        <Image
          src={src}
          // metadata
          />
        <Overlay>
          <H3>
            {hoverContent}
          </H3>
        </Overlay>
      </IContainer>
    </a>
  );

}

interface ProjectEntry {
  title: string,
  description: string,
  imageSrc: string,
  link: string,
};

const ProjectEntry = ({
  title,
  description,
  imageSrc,
  link
}: ProjectEntry): JSX.Element => (
  <StyledEntry>
    <H3>
      <a
        href={link}
        target={'_blank'}
        rel={'noreferrer noopener'}
      >{title}{' '}</a>
    </H3>
    <Paragraph>
    {description}
    </Paragraph>
    <HoverImage src={imageSrc} link={link} hoverContent={title}/>
  </StyledEntry>
);


const ProjectsSection = (): JSX.Element => (
  <Content>
    <H2><Span color={'#00FF97'}>{'› '}</Span>Projects</H2>
    <ProjectsList>
      {projects.map((project, index) => <ProjectEntry {...project}/>)}
    </ProjectsList>
  </Content>
);

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
    </>
  )
}

export default IndexPage
