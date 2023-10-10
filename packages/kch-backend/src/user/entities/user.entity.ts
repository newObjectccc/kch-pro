import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn('varchar', { length: 200 })
  openId: string;

  @Column('varchar', { length: 200 })
  avatarUrl: string;

  @Column('varchar', { length: 50 })
  userName: string;

  /**
   * [description] 用户定位 如: '湖南省,长沙市,岳麓区'
   */
  @Column('varchar', { length: 200 })
  location: string;

  @Column('int')
  sex: number;

  @Column('datetime')
  createdAt: Date;

  @Column('datetime')
  birthday: Date;

  @Column('char', { length: 11 })
  mobile: number;
}
