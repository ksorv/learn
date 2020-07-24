/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Learning Gatsby',
    description: 'This is just to test the Gatsby metadata',
    author: "@sauravkhdoolia",
    data: ["Javascript", "React"],
    person: { name: "Saurav", age: 20 }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
}
