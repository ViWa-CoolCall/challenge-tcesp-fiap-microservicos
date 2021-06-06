import { inject, injectable } from 'tsyringe';

import { Municipio } from '../../infra/typeorm/entities/Municipio';
import { IMunicipioRepository } from '../../repositories/IMunicipioRepository';

@injectable()
class ListMunicipiosUseCase {
  constructor(
    @inject('MunicipioRepository')
    private municipioRepository: IMunicipioRepository
  ) {}

  async execute(): Promise<Municipio[]> {
    const municipios = await this.municipioRepository.listAll();
    return municipios;
  }
}
export { ListMunicipiosUseCase };
