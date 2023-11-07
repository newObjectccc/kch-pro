import { Certificate } from 'src/certificate/entities/certificate.entity';
import { Course } from 'src/course/entities/course.entity';
import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToCuser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  username: string;

  @Column('varchar', { length: 50 })
  realname: string;

  @Column('varchar', { length: 50 })
  province: string;

  @Column('int', { default: 0 })
  integral: number;

  @Column()
  phoneNum: string;

  @OneToMany(() => Certificate, (cert) => cert.id)
  certificateIdList: string[];

  @OneToMany(() => Course, (course) => course.id)
  courseIdList: string[];

  @OneToMany(() => Course, (course) => course.id)
  finishedCourseIdList: string[];

  @OneToMany(() => Course, (course) => course.id)
  storedCourseIdList: string[];

  @OneToMany(() => Order, (order) => order.id)
  orderIdList: string;
}
