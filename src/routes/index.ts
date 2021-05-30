import { Router } from 'express';

import { arquivosRoutes } from './arquivos.routes';
import { municipiosRoutes } from './municipios.routes';
import { subtemasRoutes } from './subtemas.routes';
import { temasRoutes } from './temas.routes';

const router = Router();

router.use('/municipios', municipiosRoutes);
router.use('/temas', temasRoutes);
router.use('/subtemas', subtemasRoutes);
router.use('/arquivos', arquivosRoutes);

export { router };
