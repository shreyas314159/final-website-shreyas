module.exports = {
  siteMetadata: {
    title: "Shreyas Prakash",
    author: "Shreyas Prakash",
    description: "A Gatsby.js Starter based on Strata by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/leadbydesign/f2f89e7d73e143e28de622895da65c24?v=f7bb34a935c540149e6e2d9259f01031',
            cacheType: 'html'
          }
        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
