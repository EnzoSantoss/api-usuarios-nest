import { PartialType } from '@nestjs/mapped-types';
import { CreateEndereçoDto } from './create-endereço.dto';

export class UpdateEndereçoDto extends PartialType(CreateEndereçoDto) {}
