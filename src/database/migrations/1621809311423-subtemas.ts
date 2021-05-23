import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class subtemas1621809311423 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'subtemas',
        columns: [
          {
            name: 'subtema_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'tema_id',
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
            name: 'FKTemasSubtemas',
            referencedTableName: 'temas',
            referencedColumnNames: ['tema_id'],
            columnNames: ['tema_id'],
            onUpdate: 'cascade',
            onDelete: 'set null',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('subtemas');
  }
}
