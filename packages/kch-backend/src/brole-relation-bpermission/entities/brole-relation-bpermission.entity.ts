import { ToBpermission } from 'src/to-bpermission/entities/to-bpermission.entity';
import { ToBrole } from 'src/to-brole/entities/to-brole.entity';
import { Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class BroleRelationBpermission {
  @PrimaryColumn()
  @OneToOne(() => ToBrole, (role) => role.id)
  roleId: number;

  @OneToOne(() => ToBpermission, (permission) => permission.id)
  permissionId: number;
}
