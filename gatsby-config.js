module.exports = {
  siteMetadata: {
    title: `CevicheLabs Web`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@cevichelabs`,
    menuLinks: [
      {
        name: "METODOLOGÍA",
        description: "Cómo lo que hacemos",
        link: '/metodologia',
      },
      {
        name: "SOLUCIONES",
        description: "Qué es lo que hacemos",
        link: '/soluciones',
      },
      {
        name: "PLANES",
        description: "En qué te ayudamos",
        link: '/planes',
      },
      {
        name: "EXPERIENCIA",
        description: "Cómo te ayudamos",
        link: '/experiencia',
      }
    ]
  },
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Asap`,
            variants: [`600`]
          },
          {
            family: `Archivo Black`,
            variants: [`normal`]
          },
          {
            family: `BenchNine`,
            variants: [`normal`]
          },
          {
            family: `Oswald`,
            variants: [`400`]
          }
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
