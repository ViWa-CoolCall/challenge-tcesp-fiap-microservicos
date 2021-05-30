import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Municipio } from '@modules/municipios/infra/typeorm/entities/Municipio';

@Entity('temas')
class Tema {
  @PrimaryColumn()
  tema_id?: string;

  @Column()
  nome: string;

  @Column()
  municipio_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Municipio)
  @JoinColumn({ name: 'municipio_id' })
  municipio: Municipio;

  constructor() {
    if (!this.tema_id) {
      this.tema_id = uuidv4();
    }
  }
}

export { Tema };
