import React from "react";
import "./src/styles/global.css";
import { useStaticQuery, graphql } from "gatsby"

export const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <title>{data.site.siteMetadata.title}</title>
      <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
    </>
  )
}
export function wrapPageElement() {
    return ;
}
