import { Router } from 'express';

import { ListAllArquivosController } from '@modules/arquivos/useCases/listAll/ListAllArquivosController';
import { UploadArquivoController } from '@modules/arquivos/useCases/UploadArquivo/UploadArquivoController';

const arquivosRoutes = Router();

const UploadArquivosController = new UploadArquivoController();
const listAllArquivosController = new ListAllArquivosController();

arquivosRoutes.post('/upload', UploadArquivosController.handle);
arquivosRoutes.get('/listall/:subtema_id', listAllArquivosController.handle);

export { arquivosRoutes };
