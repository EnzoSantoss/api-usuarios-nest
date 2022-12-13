import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { EndereçosModule } from './endereços/endereços.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Enzo123321456',
      database: 'cursonest',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    EndereçosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
