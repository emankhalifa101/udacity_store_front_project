import { Router } from 'express';
import usersRoutes from './api/users.routes';
import productsRoutes from './api/products.routes';
import ordersRoutes from './api/orders.routes';
import productsOrderRoutes from './api/products-order.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/products', productsRoutes);
routes.use('/orders', ordersRoutes);
routes.use('/productsOrder', productsOrderRoutes);

export default routes;
