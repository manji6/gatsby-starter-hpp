const config = {
  siteTitle: `Gatsby Starter hpp`,
  siteTitleAlt: `Gatsby Starter hpp - @hppRC/gatsby-starter-hpp`,
  siteHeadline: `Gatsby Starter hpp - Gatsby Starter from @hppRC`,
  siteUrl: `https://gatsby-starter-hpp.netlify.com`,
  siteDescription: `simple gatsby starter with mdx, typescript, pwa`,
  siteLanguage: `en`,
  siteImage: `/banner.png`, // real path -> https://gatsby-starter-hpp.netlify.com/icon.jpg
  author: `@osaremochi`, // twitter account id
  basePath: `/`
};

module.exports = {
  siteMetadata: {
    ...config
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              quality: 90,
              linkImagesToOriginal: true
            }
          }
        ]
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: config.siteUrl
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }]
      }
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        openAnalyzer: false
      }
    },
    // gatsby-plugin-manifest should be described before gatsby-plugin-offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: `hpp`,
        description: config.siteDescription,
        Scope: `/`,
        start_url: `/?utm_source=homescreen`,
        background_color: `#ffffff`,
        theme_color: `#090909`,
        display: `standalone`,
        icon: `./static/icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
