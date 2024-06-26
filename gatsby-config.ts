import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `scostadavid | software developer`,
    description: `scostadavid blog, software developer`,
    siteUrl: `https://scostadavid.github.io`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      trackingIds: [
        "G-7XLM5TDPNE",
      ],
      gtagConfig: {
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-webpack-bundle-analyser-v2"
  ],
}

export default config
