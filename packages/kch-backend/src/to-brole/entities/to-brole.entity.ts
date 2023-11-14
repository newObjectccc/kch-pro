import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToBrole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  @Index({ unique: true })
  name: string;

  @Column('int', { nullable: true })
  pid: number;

  // common fields
  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @Column('varchar', { length: 50 })
  createdBy: string;

  @Column({ type: 'int' })
  createdById: number;

  @Column({ type: 'datetime', default: null, nullable: true })
  updatedAt: string;

  @Column('varchar', { length: 50, nullable: true, default: null })
  updatedByName: string;

  @Column('int', { nullable: true, default: null })
  updatedById: number;
}
