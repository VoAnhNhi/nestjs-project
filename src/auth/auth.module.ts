import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import {SequelizeModule} from '@nestjs/sequelize'
import {config} from '../config/constants'
import { User } from '../shared/models/user.model';
import { UsersService } from '../users/users.service';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
import { UserController } from './user.controller';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports:[
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: config.secretKey,
      signOptions: {
        expiresIn: '1d'
      }
    }),
    SequelizeModule.forFeature([User])
],
  providers: [AuthService,UsersService,LocalStrategy,JwtStrategy],
  controllers: [AuthController,UserController]
})
export class AuthModule {}
