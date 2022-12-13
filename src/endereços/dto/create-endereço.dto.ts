import { IsNumber, IsString } from 'class-validator';

export class CreateEndereçoDto {
  @IsNumber()
  userId: number;

  @IsString()
  houses: string;
}
