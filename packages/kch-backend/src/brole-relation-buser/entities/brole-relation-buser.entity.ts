import { ToBpermission } from 'src/to-bpermission/entities/to-bpermission.entity';
import { ToBuser } from 'src/to-buser/entities/to-buser.entity';
import { OneToOne } from 'typeorm';

export class BroleRelationBuser {
  @OneToOne(() => ToBuser, (user) => user.id)
  roleId: number;
  @OneToOne(() => ToBpermission, (permission) => permission.id)
  permissionId: number;
}
