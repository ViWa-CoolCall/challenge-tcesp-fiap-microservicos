import { Router } from 'express';

import { CreateTemaController } from '../modules/temas/useCases/createTema/CreateTemaController';
import { ListAllTemasController } from '../modules/temas/useCases/listAll/ListAllTemasController';

const temasRoutes = Router();

const createTemaController = new CreateTemaController();
const listAllTemasController = new ListAllTemasController();

temasRoutes.post('/create', createTemaController.handle);
temasRoutes.get('/listall', listAllTemasController.handle);

export { temasRoutes };
