import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToBrole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  @Index({ unique: true })
  name: string;

  @Column('int')
  pid: number;
}
