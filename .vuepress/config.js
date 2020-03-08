module.exports = {
    title: 'Tokenization',
    description: 'Just playing around',
    base:"/test/",
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
        ['meta', { name: 'theme-color', content: '#41b883' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
      ],
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Novopayment', link: 'https://www.novopayment.com' },
        ],
        docsDir: '/docs/',
        editLinks: true,
        sidebarDepth: 4,
        sidebar: [
            {
              title: 'Instalación',
              collapsable: false,
              sidebarDepth: 3,
              children: [
                  'docs/guide/instalation'
                ]
            },
            {
              title: 'Configuración e implementación',
              collapsable: false,
              sidebarDepth: 3,
              children: [
                'docs/guide/objetsResponse',
                'docs/guide/implementation'
              ]
            },
            {
                title: 'Flujos de Tokenizacion',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                  'docs/guide/flow'
                ]
            },
            {
              title: 'Tag&Pay y Ofuscamiento',
              collapsable: false,
              sidebarDepth: 3,
              children: [
                'docs/guide/tagPay',
                'docs/guide/ofuscamiento'
              ]
            } 
          ]
        }
    }