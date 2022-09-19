import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '5c2'),
    exact: true
  },
  {
    path: '/my-markdown-page',
    component: ComponentCreator('/my-markdown-page', '909'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', '6e6'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '68c'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '6e9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/intro2',
        component: ComponentCreator('/docs/intro2', 'deb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/intro3',
        component: ComponentCreator('/docs/intro3', '9db'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'fa1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
