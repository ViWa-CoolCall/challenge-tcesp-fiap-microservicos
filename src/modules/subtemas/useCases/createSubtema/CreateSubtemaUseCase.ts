import { inject, injectable } from 'tsyringe';

import { ICreateSubtemaDTO } from '@modules/subtemas/dtos/ICreateSubtemaDTO';
import { Subtema } from '@modules/subtemas/infra/typeorm/entities/Subtema';
import { ISubtemaRepository } from '@modules/subtemas/repositories/ISubtemaRepository';

@injectable()
class CreateSubtemaUseCase {
  constructor(
    @inject('SubtemaRepository')
    private subtemaRepository: ISubtemaRepository
  ) {}

  async execute({ nome, tema_id }: ICreateSubtemaDTO): Promise<Subtema> {
    const subtema = await this.subtemaRepository.create({ nome, tema_id });
    return subtema;
  }
}
export { CreateSubtemaUseCase };
