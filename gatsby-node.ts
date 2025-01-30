const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const blogTemplate = path.resolve("src/templates/blog-post.tsx");

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.fields.slug}`,
      component: blogTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = node.frontmatter.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};
