import Index from '../modules/index';
import Detail from '../modules/detail';
import Template from '../modules/template/index.vue';

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
  },
  {
    name: 'template',
    path: '/template',
    component: Template,
    props: true
  }
];

export default routes;