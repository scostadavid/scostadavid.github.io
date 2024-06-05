import React from 'react';
import {
  H1,
  H2,
  Paragraph,
  Span
} from '../components/Typography';
import { Button } from '../components/ui/Button';
import { projects } from '../data/projects';
import { links } from '../data/contact';
import { Layout } from '../components/Layout';

const AboutSection = (): JSX.Element => (
  <section className="text-slate-200 ">
    <div className="max-w-xl mx-auto px-8 pt-8 pb-8">
      <Span className="text-content">Hello, I’m David Costa a</Span>
      <H1 text={'Software Developer'} />
      <Paragraph>
      I enjoy crafting solid and scalable software experiences
      </Paragraph>
      <Button>
        <a className="text-cta-text font-bold" rel="noopener noreferrer" href="https://linkedin.com/in/scostadavid" target="_blank">
          Let's connect
        </a>
      </Button>
    </div>
  </section>
);

export const Projects = (): JSX.Element => {
  return (
    <div className="text-slate-200  ">
      <div className="max-w-xl mx-auto px-8 pb-8 pt-8">
        <H2 text="Projects" className="text-cta" />
        <ul>
          {projects.map(({id, title, description, url}) => (
            <li className="bg-card mb-2 p-2 rounded-md transform transition-transform duration-200 hover:scale-105" key={'pj-' + id}>
              <a href={url} target="_blank" rel="noreferrer noopener" className="mr-4 text-content hover:text-cta font-black">
                {title}
                <span className="text-content font-normal">
                  {' - '}{description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const Contact = (): JSX.Element => {
  return (
    <div className="text-slate-200  ">
      <div className="max-w-xl mx-auto px-8 pb-8 pt-8">
        <H2 text="Contact" className="text-cta" />
        <ul>
        {links.map(({id, title, urlText, url}) => (
            <li className=" text-content mb-2" key={'pj-' + id}>
              <a href={url} target={'_blank'} rel={'noreferrer noopener'} className="mr-4 text-content hover:text-cta font-black">
                {title}
                <span className="text-content font-normal">
                {' - '}{urlText}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const IndexPage = (): JSX.Element => {
  return (
    <>
      <meta name="description" content="scostadavid blog, software developer"/>
      <meta name="keywords" content="scostadavid, David Costa, software developer, full stack, portfolio, projects, skills, experience"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="author" content="David Costa"/>

      <title>scostadavid | software developer</title>

      <Layout>
        <AboutSection />
        <Projects/>
        <Contact/>
      </Layout>
    </>
  );
}

export default IndexPage;
