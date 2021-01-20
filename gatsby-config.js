module.exports = {
  siteMetadata: {
    title: `CevicheLabs Web`,
    description: `Laboratorio de soluciones digitales. Consultoría en Marketing Digital, Branding y Business Intelligence, E-Commerce, Sitios Web, Landing Pages`,
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
    ],
    portfolio: [
      {
        id: 1,
        url: 'http://chinocharapa.pe/',
        description: 'Delivery fusión comida de la selva y oriental',
        image: 'chinocharapa'
      },
      {
        id: 2,
        url: 'http://wellplaystore.com/',
        description: 'Catálogo Online de periféricos para gamers',
        image: 'wellplaystore'
      },
      {
        id: 3,
        url: 'http://luchalibro.pe/',
        description: 'Programa de televisión de Canal 7',
        image: 'luchalibro'
      },
      {
        id: 4,
        url: 'http://bareto.pe/',
        description: 'Website oficial de la banda peruana ',
        image: 'bareto'
      },
      {
        id: 5,
        url: 'https://solida.com.pe/',
        description: 'Proyectos inmobiliarios',
        image: 'solida'
      },
    ]
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
