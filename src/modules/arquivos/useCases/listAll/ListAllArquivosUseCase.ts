import { inject, injectable } from 'tsyringe';

import { Arquivo } from '@modules/arquivos/infra/typeorm/entities/Arquivo';

import { IArquivoRepository } from '../../repositories/IArquivoRepository';

@injectable()
class ListAllArquivosUseCase {
  constructor(
    @inject('ArquivoRepository')
    private arquivoRepository: IArquivoRepository
  ) {}
  async execute(subtema_id: string): Promise<Arquivo[]> {
    const arquivos = await this.arquivoRepository.listAll(subtema_id);
    return arquivos;
  }
}
export { ListAllArquivosUseCase };
