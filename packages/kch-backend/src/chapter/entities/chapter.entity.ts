import { PrimaryGeneratedColumn } from 'typeorm';

export class Chapter {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
