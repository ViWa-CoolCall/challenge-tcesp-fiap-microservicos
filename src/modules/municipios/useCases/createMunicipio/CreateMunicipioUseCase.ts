import { inject, injectable } from 'tsyringe';

import { ICreateMunicipioDTO } from '../../dtos/ICreateMunicipioDTO';
import { Municipio } from '../../infra/typeorm/entities/Municipio';
import { IMunicipioRepository } from '../../repositories/IMunicipioRepository';

@injectable()
class MunicipioUseCase {
  constructor(
    @inject('MunicipioRepository')
    private municipiosRepository: IMunicipioRepository
  ) {}

  async execute({ nome, populacao }: ICreateMunicipioDTO): Promise<Municipio> {
    const municipio = await this.municipiosRepository.create({
      nome,
      populacao,
    });

    return municipio;
  }
}

export { MunicipioUseCase };
