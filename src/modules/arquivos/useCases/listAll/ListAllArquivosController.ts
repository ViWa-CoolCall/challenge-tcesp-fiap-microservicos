import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllArquivosUseCase } from './ListAllArquivosUseCase';

class ListAllArquivosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { subtema_id } = request.params;

    const listAllArquivosUseCaseUseCase = container.resolve(
      ListAllArquivosUseCase
    );
    const arquivos = await listAllArquivosUseCaseUseCase.execute(subtema_id);

    return response.status(201).json(arquivos);
  }
}
export { ListAllArquivosController };
