import { container } from 'tsyringe';

import { ArquivoRepository } from './modules/arquivos/infra/typeorm/repositories/ArquivoRepository';
import { IArquivoRepository } from './modules/arquivos/repositories/IArquivoRepository';
import { MunicipioRepository } from './modules/municipios/infra/typeorm/repositories/MunicipioRepository';
import { IMunicipioRepository } from './modules/municipios/repositories/IMunicipioRepository';
import { SubtemaRepository } from './modules/subtemas/infra/typeorm/repositories/SubtemaRepository';
import { ISubtemaRepository } from './modules/subtemas/repositories/ISubtemaRepository';
import { TemaRepository } from './modules/temas/infra/typeorm/repositories/TemaRepository';
import { ITemaRepository } from './modules/temas/repositories/ITemaRepository';

container.registerSingleton<IMunicipioRepository>(
  'MunicipioRepository',
  MunicipioRepository
);

container.registerSingleton<ITemaRepository>('TemaRepository', TemaRepository);

container.registerSingleton<ISubtemaRepository>(
  'SubtemaRepository',
  SubtemaRepository
);

container.registerSingleton<IArquivoRepository>(
  'ArquivoRepository',
  ArquivoRepository
);
