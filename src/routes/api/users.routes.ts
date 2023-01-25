import { Router } from "express";
import authValidationHandler from "../../helpers/authentication";
import * as controller from '../../handelers/users'

const routes = Router();

routes.get('/',authValidationHandler ,controller.index);

routes.get('/:id',authValidationHandler,controller.show);

routes.post('/',authValidationHandler ,controller.createUser);

routes.put('/',authValidationHandler,controller.updateUser);

routes.delete('/:id',authValidationHandler,controller.deleteUser);

routes.post('/authenticate', controller.authenticateUser)

export default routes;