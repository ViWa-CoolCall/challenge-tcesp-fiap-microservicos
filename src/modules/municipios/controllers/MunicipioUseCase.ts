import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import { ICreateMunicipioDTO } from '../dtos/ICreateMunicipioDTO';
import { IMunicipioRepository } from '../repositories/IMunicipioRepository';

@injectable()
class MunicipioUseCase {
  constructor(
    @inject('MunicipioRepository')
    private municipiosRepository: IMunicipioRepository
  ) {}

  async execute({ nome, populacao }: ICreateMunicipioDTO): Promise<void> {
    await this.municipiosRepository.create({
      nome,
      populacao,
    });
  }
}

export { MunicipioUseCase };
