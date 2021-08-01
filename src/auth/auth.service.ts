import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'
import { CreateUserDto } from '../shared/dto/create-user.dto';
import { UserDto } from '../shared/dto/user.dto';
import { User } from '../shared/models/user.model';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async validateUser(username: string, password: string):Promise<User>{
        const user = await this.userService.findUserByName(username)
        if(user && user.password === password){
            return user
        }
        return null
    }

    async login(user:any){
        var payload = {username:user.username,sub: user.id}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    async getMe(user:any):Promise<UserDto>{
        return this.userService.findUserDetail(user.id)
    }

    async signUp(createUser:CreateUserDto):Promise<any>{
        const user = await this.userService.findUserByName(createUser.username)
        if(user){
            return {
                message: "User already exist. Please try again !!"
            }
        }
        return this.userService.createUser(createUser)
    }
}
