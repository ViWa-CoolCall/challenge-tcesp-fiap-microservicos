import { ICreateSubtemaDTO } from '../dtos/ICreateSubtemaDTO';
import { Subtema } from '../infra/typeorm/entities/Subtema';

interface ISubtemaRepository {
  create(data: ICreateSubtemaDTO): Promise<Subtema>;
  findById(subtema_id: string): Promise<Subtema>;
  listAll(): Promise<Subtema[]>;
}

export { ISubtemaRepository };
