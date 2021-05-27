import { Router } from 'express';
import { container } from 'tsyringe';

import { MunicipioController } from '@modules/municipios/useCases/createMunicipio/MunicipioController';
import { ListMunicipiosController } from '@modules/municipios/useCases/listMunicipios/ListMunicipiosController';

const municipiosRoutes = Router();

const municipioController = container.resolve(MunicipioController);
const listMunicipiosController = container.resolve(ListMunicipiosController);

municipiosRoutes.post('/create', municipioController.handle);
municipiosRoutes.get('/listall', listMunicipiosController.handle);

export { municipiosRoutes };
