import { Router } from 'express';
import { container } from 'tsyringe';

import { MunicipioController } from '../modules/municipios/controllers/MunicipioController';

const municipiosRoutes = Router();

const municipioController = container.resolve(MunicipioController);

municipiosRoutes.post('/create', municipioController.handle);

export { municipiosRoutes };
