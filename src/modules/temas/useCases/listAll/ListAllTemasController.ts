import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllTemasUseCase } from './ListAllTemasUseCase';

class ListAllTemasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllTemasUseCase = container.resolve(ListAllTemasUseCase);
    const temas = await listAllTemasUseCase.execute();

    return response.status(201).json(temas);
  }
}
export { ListAllTemasController };
