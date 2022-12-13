import { Module } from '@nestjs/common';
import { EndereçosService } from './endereços.service';
import { EndereçosController } from './endereços.controller';
import { UsersModule } from 'src/users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Endereço } from './entities/endereço.entity';

@Module({
  imports: [SequelizeModule.forFeature([Endereço]), UsersModule],
  controllers: [EndereçosController],
  providers: [EndereçosService],
})
export class EndereçosModule {}
