import { Module } from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize'
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './shared/models/user.model';
@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    database: 'phungstore',
    username: 'postgres',
    password: '123456',
    host: 'localhost',
    port: 5432,
    autoLoadModels: true,
    synchronize: false,
    models: [User]
  }), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
