import { ICreateTemaDTO } from '../dtos/ICreateTemaDTO';
import { Tema } from '../infra/typeorm/entities/Tema';

interface ITemaRepository {
  create(data: ICreateTemaDTO): Promise<Tema>;
  findById(tema_id: string): Promise<Tema>;
  listAll(): Promise<Tema[]>;
}

export { ITemaRepository };
