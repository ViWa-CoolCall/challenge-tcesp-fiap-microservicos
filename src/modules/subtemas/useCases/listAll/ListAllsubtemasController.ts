import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllSubtemasUseCase } from './ListAllSubtemasUseCase';

class ListAllsubtemasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllSubtemasUseCase = container.resolve(ListAllSubtemasUseCase);
    const subtemas = await listAllSubtemasUseCase.execute();

    return response.status(201).json(subtemas);
  }
}
export { ListAllsubtemasController };
