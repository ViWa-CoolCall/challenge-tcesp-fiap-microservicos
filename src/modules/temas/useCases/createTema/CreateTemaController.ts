import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTemaUseCase } from './CreateTemaUseCase';

class CreateTemaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, municipio_id } = request.body;

    const createTemaUseCase = container.resolve(CreateTemaUseCase);
    const tema = await createTemaUseCase.execute({ nome, municipio_id });

    return response.status(201).json(tema);
  }
}
export { CreateTemaController };
