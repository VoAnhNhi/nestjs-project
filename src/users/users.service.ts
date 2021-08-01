import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { CreateUserDto } from '../shared/dto/create-user.dto';
import { UserDto } from '../shared/dto/user.dto';
import { User } from '../shared/models/user.model';
@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private readonly userModel: typeof User,
    ){}

    async findUserByName(username: string):Promise<User>{
        return this.userModel.findOne({
            where:{
                username: username
            }
        })
    }

    async findUserDetail(id: number):Promise<UserDto>{
        const user:User = await  this.userModel.findOne({
            where:{
                id: id
            }
        })
        return UserDto.fromUser(user)
    }

    async createUser(createUserDto: CreateUserDto):Promise<UserDto>{
        const user = CreateUserDto.toUser(createUserDto)
        const createUser = await user.save()
        return UserDto.fromUser(createUser)
    }
}
