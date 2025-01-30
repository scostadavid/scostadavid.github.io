import React from "react"
import { useSiteMetadata } from "../../hooks/useSiteMetada"

interface SEO { title?: string, description?: string, pathname?: string, children?: any };

export const SEO = ({ title, description, pathname, children }: SEO) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl, } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content="scostadavid blog, software developer"/>
      <meta name="keywords" content="scostadavid, David Costa, software developer, full stack, portfolio, projects, skills, experience"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="author" content="David Costa"/>
      
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {/* <meta name="twitter:image" content={seo.image} /> */}
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👨‍💻</text></svg>" />
      {children}
    </>
  )
}