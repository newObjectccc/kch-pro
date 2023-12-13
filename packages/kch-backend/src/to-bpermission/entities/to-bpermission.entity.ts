import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToBpermission {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column('varchar', { length: 100 })
  name: string;
}
