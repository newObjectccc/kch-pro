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

  @Column({ type: 'datetime', default: null, nullable: true })
  updatedAt: string;

  @Column('varchar', { length: 50, nullable: true, default: null })
  updatedByName: string;

  @Column('int', { nullable: true, default: null })
  updatedById: number;
}
