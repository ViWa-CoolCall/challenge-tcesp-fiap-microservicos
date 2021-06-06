import { getRepository, Repository } from 'typeorm';

import { ICreateSubtemaDTO } from '../../../dtos/ICreateSubtemaDTO';
import { ISubtemaRepository } from '../../../repositories/ISubtemaRepository';
import { Subtema } from '../entities/Subtema';

class SubtemaRepository implements ISubtemaRepository {
  private repository: Repository<Subtema>;

  constructor() {
    this.repository = getRepository(Subtema);
  }

  async create({ nome, tema_id }: ICreateSubtemaDTO): Promise<Subtema> {
    const subtema = this.repository.create({ nome, tema_id });
    await this.repository.save(subtema);
    return subtema;
  }

  async listAll(): Promise<Subtema[]> {
    const subtemas = await this.repository.find();
    return subtemas;
  }
}

export { SubtemaRepository };
