import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadArquivoUseCase } from './UploadArquivoUseCase';

class UploadArquivoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tempFilePath } = (request as any).files.file;
    const { subtema_id } = request.body;

    const uploadArquivoUseCase = container.resolve(UploadArquivoUseCase);

    const arquivo = await uploadArquivoUseCase.execute(
      tempFilePath,
      subtema_id
    );

    return response.status(201).json(arquivo);
  }
}
export { UploadArquivoController };
