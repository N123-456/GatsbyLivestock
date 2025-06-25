/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    
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
