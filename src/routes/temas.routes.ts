import { Router } from 'express';

import { CreateTemaController } from '@modules/temas/useCases/createTema/CreateTemaController';
import { FindTemaByIdController } from '@modules/temas/useCases/findById/FindTemaByIdController';
import { ListAllTemasController } from '@modules/temas/useCases/listAll/ListAllTemasController';

const temasRoutes = Router();

const createTemaController = new CreateTemaController();
const listAllTemasController = new ListAllTemasController();
const findTemaByIdController = new FindTemaByIdController();

temasRoutes.post('/create', createTemaController.handle);
temasRoutes.get('/getbyid/:tema_id', findTemaByIdController.handle);
temasRoutes.get('/listall', listAllTemasController.handle);

export { temasRoutes };
