module.exports = {
  siteMetadata: {
    title: `CevicheLabs Web`,
    description: `Laboratorio de soluciones digitales. Consultoría en Marketing Digital, Branding y Business Intelligence, E-Commerce, Sitios Web, Landing Pages`,
    author: `@cevichelabs`,
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#223298`,
        theme_color: `#223298`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-61106849-1`
      },
      resolve: `gatsby-plugin-preload-fonts`,
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
