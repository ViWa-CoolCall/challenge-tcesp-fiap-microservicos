import cloudinary from 'cloudinary';
import { inject, injectable } from 'tsyringe';

import { Arquivo } from '@modules/arquivos/infra/typeorm/entities/Arquivo';

import * as cloudinaryConfig from '../../../../config/cloudinary';
import { IArquivoRepository } from '../../repositories/IArquivoRepository';

@injectable()
class UploadArquivoUseCase {
  constructor(
    @inject('ArquivoRepository')
    private arquivoRepository: IArquivoRepository
  ) {}

  async execute(tempFilePath: string): Promise<void> {
    cloudinary.v2.config(cloudinaryConfig);
    const w = await cloudinary.v2.uploader.upload(tempFilePath, {
      folder: 'uploads',
    });

    console.log(w);

    // const arquivo = await this.arquivoRepository.create();
    // return arquivo;
  }
}

export { UploadArquivoUseCase };
