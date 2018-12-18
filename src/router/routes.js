import Index from '../pages/index';
import Detail from '../pages/detail';

const routes = [{
    path: '/',
    component: Index,
    name: 'index'
  },
  {
    name: 'detail',
    path: '/detail/:name/:id',
    component: Detail,
    props: true
  }
];

export default routes;