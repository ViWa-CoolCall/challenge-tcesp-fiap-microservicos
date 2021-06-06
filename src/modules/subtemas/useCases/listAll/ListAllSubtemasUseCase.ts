import { inject, injectable } from 'tsyringe';

import { Subtema } from '../../infra/typeorm/entities/Subtema';
import { ISubtemaRepository } from '../../repositories/ISubtemaRepository';

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
