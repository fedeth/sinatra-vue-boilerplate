import Foo from '../components/foo.vue';
import Bar from '../components/bar.vue';

export const routes = [
  {path: '/foo/:id', component: Foo},
  {path: '/bar/:id', component: Bar},
];
