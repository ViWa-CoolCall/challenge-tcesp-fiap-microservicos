import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Subtema } from '../../../../subtemas/infra/typeorm/entities/Subtema';

@Entity('arquivos')
class Arquivo {
  @PrimaryColumn()
  arquivo_id?: string;

  @Column()
  formato: string;

  @Column()
  url: string;

  @Column()
  completo: boolean;

  @Column()
  public_id: string;

  @Column()
  subtema_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Subtema)
  @JoinColumn({ name: 'subtema_id' })
  subtema: Subtema;

  constructor() {
    if (!this.arquivo_id) {
      this.arquivo_id = uuidv4();
    }
  }
}

export { Arquivo };
