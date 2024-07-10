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
import { SEO } from '../components/SEO';
import { Link } from 'gatsby';

const AboutSection = (): JSX.Element => (
  <section className="text-slate-200 ">
    <div className="max-w-xl mx-auto px-8 pt-8 pb-8">
      <Span className="text-content">Hello, I’m David Costa a</Span>
      <H1 text={'Software Developer'} />
      <Paragraph>
      I enjoy crafting solid and scalable software experiences
      </Paragraph>
      <Button className="flex flex-row gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
          <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" className="fill-cta-text" fill="#000000"/>
        </svg>
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
        <H2 text="Selected Projects" className="text-cta" />
        <ul>
          {projects.map(({id, title, description, url}) => (
            <li key={'pj-' + id}>
              <a href={url} target="_blank" rel="noreferrer noopener" className="text-content hover:text-cta font-black block bg-card mb-2 p-2 rounded-md transform transition-transform duration-200 hover:scale-105">
                {title}
                <span className="text-content font-normal">
                  {' - '}{description}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <span className="pt-2"><Link to="https://github.com/scostadavid?tab=repositories" className="hover:text-cta" target="_blank" rel="noreferrer noopener">see more →</Link></span>
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
            <li className=" text-content my-4" key={'pj-' + id}>
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

export const Head = () => (
  <>
    <html lang="en" />
    <SEO />
  </>
)