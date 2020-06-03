module.exports = {
  pathPrefix: "/intro",
  siteMetadata: {
    description: "Personal page of Kamlesh Tayade",
    locale: "en",
    title: "Kamlesh Tayade",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: {
          'back': '#e8eaef',
          'front': '#1f1f1f',
          'lead': '#eee841',
          'lead-text': '#1f1f1f',
          'line': '#cfd1d7',
          'skill-1': '#9079db',
          'skill-2': '#e58b5f',
          'skill-3': '#3ba1db',
          'skill-4': '#2ebc50',
          'skill-5': '#405060',
          'skill-6': '#fc8732',
        },
      },
    },
  ],
}