import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MyBatis Docs',
  description: 'MyBatis SQL mapper framework for Java',
  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/introduction' }
    ],
    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          {
            text: 'Configuration XML',
            link: '/configuration',
            items: [
              {
                link: 'configuration#properties',
                text: 'properties'
              },
              {
                link: 'configuration#settings',
                text: 'settings'
              },
              {
                link: 'configuration#typealiases',
                text: 'typeAliases'
              },
              {
                link: 'configuration#typehandlers',
                text: 'typeHandlers'
              },
              {
                link: 'configuration#objectfactory',
                text: 'objectFactory'
              },
              {
                link: 'configuration#plugins',
                text: 'plugins'
              },
              {
                link: 'configuration#environments',
                text: 'environments'
              },
              {
                link: 'configuration#databaseidprovider',
                text: 'databaseIdProvider'
              },
              {
                link: 'configuration#mappers',
                text: 'mappers'
              }
            ]
          },
          {
            text: 'Mapper XML Files',
            link: '/sqlmap-xml',
            items: [
              {
                link: '/sqlmap-xml#select',
                text: 'select'
              },
              {
                link: '/sqlmap-xml#insert-update-and-delete',
                text: 'insert, update and delete'
              },
              {
                link: '/sqlmap-xml#parameters',
                text: 'Parameters'
              },
              {
                link: '/sqlmap-xml#result-maps',
                text: 'Result Maps'
              },
              {
                link: '/sqlmap-xml#auto-mapping',
                text: 'Auto-mapping'
              },
              {
                link: '/sqlmap-xml#cache',
                text: 'cache'
              }
            ]
          },
          { text: 'Dynamic SQL', link: '/dynamic-sql' },
          {
            text: 'Java API',
            link: '/java-api',
            items: [
              {
                link: 'java-api#directory-structure',
                text: 'Directory Structure'
              },
              {
                link: 'java-api#sqlsessions',
                text: 'SqlSessions'
              }
            ]
          },
          { text: 'Statement Builders', link: '/statement-builders' },
          { text: 'Logging', link: '/logging' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/mybatis/mybatis-3' }]
  }
});
