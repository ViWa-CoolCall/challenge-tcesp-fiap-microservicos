import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSubtemaUseCase } from './CreateSubtemaUseCase';

class CreateSubtemaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, tema_id } = request.body;

    const createSubtemaUseCase = container.resolve(CreateSubtemaUseCase);
    const subtema = await createSubtemaUseCase.execute({ nome, tema_id });

    return response.status(201).json(subtema);
  }
}
export { CreateSubtemaController };
