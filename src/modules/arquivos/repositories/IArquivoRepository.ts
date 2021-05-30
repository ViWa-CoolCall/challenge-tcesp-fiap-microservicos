import { ICreateArquivoDTO } from '../dtos/ICreateArquivoDTO';
import { Arquivo } from '../infra/typeorm/entities/Arquivo';

interface IArquivoRepository {
  create(data: ICreateArquivoDTO): Promise<Arquivo>;
  getById(arquivo_id: string): Promise<Arquivo>;
  listAll(): Promise<Arquivo[]>;
}

export { IArquivoRepository };
