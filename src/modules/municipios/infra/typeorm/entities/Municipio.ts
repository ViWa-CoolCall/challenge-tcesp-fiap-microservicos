import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('municipios')
class Municipio {
  @PrimaryColumn()
  municipio_id?: string;

  @Column()
  nome: string;

  @Column()
  populacao: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.municipio_id) {
      this.municipio_id = uuidv4();
    }
  }
}

export { Municipio };
