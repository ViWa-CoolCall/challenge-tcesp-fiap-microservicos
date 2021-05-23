import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class temas1621806745212 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'temas',
        columns: [
          {
            name: 'tema_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'municipio_id',
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
            name: 'FKMunicipioTema',
            referencedTableName: 'municipios',
            referencedColumnNames: ['municipio_id'],
            columnNames: ['municipio_id'],
            onUpdate: 'cascade',
            onDelete: 'set null',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('temas');
  }
}
