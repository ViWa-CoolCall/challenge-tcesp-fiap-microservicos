import { getRepository, Repository } from 'typeorm';

import { ICreateSubtemaDTO } from '@modules/subtemas/dtos/ICreateSubtemaDTO';

import { ISubtemaRepository } from '../../../repositories/ISubtemaRepository';
import { Subtema } from '../entities/Subtema';

class SubtemaRepository implements ISubtemaRepository {
  private repository: Repository<Subtema>;

  constructor() {
    this.repository = getRepository(Subtema);
  }

  async create({ nome, tema_id }: ICreateSubtemaDTO): Promise<Subtema> {
    const subtema = await this.repository.create({ nome, tema_id });
    return subtema;
  }

  async findById(subtema_id: string): Promise<Subtema> {
    const subtema = await this.repository.findOne(subtema_id);
    return subtema;
  }

  async listAll(): Promise<Subtema[]> {
    const subtemas = await this.repository.find();
    return subtemas;
  }
}

export { SubtemaRepository };
