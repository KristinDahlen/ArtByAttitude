module.exports = {
  siteMetadata: {
    title: `Art By Attitude`,
    description: `Inspireras dagligen av konsten som pryder ditt hem av Art By Attitude`,
    author: `@KristinDahlen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `ArtByAttitude`,
        short_name: `ArtByAttitude`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F5F2EC`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
