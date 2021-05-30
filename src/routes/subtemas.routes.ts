import { Router } from 'express';

import { CreateSubtemaController } from '@modules/subtemas/useCases/createSubtema/CreateSubtemaController';
import { FindSubtemaByIdController } from '@modules/subtemas/useCases/findById/FindSubtemaByIdController';
import { ListAllsubtemasController } from '@modules/subtemas/useCases/listAll/ListAllsubtemasController';

const subtemasRoutes = Router();

const createSubtemaController = new CreateSubtemaController();
const listAllsubtemasController = new ListAllsubtemasController();
const findSubtemaByIdController = new FindSubtemaByIdController();

subtemasRoutes.post('/create', createSubtemaController.handle);
subtemasRoutes.get('/getbyid/:tema_id', findSubtemaByIdController.handle);
subtemasRoutes.get('/listall', listAllsubtemasController.handle);

export { subtemasRoutes };
