import { container } from 'tsyringe';

import { MunicipioRepository } from '@modules/municipios/infra/typeorm/repositories/MunicipioRepository';
import { IMunicipioRepository } from '@modules/municipios/repositories/IMunicipioRepository';

container.registerSingleton<IMunicipioRepository>(
  'MunicipioRepository',
  MunicipioRepository
);
