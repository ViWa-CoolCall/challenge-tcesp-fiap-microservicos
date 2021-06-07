import { Router } from 'express';

import { CreateSubtemaController } from '../modules/subtemas/useCases/createSubtema/CreateSubtemaController';
import { ListAllsubtemasController } from '../modules/subtemas/useCases/listAll/ListAllsubtemasController';

const subtemasRoutes = Router();

const createSubtemaController = new CreateSubtemaController();
const listAllsubtemasController = new ListAllsubtemasController();

subtemasRoutes.post('/create', createSubtemaController.handle);
subtemasRoutes.get('/listall', listAllsubtemasController.handle);

export { subtemasRoutes };
