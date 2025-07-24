import React from "react";
import { Helmet } from "react-helmet";

const defaultMetadata = {
  title,
  description,
  image,
  siteUrl,
  twitterUsername,
};

export const SEO = ({ title, description, children }) => {


  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
  
    twitterUsername,
  };

  return (
    <Helmet>
     <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
     
      {children}
    </Helmet>
  );
};