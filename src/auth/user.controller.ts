import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { UserDto } from "../shared/dto/user.dto";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Controller('user/me')
export class UserController {
    constructor(private readonly authService: AuthService){}

    @UseGuards(JwtAuthGuard)
    @Get('')
    async getMe(@Request() req:any):Promise<UserDto>{
        return this.authService.getMe(req.user)
    }
}