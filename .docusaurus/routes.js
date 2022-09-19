import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/vi/markdown-page',
    component: ComponentCreator('/vi/markdown-page', 'bd6'),
    exact: true
  },
  {
    path: '/vi/my-markdown-page',
    component: ComponentCreator('/vi/my-markdown-page', '92a'),
    exact: true
  },
  {
    path: '/vi/my-react-page',
    component: ComponentCreator('/vi/my-react-page', '9fe'),
    exact: true
  },
  {
    path: '/vi/docs',
    component: ComponentCreator('/vi/docs', '39e'),
    routes: [
      {
        path: '/vi/docs/intro',
        component: ComponentCreator('/vi/docs/intro', 'da6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vi/docs/intro2',
        component: ComponentCreator('/vi/docs/intro2', 'd62'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/vi/docs/intro3',
        component: ComponentCreator('/vi/docs/intro3', 'd56'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/vi/',
    component: ComponentCreator('/vi/', 'b15'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
