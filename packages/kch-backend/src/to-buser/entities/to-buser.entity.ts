import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToBuser {
  @PrimaryGeneratedColumn()
  id: number;

  // 归属上级用户的id
  @Column('int')
  pid: number;

  @Column('varchar', { length: 20 })
  phone_num: string;

  @Column('varchar', { length: 50 })
  username: string;

  // bcrypt -> hash
  @Column('varchar', { length: 60 })
  password_hash: string;

  // 角色 id
  @Column('int', { nullable: true, default: null })
  role_id: number;

  // common fields
  @Column({ type: 'datetime' })
  created_at: string;

  @Column('varchar', { length: 50 })
  created_by: string;

  @Column({ type: 'int' })
  created_by_id: string;

  @Column({ type: 'datetime', nullable: true, default: null })
  updated_at: string;

  @Column('varchar', { length: 50, nullable: true, default: null })
  updated_by: string;

  @Column({ type: 'int', nullable: true, default: null })
  updated_by_id: string;

  @Column('varchar', { length: 255, nullable: true, default: null })
  remark: string;
}
