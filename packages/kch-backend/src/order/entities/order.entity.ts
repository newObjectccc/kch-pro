import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum OrderType {
  Course = 1,
  Assessment = 2
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  orderNum: string;

  @Column()
  productId: string;

  @Column({ type: 'enum', enum: OrderType })
  orderType: OrderType;

  @BeforeInsert()
  generateOrderNumber() {
    const timestamp = Date.now();
    this.orderNum = `${timestamp}-${this.productId}`;
  }
}
