import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindTemaByIdUseCase } from './FindTemaByIdUseCase';

class FindTemaByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tema_id } = request.params;

    const findTemaByIdUseCase = container.resolve(FindTemaByIdUseCase);
    const tema = await findTemaByIdUseCase.execute(tema_id);

    return response.status(201).json(tema);
  }
}
export { FindTemaByIdController };
