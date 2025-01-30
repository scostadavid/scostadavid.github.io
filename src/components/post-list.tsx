import React from 'react';
import { Link } from 'gatsby';

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

interface PostListProps {
  posts: Post[];
  limit?: number;
}

export const PostList: React.FC<PostListProps> = ({ posts, limit }) => {
  // Agrupar posts por ano
  const groupedPosts = posts.reduce((acc, post) => {
    const year = new Date(post.frontmatter.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, Post[]>);

  // Ordenar anos de forma decrescente
  const years = Object.keys(groupedPosts).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="group/container transition-all">
      {years.map((year) => (
        <div 
          key={year}
          className="flex flex-col justify-start sm:flex-row w-full sm:justify-between border-t border-neutral-200 dark:border-neutral-800 sm:gap-20 group/list text-neutral-600 dark:text-neutral-400 transition-all"
        >
          <h2 className="h-12 w-fit flex items-center justify-center text-sm">
            {year}
          </h2>
          
          <div className="lg:max-w-lg w-full flex flex-col gap-1 last:pb-1">
            {groupedPosts[year].map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.fields.slug}`}
                className="flex flex-row items-center justify-between py-3 border-neutral-200 dark:border-neutral-800 sm:first:border-t-0 group-last/list:border-b group/item transition-all gap-2"
              >
                <span className="text-neutral-950 dark:text-neutral-50 hover:text-neutral-400 transition-all w-full">
                  {post.frontmatter.title}
                </span>
                
                <time 
                  dateTime={new Date(post.frontmatter.date).toISOString()}
                  className="text-sm"
                >
                  {new Date(post.frontmatter.date).toLocaleDateString(undefined, {
                    day: '2-digit',
                    month: '2-digit'
                  })}
                </time>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};