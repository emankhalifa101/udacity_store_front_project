import { Router } from "express";
import authValidationHandler from "../../helpers/authentication";
import * as controller from '../../handelers/orders';

const routes = Router();

routes.post('/',controller.createOrder);
routes.get('/',authValidationHandler,controller.index);
routes.get('/:user_id',authValidationHandler,controller.showOrder);

export default routes;