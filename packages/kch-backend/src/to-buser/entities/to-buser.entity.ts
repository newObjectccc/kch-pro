import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToBuser {
  @PrimaryGeneratedColumn()
  id: number;

  // 归属上级用户的id
  @Column({ type: 'int', nullable: true, default: null })
  pid: number;

  @Column('varchar', { length: 20, nullable: true, default: null })
  phoneNum: string;

  @Column('varchar', { length: 50, nullable: true, default: null })
  username: string;

  // bcrypt -> hash
  @Column('varchar', { length: 60 })
  password: string;

  // 角色 id
  @Column('int', { nullable: true, default: null })
  roleId: number;

  // common fields
  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  // @Column('varchar', { length: 50 })
  // createdBy: string;

  // @Column({ type: 'int' })
  // createdById: string;

  @Column({ type: 'datetime', nullable: true, default: null })
  updatedAt: string;

  @Column('varchar', { length: 50, nullable: true, default: null })
  updatedBy: string;

  @Column({ type: 'int', nullable: true, default: null })
  updatedById: string;

  @Column('varchar', { length: 255, nullable: true, default: null })
  remark: string;
}
