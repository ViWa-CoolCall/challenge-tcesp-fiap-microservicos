import { inject, injectable } from 'tsyringe';

import { Subtema } from '@modules/subtemas/infra/typeorm/entities/Subtema';
import { ISubtemaRepository } from '@modules/subtemas/repositories/ISubtemaRepository';

@injectable()
class ListAllSubtemasUseCase {
  constructor(
    @inject('SubtemaRepository')
    private subtemaRepository: ISubtemaRepository
  ) {}

  async execute(): Promise<Subtema[]> {
    const subtemas = await this.subtemaRepository.listAll();
    return subtemas;
  }
}
export { ListAllSubtemasUseCase };
