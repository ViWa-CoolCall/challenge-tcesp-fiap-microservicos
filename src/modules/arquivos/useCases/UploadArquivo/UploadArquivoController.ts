import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadArquivoUseCase } from './UploadArquivoUseCase';

class UploadArquivoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tempFilePath } = (request as any).files.file;

    const uploadArquivoUseCase = container.resolve(UploadArquivoUseCase);

    await uploadArquivoUseCase.execute(tempFilePath);

    return response.status(201).json('foi');
  }
}
export { UploadArquivoController };
