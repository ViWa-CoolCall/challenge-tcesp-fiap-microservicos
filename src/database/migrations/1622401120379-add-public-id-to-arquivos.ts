import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addPublicIdToArquivos1622401120379 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'arquivos',
      new TableColumn({
        name: 'public_id',
        type: 'varchar',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('arquivos', 'public_id');
  }
}
