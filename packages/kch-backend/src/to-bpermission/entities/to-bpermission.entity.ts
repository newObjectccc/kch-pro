import { Column, PrimaryGeneratedColumn } from 'typeorm';
export class ToBpermission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  name: string;
}
