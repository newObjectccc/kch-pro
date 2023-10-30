import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class ToBrole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  name: string;

  @Column('int')
  pid: number;
}
