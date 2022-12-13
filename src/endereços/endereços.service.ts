import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateEndereçoDto } from './dto/create-endereço.dto';
import { UpdateEndereçoDto } from './dto/update-endereço.dto';
import { Endereço } from './entities/endereço.entity';

@Injectable()
export class EndereçosService {
  constructor(
    @InjectModel(Endereço) private endereçoModule: typeof Endereço,
    private readonly userService: UsersService,
  ) {}
  async create(createEndereçoDto: CreateEndereçoDto) {
    return await this.endereçoModule.create(createEndereçoDto as any);
  }

  async findAll() {
    //console.log(await this.userService.findAll());
    return `This action returns all endereços`;
  }

  async findOne(id: number) {
    return await this.endereçoModule.findOne({
      where: { id },
      include: User,
      plain: true,
    });
  }

  update(id: number, updateEndereçoDto: UpdateEndereçoDto) {
    return `This action updates a #${id} endereço`;
  }

  remove(id: number) {
    return `This action removes a #${id} endereço`;
  }
}
