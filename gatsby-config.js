module.exports = {
  siteMetadata: {
    title: 'Mattdev | Software Development',
    typekit: 'https://use.typekit.net/xzl8dmo.css'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${ __dirname }/src/`,
      },
    },
    'gatsby-transformer-remark',
  ],
  pathPrefix: '/mattdevio'
};
