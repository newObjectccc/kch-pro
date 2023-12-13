import { Certificate } from 'src/certificate/entities/certificate.entity';
import { Course } from 'src/course/entities/course.entity';
import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum GRADE_ENUMS {
  PRIMARY = 1,
  MIDDLE = 2,
  HIGH = 3,
  UNI = 4
}

@Entity()
export class ToCuser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  gender: number;

  @Column('datetime', { nullable: true })
  birthDate: string;

  @Column('int', { nullable: true })
  grade: typeof GRADE_ENUMS;

  @Column('varchar', { length: 50 })
  realname: string;

  @Column('varchar', { length: 50 })
  province: string;

  @Column('int', { default: 0 })
  integral: number;

  @Index()
  @Column()
  phoneNum: string;

  @Column('int')
  roleId: number;

  @OneToMany(() => Certificate, (cert) => cert.id)
  certificateIdList: string[];

  @OneToMany(() => Course, (course) => course.id)
  courseIdList: string[];

  @OneToMany(() => Course, (course) => course.id)
  finishedCourseIdList: string[];

  @OneToMany(() => Course, (course) => course.id)
  likeCourseIdList: string[];

  @OneToMany(() => Order, (order) => order.id)
  orderIdList: string;
}
