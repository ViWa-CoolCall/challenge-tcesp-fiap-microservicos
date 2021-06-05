import { getRepository, Repository } from 'typeorm';

import { ICreateArquivoDTO } from '@modules/arquivos/dtos/ICreateArquivoDTO';
import { IArquivoRepository } from '@modules/arquivos/repositories/IArquivoRepository';

import { Arquivo } from '../entities/Arquivo';

class ArquivoRepository implements IArquivoRepository {
  private repository: Repository<Arquivo>;

  constructor() {
    this.repository = getRepository(Arquivo);
  }

  async create({
    formato,
    url,
    completo,
    public_id,
    subtema_id,
  }: ICreateArquivoDTO): Promise<Arquivo> {
    const arquivo = await this.repository.create({
      formato,
      url,
      public_id,
      completo,
      subtema_id,
    });
    await this.repository.save(arquivo);
    return arquivo;
  }

  async listAll(subtema_id: string): Promise<Arquivo[]> {
    const arquivos = await this.repository.find({ where: { subtema_id } });
    return arquivos;
  }
}

export { ArquivoRepository };
