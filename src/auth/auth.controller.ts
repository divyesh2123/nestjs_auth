import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { RegisterDTO } from 'src/user/register.dto';
import { LoginDTO } from './login.dto';
import * as bcrypt from 'bcrypt';
@Controller('auth')
export class AuthController {

    constructor(
        private userService: UserService,
        private authService: AuthService,
        
      ) {
        
      }

      @Post('register')
      async register(@Body() RegisterDTO: RegisterDTO) {

        let p = await bcrypt.hash("abcsad",10);
        RegisterDTO.password = p;
        const user = await this.userService.create(RegisterDTO);
        const payload = {
        
          email: user.email,
        };
    
        const token = await this.authService.signPayload(payload);
        return { user, token };
      }
      @Post('login')
      async login(@Body() UserDTO: LoginDTO) {
        const user = await this.userService.findByLogin(UserDTO);
        const payload = {
          email: user.email,
        };
        const token = await this.authService.signPayload(payload);
        return { user, token};
      }
  
  }




