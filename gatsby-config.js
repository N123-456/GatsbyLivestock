/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
title: `Farm Management System`,
description: `Example project for the Gatsby Head API`,
   
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Farm Management`,
        short_name: `Farm`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
         icon: `src/images/fmslogo.png`,
      },
    },
    
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`, // This must match your folder
    },
  },
{
   resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight:300,400,400i,700`,
        
        `niramit:200,300,400,500,600,700,200i,300i,400i,500i,600i,700i`,
        `montserrat:100,200,300,400,500,600,700,800,900`,
        ],
  
        display: 'swap'
      }
}
  ]}
