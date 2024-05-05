import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `scostadavid`,
    siteUrl: `https://scostadavid.github.io`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-webpack-bundle-analyser-v2"
  ],
}

export default config
