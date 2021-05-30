import { inject, injectable } from 'tsyringe';

import { ICreateTemaDTO } from '@modules/temas/dtos/ICreateTemaDTO';
import { Tema } from '@modules/temas/infra/typeorm/entities/Tema';
import { ITemaRepository } from '@modules/temas/repositories/ITemaRepository';

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
