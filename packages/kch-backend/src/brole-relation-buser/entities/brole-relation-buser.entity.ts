import { ToBrole } from 'src/to-brole/entities/to-brole.entity';
import { ToBuser } from 'src/to-buser/entities/to-buser.entity';
import { Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class BroleRelationBuser {
  @PrimaryColumn()
  @OneToOne(() => ToBuser, (user) => user.id)
  userId: number;

  @OneToOne(() => ToBrole, (role) => role.id)
  roleId: number;
}
