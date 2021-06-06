import { Router } from 'express';
import { CreateMunicipioController } from 'modules/municipios/useCases/createMunicipio/CreateMunicipioController';
import { ListMunicipiosController } from 'modules/municipios/useCases/listMunicipios/ListMunicipiosController';
import { container } from 'tsyringe';

const municipiosRoutes = Router();

const createMunicipioController = new CreateMunicipioController();
const listMunicipiosController = new ListMunicipiosController();

municipiosRoutes.post('/create', createMunicipioController.handle);
municipiosRoutes.get('/listall', listMunicipiosController.handle);

export { municipiosRoutes };
