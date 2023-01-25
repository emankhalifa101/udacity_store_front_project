import { Router } from "express";
import authValidationHandler from "../../helpers/authentication";
import * as controller from '../../handelers/products-order';

const routes = Router();

routes.post('/',authValidationHandler,controller.create);
routes.get('/:order_id',authValidationHandler ,controller.showAll);

export default routes;