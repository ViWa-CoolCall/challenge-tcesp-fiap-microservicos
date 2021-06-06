import { inject, injectable } from 'tsyringe';

import { Tema } from '../../infra/typeorm/entities/Tema';
import { ITemaRepository } from '../../repositories/ITemaRepository';

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
