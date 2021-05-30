import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Tema } from '../../../../temas/infra/typeorm/entities/Tema';

@Entity('subtemas')
class Subtema {
  @PrimaryColumn()
  subtema_id?: string;

  @Column()
  nome: string;

  @Column()
  tema_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Tema)
  @JoinColumn({ name: 'tema_id' })
  tema: Tema;

  constructor() {
    if (!this.subtema_id) {
      this.subtema_id = uuidv4();
    }
  }
}

export { Subtema };
