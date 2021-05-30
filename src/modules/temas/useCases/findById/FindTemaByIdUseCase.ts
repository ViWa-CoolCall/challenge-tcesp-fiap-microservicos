import { inject, injectable } from 'tsyringe';

import { Tema } from '@modules/temas/infra/typeorm/entities/Tema';
import { ITemaRepository } from '@modules/temas/repositories/ITemaRepository';

@injectable()
class FindTemaByIdUseCase {
  constructor(
    @inject('TemaRepository')
    private temaRepository: ITemaRepository
  ) {}

  async execute(tema_id: string): Promise<Tema> {
    const tema = await this.temaRepository.findById(tema_id);
    return tema;
  }
}
export { FindTemaByIdUseCase };
