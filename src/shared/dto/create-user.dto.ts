import { User } from "../models/user.model"
import { DtoUtils } from "../utils/dto"

export class CreateUserDto {
    username: string = null

    password: string = null

    email: string = null

    gender: string = null

    phone: string = null

    static fromUser(user: User):CreateUserDto{
        return DtoUtils.transformModelToDto(user, CreateUserDto) as CreateUserDto
    }

    static toUser(createUserDto: CreateUserDto):User{
        return DtoUtils.transformDtoToModel(createUserDto, User) as User
    }
}