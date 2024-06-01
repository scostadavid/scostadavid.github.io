import React, { useState } from 'react';
import {
  H1,
  H2,
  Paragraph,
  Span,
  TypeMachineParagraph
} from '../components/Typography';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { projects } from '../data/projects';
import {AnimatePresence, motion} from 'framer-motion';
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
            <motion.li
            whileHover={{ scale: 1.02 }} className="bg-card mb-2 p-2 rounded-md" key={'pj-' + id}>
              <a href={url} target={'_blank'} rel={'noreferrer noopener'} className="mr-4 text-content hover:text-cta font-black">
                {title}
                <span className="text-content font-normal">
                {' - '}{description}
                </span>
              </a>
            </motion.li>
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

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* <title>scostadavid</title> */}
      {/* <meta name="description" content="Software developer" /> */}
      {/* <Header/> */}
      <Layout>
        <AboutSection />
        <Projects/>
        <Contact/>
      </Layout>
      {/* <Footer/> */}
    </>
  );
}

export default IndexPage;
