export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/HelloWorld',
    name: 'hello-world',
    icon: 'ant-design',
    component: './HelloWorld',
  },
  {
    path: '/Counter',
    name: 'counter',
    icon: 'smile',
    component: './Counter',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    // component: './Welcome',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/manager',
      },
      {
        path: '/admin/manager',
        name: 'Manager',
        // icon: 'smile',
        component: './Admin',
      },
      {
        path: 'sub-page',
        name: 'sub-page',
        // icon: 'smile',
        component: './Welcome',
      },
      // {
      //   component: './404',
      // },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
