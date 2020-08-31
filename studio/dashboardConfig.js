export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4cd6f80889c6085b6d6315',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wihku9dc',
                  apiId: '657ae8d5-4521-471c-bcf3-02758c960c4a'
                },
                {
                  buildHookId: '5f4cd6f803a33f0d427aea92',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nun7sj16',
                  apiId: '102a5422-7f77-479c-8ddf-6c8f40e62876'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GraemeTG/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nun7sj16.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
