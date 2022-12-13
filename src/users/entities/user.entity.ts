import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Endereço } from 'src/endereços/entities/endereço.entity';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => Endereço)
  endereços: Endereço[];
}
