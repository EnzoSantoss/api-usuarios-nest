import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

@Table
export class Endereço extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;
  @Column
  houses: string;

  @BelongsTo(() => User)
  user: User;
}
