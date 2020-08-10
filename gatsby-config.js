/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: "Kento Nambara",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 300,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
