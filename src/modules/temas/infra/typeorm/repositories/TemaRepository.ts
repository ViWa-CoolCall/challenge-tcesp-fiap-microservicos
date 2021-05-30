import { getRepository, Repository } from 'typeorm';

import { ICreateTemaDTO } from '@modules/temas/dtos/ICreateTemaDTO';
import { ITemaRepository } from '@modules/temas/repositories/ITemaRepository';

import { Tema } from '../entities/Tema';

class TemaRepository implements ITemaRepository {
  private repository: Repository<Tema>;

  constructor() {
    this.repository = getRepository(Tema);
  }
  async create({ nome, municipio_id }: ICreateTemaDTO): Promise<Tema> {
    const tema = this.repository.create({ nome, municipio_id });
    await this.repository.save(tema);
    return tema;
  }

  async findById(tema_id: string): Promise<Tema> {
    const tema = await this.repository.findOne(tema_id);
    return tema;
  }

  async listAll(): Promise<Tema[]> {
    const temas = await this.repository.find();
    return temas;
  }
}

export { TemaRepository };
