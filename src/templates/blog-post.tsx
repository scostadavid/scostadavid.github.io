import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import {Layout} from "../components/layout";

interface BlogPostProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
        cover?: any; 
        author: string;
      };
    };
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark;
  const coverImage = getImage(post.frontmatter.cover);

  if (!post) {
    return (
      <Layout>
        <main className="flex items-center justify-center min-h-screen">
          <p className="text-neutral-600">Loading...</p>
        </main>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <main className="max-w-4xl mx-auto px-8 py-16">
        
        <h1 className="text-4xl font-bold text-content mb-4">
          {post.frontmatter.title}
        </h1>
        <div className="flex flex-col">
          <p className="flex text-content dark:text-neutral-400 text-sm">
            {new Date(post.frontmatter.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="flex text-content dark:text-neutral-400 text-sm mb-8">
            by {post.frontmatter.author}
          </p>
        </div>
        <div className="border-b border-neutral-300 dark:border-neutral-800 mb-8"></div>

        {coverImage && (
          <div className="mb-8">
            <GatsbyImage
              image={coverImage}
              alt={post.frontmatter.title}
              className="rounded-lg shadow-md"
            />
          </div>
        )}

        <article
          className="text-content space-y-6"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>
    </Layout>
  );
};


export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        cover {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 800)
          }
        }
      }
      html
    }
  }
`;

export default BlogPost;