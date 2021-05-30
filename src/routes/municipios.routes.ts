import { Router } from 'express';
import { container } from 'tsyringe';

import { CreateMunicipioController } from '@modules/municipios/useCases/createMunicipio/CreateMunicipioController';
import { ListMunicipiosController } from '@modules/municipios/useCases/listMunicipios/ListMunicipiosController';

const municipiosRoutes = Router();

const createMunicipioController = new CreateMunicipioController();
const listMunicipiosController = new ListMunicipiosController();

municipiosRoutes.post('/create', createMunicipioController.handle);
municipiosRoutes.get('/listall', listMunicipiosController.handle);

export { municipiosRoutes };
