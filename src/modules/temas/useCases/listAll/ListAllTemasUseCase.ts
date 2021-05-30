import { inject, injectable } from 'tsyringe';

import { Tema } from '@modules/temas/infra/typeorm/entities/Tema';
import { ITemaRepository } from '@modules/temas/repositories/ITemaRepository';

@injectable()
class ListAllTemasUseCase {
  constructor(
    @inject('TemaRepository')
    private temaRepository: ITemaRepository
  ) {}

  async execute(): Promise<Tema[]> {
    const temas = await this.temaRepository.listAll();
    return temas;
  }
}
export { ListAllTemasUseCase };
