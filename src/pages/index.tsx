import React from 'react';
import {
  H1,
  H2, Span
} from '../components/typography';
import { projects } from '../data/projects';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { graphql, Link, PageProps } from 'gatsby';
import { PostList } from '../components/post-list';
import { techs } from '../data/techs';
import { Email, Github, Linkedin, Twitter } from '../icons';

const AboutSection = (): JSX.Element => {
  const socialLinks = [
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/scostadavid',
      icon: Linkedin,
      hoverClass: 'hover:text-[#0A66C2]'
    },
    {
      name: 'Github',
      url: 'https://github.com/scostadavid',
      icon: Github,
      hoverClass: 'hover:text-highlight'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/scostadavid',
      icon: Twitter,
      hoverClass: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'Email',
      url: 'mailto:me@scostadavid.dev',
      icon: Email,
      hoverClass: 'hover:text-[#EA4335]'
    }
  ];

  return (
    <section className="text-slate-200">
      <div className="max-w-4xl mx-auto px-8 pt-16">
        <Span className="text-content text-lg">Hello, I'm David Costa a</Span>
        <H1 className="my-4 text-highlight">
          {'Software'}{' '}
          <Span className="">{'Developer'}</Span>
        </H1>
        <p className="text-cta text-lg mb-8 leading-relaxed max-w-xl">
          I build software and enjoy solving problems through technology.
        </p>
        <nav className="flex flex-row gap-6 align-middle flex-wrap">
          {socialLinks.map(({ name, url, icon: Icon, hoverClass }) => (
            <Link
              key={name}
              to={url}
              className={`flex flex-row gap-2 items-center text-content ${hoverClass} self-center transition-all duration-300 ease-in-out`}
              target="_blank"
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

// StatusBadge.tsx
const StatusBadge = ({ status }: { status?: 'available' | 'coming-soon' }) => {
  if (status === 'available') {
    return (
      <span className="inline-block text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
        Available
      </span>
    );
  }
  if (status === 'coming-soon') {
    return (
      <span className="inline-block text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
        Coming Soon
      </span>
    );
  }
  return null;
};

// ProjectCard.tsx
const placeholderImage = "https://place-hold.it/1920x1080";

interface ProjectCardProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  status?: 'available' | 'coming-soon';
}

const ProjectCard = ({ title, description, url, image, status }: ProjectCardProps) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer noopener"
    className="block group border border-neutral-200 dark:border-neutral-800 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl text-content"
  >
    <div className="overflow-hidden rounded-t-xl">
      <img
        src={image || placeholderImage}
        alt={title}
        className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-content/80 mb-4 group-hover:text-content/100 transition-colors">
        {description}
      </p>
      <StatusBadge status={status} />
    </div>
  </a>
);

// SeeMoreLink.tsx
const SeeMoreLink = ({ to }: { to: string }) => (
  <Link
    to={to}
    className="text-content hover:text-highlight transition-colors"
    target="_blank"
    rel="noreferrer noopener"
  >
    see more
    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
  </Link>
);

// Projects.tsx
export const Projects = (): JSX.Element => (
  <div className="text-slate-200">
    <div className="max-w-4xl mx-auto px-8 pt-16">
      <H2 text="Selected Projects" className="text-content mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={`pj-${project.id}`}
            {...project}
          />
        ))}
      </div>
      <div className="mt-8">
        <SeeMoreLink to="https://github.com/scostadavid?tab=repositories" />
      </div>
    </div>
  </div>
);

export const Skills = (): JSX.Element => {


  return (
    <div className="text-slate-200">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <H2 text="Solving problems with" className="text-content mb-8" />
        <ul className="flex flex-row flex-wrap gap-3">
          {techs.map((tech, index) => (
            <li
              key={index}
              className="flex flex-row items-center gap-2 rounded-lg p-1 text-content"
              style={{
                backgroundColor: tech.backgroundColor,
                border: `1px solid ${tech.borderColor}`,
              }}
            >
              {tech.icon && <span className="opacity-90">
                <tech.icon />
              </span>
              }
              <span className="font-medium">{tech.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


interface Post {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    description?: string;
  };
  fields: {
    slug: string;
  };
}

interface IndexPageProps extends PageProps {
  data: {
    allMarkdownRemark: {
      nodes: Post[];
    };
  };
}

const Blog: React.FC<IndexPageProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <section className="text-slate-200">
      <div className="max-w-4xl mx-auto px-8 pt-16">
        <H2 text="Blog" className="text-content mb-8" />        
        <PostList posts={posts} limit={3}/>
      </div>
    </section>
  );
};

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <>
      <title>scostadavid | software developer</title>

      <Layout>
        <AboutSection />
        <Blog data={data} />
        <Projects/>
        <Skills />
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => (
  <>
    <html lang="en" />
    <SEO />
  </>
)