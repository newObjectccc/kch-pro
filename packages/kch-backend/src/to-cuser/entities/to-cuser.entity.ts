import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToCuser {
  @PrimaryGeneratedColumn()
  id: number;
}
