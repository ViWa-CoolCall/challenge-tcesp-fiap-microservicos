import { Router } from 'express';

import { municipiosRoutes } from './municipios.routes';

const router = Router();

router.use('/municipios', municipiosRoutes);

export { router };
