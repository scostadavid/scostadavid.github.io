import React from 'react';
import {
  H1,
  H2,
  Paragraph,
  TypeMachineParagraph
} from '../components/Typography';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { projects } from '../data/projects';
import {AnimatePresence, motion} from 'framer-motion';
import { links } from '../data/contact';

const AboutSection = (): JSX.Element => (
  <section className="text-slate-200 bg-[#fff]">
    <div className="max-w-xl mx-auto p-4">
      <p className="text-black mb-4">Hi my name is</p>
      <H1 text={'David Costa, i’m a Software Developer'} />
      <Paragraph>
      Currently developing web and mobile wellness solutions with React, Node, Rails, and AWS at <a href="https://gogood.com.br" target="_blank" rel="noreferrer noopener" className="hover:cursor-pointer text-[#005aee]">GoGood Software</a>.
      </Paragraph>
      <Button>
        <a className="text-black font-bold" rel="noopener noreferrer" href="https://linkedin.com/in/scostadavid" target="_blank">
          <TypeMachineParagraph quote={'Let\'s connect'}/>
        </a>
      </Button>
    </div>
  </section>
);

export const Projects = (): JSX.Element => {
  return (
    <div className="text-slate-200  bg-[#fff]">
      <div className="max-w-xl mx-auto p-4">
        <H2 text="Projects" className="text-[#005aee]" />
        <ul>
          {projects.map(({id, title, description, url}) => (
            <motion.li
            whileHover={{ scale: 1.02 }} className="bg-[#f1f1f1] mb-2 p-2 rounded-md" key={'pj-' + id}>
              <a href={url} target={'_blank'} rel={'noreferrer noopener'} className="mr-4 text-black hover:text-[#005aee] font-black">
                {title}
                <span className="text-black font-normal">
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
    <div className="text-slate-200  bg-[#fff]">
      <div className="max-w-xl mx-auto p-4">
        <H2 text="Contact" className="text-[#005aee]" />
        <ul>
        {links.map(({id, title, urlText, url}) => (
            <li className=" text-black" key={'pj-' + id}>
              <a href={url} target={'_blank'} rel={'noreferrer noopener'} className="mr-4 text-black hover:text-[#005aee] font-black">
                {title}
                <span className="text-black font-normal">
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
      <title>scostadavid</title>
      <Header/>
      <AboutSection />
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default IndexPage;
