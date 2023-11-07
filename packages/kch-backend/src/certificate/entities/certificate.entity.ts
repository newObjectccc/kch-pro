import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Certificate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 100 })
  name: string;
}
