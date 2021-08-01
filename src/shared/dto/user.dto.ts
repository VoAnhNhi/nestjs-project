import { User } from "../models/user.model";
import { DtoUtils } from "../utils/dto";
import { CreateUserDto } from "./create-user.dto";

export class UserDto extends CreateUserDto{
    id: number = null

    static fromUser(user: User):UserDto{
        return DtoUtils.transformModelToDto(user, UserDto) as UserDto
    }

    static toUser(userDto: UserDto):User{
        return DtoUtils.transformDtoToModel(userDto, User) as User
    }
}