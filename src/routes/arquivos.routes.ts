import { Router } from 'express';

import { UploadArquivoController } from '@modules/arquivos/useCases/UploadArquivo/UploadArquivoController';

const arquivosRoutes = Router();

const UploadArquivosController = new UploadArquivoController();

arquivosRoutes.post('/upload', UploadArquivosController.handle);

export { arquivosRoutes };
