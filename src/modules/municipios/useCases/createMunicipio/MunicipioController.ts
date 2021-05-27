import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { MunicipioUseCase } from './CreateMunicipioUseCase';

class MunicipioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, populacao } = request.body;

    const municipioUseCase = container.resolve(MunicipioUseCase);

    const municipio = await municipioUseCase.execute({
      nome,
      populacao,
    });

    return response.status(201).json(municipio);
  }
}

export { MunicipioController };
