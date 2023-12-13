import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToCrole {
  @PrimaryGeneratedColumn()
  id: number;
}
