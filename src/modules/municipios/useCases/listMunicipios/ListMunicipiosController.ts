import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListMunicipiosUseCase } from './ListMunicipiosUseCase';

class ListMunicipiosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listMunicipiosUseCase = container.resolve(ListMunicipiosUseCase);
    const municipios = await listMunicipiosUseCase.execute();

    return response.status(201).json(municipios);
  }
}
export { ListMunicipiosController };
