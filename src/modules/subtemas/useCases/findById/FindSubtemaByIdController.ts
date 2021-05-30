import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindSubtemaByIdUseCase } from './FindSubtemaByIdUseCase';

class FindSubtemaByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { subtema_id } = request.params;

    const findSubtemaByIdUseCase = container.resolve(FindSubtemaByIdUseCase);
    const subtema = await findSubtemaByIdUseCase.execute(subtema_id);

    return response.status(201).json(subtema);
  }
}
export { FindSubtemaByIdController };
