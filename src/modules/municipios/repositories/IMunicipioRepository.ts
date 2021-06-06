import { ICreateMunicipioDTO } from '../dtos/ICreateMunicipioDTO';
import { Municipio } from '../infra/typeorm/entities/Municipio';

interface IMunicipioRepository {
  create(data: ICreateMunicipioDTO): Promise<Municipio>;
  listAll(): Promise<Municipio[]>;
}

export { IMunicipioRepository };
