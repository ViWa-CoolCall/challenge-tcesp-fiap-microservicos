import { ICreateArquivoDTO } from '../dtos/ICreateArquivoDTO';
import { Arquivo } from '../infra/typeorm/entities/Arquivo';

interface IArquivoRepository {
  create(data: ICreateArquivoDTO): Promise<Arquivo>;
  listAll(subtema_id: string): Promise<Arquivo[]>;
}

export { IArquivoRepository };
