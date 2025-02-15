import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes'; 

export default (app: any) => {
  if (typeof window !== 'undefined') {
    const router = createRouter({
      history: createWebHistory('/hug/'),
      routes,
    });
    app.use(router);
  }
};