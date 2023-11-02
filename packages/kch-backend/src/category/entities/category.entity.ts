import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  pid: number;

  @Index()
  @Column('varchar', { length: 50 })
  name: string;
}
