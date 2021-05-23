import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class arquivos1621809318105 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'arquivos',
        columns: [
          {
            name: 'arquivo_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'formato',
            type: 'varchar',
          },
          {
            name: 'url',
            type: 'varchar',
          },
          {
            name: 'completo',
            type: 'boolean',
          },
          {
            name: 'subtema_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKSubtemasArquivos',
            referencedTableName: 'subtemas',
            referencedColumnNames: ['subtema_id'],
            columnNames: ['subtema_id'],
            onUpdate: 'cascade',
            onDelete: 'set null',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('arquivos');
  }
}
