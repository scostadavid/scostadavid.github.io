import React from 'react';
import {
  H1,
  H2, Span
} from '../components/Typography';
import { projects } from '../data/projects';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Link } from 'gatsby';
import { AWS, CSharp, Docker, DotNet, Golang, Linux, Mongodb, NodeJs, Postgres, Rails, ReactJS, Ruby, Typescript } from '../icons';

const AboutSection = (): JSX.Element => (
  <section className="text-slate-200">
    <div className="max-w-2xl mx-auto px-8 py-16">
      <Span className="text-content text-lg">Hello, I'm David Costa a</Span>
      <H1 className="my-4">
        {'Software'}{' '}
        <Span className="text-cta">{'Developer'}</Span>
      </H1>
      <p className="text-cta text-lg mb-8 leading-relaxed max-w-xl">
        Over 4 years of experience building software solutions. Focused on TDD and SOLID principles, 
        skilled in Linux environments, monolithic and microservices architectures.
      </p>
      <nav className="flex flex-row gap-6 align-middle flex-wrap">
        <Link to="https://linkedin.com/in/scostadavid" 
              className="flex flex-row gap-2 items-center text-content hover:text-cta self-center 
                         transition-all duration-300 ease-in-out hover:scale-105" 
              target="_blank">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
             <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
           </svg>
           <span>Linkedin</span>
        </Link>
        <Link to="https://github.com/scostadavid" 
              className="flex flex-row gap-2 items-center text-content hover:text-cta self-center 
                         transition-all duration-300 ease-in-out hover:scale-105" 
              target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
          </svg>
          <span>Github</span>
        </Link>
        <Link to="https://x.com/scostadavid" 
              className="flex flex-row gap-2 items-center text-content hover:text-cta self-center 
                         transition-all duration-300 ease-in-out hover:scale-105" 
              target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path>
          </svg>
          <span>Twitter</span>
        </Link>
        <Link to="mailto:contato@scostadavid.dev" 
              className="flex flex-row gap-2 items-center text-content hover:text-cta self-center 
                         transition-all duration-300 ease-in-out hover:scale-105" 
              target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.6418 20 15.1681 19.5054 16.4381 18.6571L17.5476 20.3214C15.9602 21.3818 14.0523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13.5C22 15.433 20.433 17 18.5 17C17.2958 17 16.2336 16.3918 15.6038 15.4659C14.6942 16.4115 13.4158 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.1258 7 14.1647 7.37209 15.0005 8H17V13.5C17 14.3284 17.6716 15 18.5 15C19.3284 15 20 14.3284 20 13.5V12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"></path>
          </svg>
          <span>Email</span>
        </Link>
      </nav>
    </div>
  </section>
);

export const Projects = (): JSX.Element => {
  return (
    <div className="text-slate-200">
      <div className="max-w-2xl mx-auto px-8 py-16">
        <H2 text="Selected Projects" className="text-content mb-8" />
        <ul className="space-y-4">
          {projects.map(({id, title, description, url, status}: {
            id: number, 
            title: string, 
            description: string, 
            url: string | undefined,
            status?: 'available' | 'coming-soon'
          }) => (
            <li key={'pj-' + id} className="group">
              <a href={url} 
                 target="_blank" 
                 rel="noreferrer noopener" 
                 className="block pb-4 rounded-lg transition-all duration-300
                          hover:border-card
                          bg-card/5 hover:bg-card/10
                          text-content hover:text-cta">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{title}</h3>
                    <p className="text-content/80 group-hover:text-content/100 transition-colors">
                      {description}
                    </p>
                    {status === 'available' && (
                      <span className="inline-block mt-2 text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                        Available
                      </span>
                    )}
                    {status === 'coming-soon' && (
                      <span className="inline-block mt-2 text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                       className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" 
                       fill="none" 
                       viewBox="0 0 24 24" 
                       stroke="currentColor">
                    <path strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link to="https://github.com/scostadavid?tab=repositories" 
                className="inline-flex items-center text-content hover:text-cta transition-colors" 
                target="_blank" 
                rel="noreferrer noopener">
            see more 
            <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export const Skills = (): JSX.Element => {
  const techs = [
    {
      icon: <Golang />,
      title: 'Golang',
      backgroundColor: '#00acd770',
      borderColor: '#00acd7a0',
    },
    {
      icon: <Typescript />,
      title: 'Typescript',
      backgroundColor: '#007acc70',
      borderColor: '#007acc70',
    },
    {
      icon: <CSharp />,
      title: 'C-Sharp',
      backgroundColor: '#9B4F9670',
      borderColor: '#9B4F96a0',
    },
    {
      icon: <Ruby />,
      title: 'Ruby',
      backgroundColor: '#d9140470',
      borderColor: '#d91404a0',
    },
    {
      icon: <DotNet />,
      title: '.NET',
      backgroundColor: '#1384C870',
      borderColor: '#1384C8a0',
    },
    {
      icon: <AWS />,
      title: 'AWS',
      backgroundColor: '#FF990070',
      borderColor: '#FF9900a0',
    },
    {
      icon: <NodeJs />,
      title: 'NodeJS',
      backgroundColor: '#5fa04e70',
      borderColor: '#5fa04ea0',
    },
    {
      icon: <Rails />,
      title: 'Rails',
      backgroundColor: '#d9140470',
      borderColor: '#d91404a0',
    },
    {
      icon: <ReactJS />,
      title: 'React',
      backgroundColor: '#61DAFB70',
      borderColor: '#61DAFB70',
    },
    {
      icon: <Postgres />,
      title: 'Postgres',
      backgroundColor: '#33679170',
      borderColor: '#33679170',
    },
    {
      icon: <Mongodb />,
      title: 'MongoDB',
      backgroundColor: '#43993470',
      borderColor: '#439934a0',
    },
    {
      icon: <Linux />,
      title: 'Linux',
      backgroundColor: '#33333370',
      borderColor: '#333333a0',
    },
    {
      icon: <Docker />,
      title: 'Docker',
      backgroundColor: '#1384C870',
      borderColor: '#1384C8a0',
    },
  ];

  return (
    <div className="text-slate-200">
      <div className="max-w-2xl mx-auto px-8 py-16">
        <H2 text="Solving problems with" className="text-content mb-8" />
        <ul className="flex flex-row flex-wrap gap-3">
          {techs.map((tech, index) => (
            <li
              key={index}
              className="flex flex-row items-center gap-2 rounded-lg p-2 text-content"
              style={{
                backgroundColor: tech.backgroundColor,
                border: `1px solid ${tech.borderColor}`,
              }}
            >
              {tech.icon && <span className="opacity-90">{tech.icon}</span>}
              <span className="font-medium">{tech.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

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
        <Skills />
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