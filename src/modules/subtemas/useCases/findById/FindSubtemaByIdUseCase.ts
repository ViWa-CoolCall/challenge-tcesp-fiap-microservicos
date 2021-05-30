import { inject, injectable } from 'tsyringe';

import { Subtema } from '@modules/subtemas/infra/typeorm/entities/Subtema';
import { ISubtemaRepository } from '@modules/subtemas/repositories/ISubtemaRepository';

@injectable()
class FindSubtemaByIdUseCase {
  constructor(
    @inject('SubtemaRepository')
    private subtemaRepository: ISubtemaRepository
  ) {}

  async execute(subtema_id: string): Promise<Subtema> {
    const subtema = await this.subtemaRepository.findById(subtema_id);
    return subtema;
  }
}
export { FindSubtemaByIdUseCase };
