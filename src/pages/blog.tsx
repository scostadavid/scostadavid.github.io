import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { H1, H2, Span } from '../components/typography';
import { Link } from 'gatsby';
import { graphql, PageProps } from 'gatsby';
import { PostList } from '../components/post-list';

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

interface BlogPageProps extends PageProps {
  data: {
    allMarkdownRemark: {
      nodes: Post[];
    };
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section className="text-slate-200">
        <div className="max-w-3xl mx-auto px-8 py-16">
          <header className="mb-12">
            <H1 className="font-bold text-2xl mb-4">Blog</H1>
            <p className="text-content text-lg leading-relaxed max-w-3xl mx-auto">
              Explore my latest articles and tutorials on software development.
            </p>
          </header>
          
          <PostList posts={posts} />
        </div>
      </section>

      <SEO
        title="scostadavid | Blog"
        description="Explore my latest articles and tutorials on software development."
      />
    </Layout>
  );
};

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

export default BlogPage;
