import { Category } from 'src/category/entities/category.entity';
import { Chapter } from 'src/chapter/entities/chapter.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 200 })
  name: string;

  @OneToMany(() => Category, (cate: Category) => cate.id)
  categoryList: number[];

  @Column('varchar', { length: 256 })
  cover: string;

  @Column('decimal')
  price: number;

  @OneToMany(() => Chapter, (chap: Chapter) => chap.id)
  chapterList: number[];
}
