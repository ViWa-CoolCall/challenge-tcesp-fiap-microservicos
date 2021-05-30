import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateMunicipioUseCase } from './CreateMunicipioUseCase';

class CreateMunicipioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, populacao } = request.body;

    const createMunicipioUseCase = container.resolve(CreateMunicipioUseCase);

    const municipio = await createMunicipioUseCase.execute({
      nome,
      populacao,
    });

    return response.status(201).json(municipio);
  }
}

export { CreateMunicipioController };
