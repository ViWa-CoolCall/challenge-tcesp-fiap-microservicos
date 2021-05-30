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
    subtema_id,
  }: ICreateArquivoDTO): Promise<Arquivo> {
    const arquivo = await this.repository.create({
      formato,
      url,
      completo,
      subtema_id,
    });
    await this.repository.save(arquivo);
    return arquivo;
  }

  async getById(arquivo_id: string): Promise<Arquivo> {
    const arquivo = await this.repository.findOne(arquivo_id);
    return arquivo;
  }

  async listAll(): Promise<Arquivo[]> {
    const arquivos = await this.repository.find();
    return arquivos;
  }
}

export { ArquivoRepository };
