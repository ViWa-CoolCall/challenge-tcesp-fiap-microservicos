import { inject, injectable } from 'tsyringe';

import { Arquivo } from '../../infra/typeorm/entities/Arquivo';
import { IArquivoRepository } from '../../repositories/IArquivoRepository';

@injectable()
class ListAllArquivosUseCase {
  constructor(
    @inject('ArquivoRepository')
    private arquivoRepository: IArquivoRepository
  ) {}
  async execute(): Promise<Arquivo[]> {
    const arquivos = await this.arquivoRepository.listAll();
    return arquivos;
  }
}
export { ListAllArquivosUseCase };
