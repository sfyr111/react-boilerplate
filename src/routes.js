const routes = [
  {
    path: '/',
    state: 'index',
    loader: () => import('./container/home/home'),
  },
  {
    path: '/user',
    state: 'user',
    loader: () => import('./container/user/user'),
  },
  {
    path: '/setting',
    state: 'setting',
    loader: () => import('./container/setting/setting'),
  },
]

export default routes
