import { Router } from "express";
import authValidationHandler from "../../helpers/authentication";
import * as controller from '../../handelers/products';

const routes = Router();

routes.post('/',authValidationHandler ,controller.createProduct);

routes.get('/',authValidationHandler ,controller.index);

routes.get('/:id',authValidationHandler ,authValidationHandler,controller.show);

export default routes;