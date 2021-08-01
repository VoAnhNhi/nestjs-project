import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../shared/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req: any){
        return this.authService.login(req.user)
    }

    @Post('signup')
    async signUp(@Body() createUser:CreateUserDto):Promise<any>{
        return this.authService.signUp(createUser)
    }
}
