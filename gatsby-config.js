module.exports = {
  siteMetadata: {
    title: 'Mattdev | Software Development',
    typekit: 'https://use.typekit.net/xzl8dmo.css'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${ __dirname }/src/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        path: `${ __dirname }/src/posts/`,
        name: 'posts',
      },
    },
  ]
};
