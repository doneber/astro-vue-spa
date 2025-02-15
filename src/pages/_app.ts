import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes'; 
import { h } from 'vue';

export default (app) => {
  if (typeof window !== 'undefined') {
    const router = createRouter({
      history: createWebHistory('/hug/'),
      routes,
    });
    app.use(router);
  }
};