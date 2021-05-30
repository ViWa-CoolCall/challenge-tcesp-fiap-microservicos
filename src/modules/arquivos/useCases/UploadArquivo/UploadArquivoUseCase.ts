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

  async execute(tempFilePath: string, subtema_id: string): Promise<Arquivo> {
    cloudinary.v2.config(cloudinaryConfig);
    const { public_id, format, secure_url } =
      await cloudinary.v2.uploader.upload(tempFilePath, {
        folder: 'uploads',
      });

    const arquivo = await this.arquivoRepository.create({
      url: secure_url,
      formato: format,
      completo: true,
      public_id,
      subtema_id,
    });

    return arquivo;
  }
}

export { UploadArquivoUseCase };
