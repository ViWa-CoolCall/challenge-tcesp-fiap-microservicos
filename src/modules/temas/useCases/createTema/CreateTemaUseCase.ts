import { inject, injectable } from 'tsyringe';

import { ICreateTemaDTO } from '../../dtos/ICreateTemaDTO';
import { Tema } from '../../infra/typeorm/entities/Tema';
import { ITemaRepository } from '../../repositories/ITemaRepository';

@injectable()
class CreateTemaUseCase {
  constructor(
    @inject('TemaRepository')
    private temaRepository: ITemaRepository
  ) {}

  async execute({ nome, municipio_id }: ICreateTemaDTO): Promise<Tema> {
    const tema = await this.temaRepository.create({ nome, municipio_id });
    return tema;
  }
}
export { CreateTemaUseCase };
