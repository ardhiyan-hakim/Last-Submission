import HomePage from '../views/pages/homepage';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': HomePage, // default page
  '/list': HomePage,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
