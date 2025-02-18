import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { Payload } from 'src/types/Payload';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService) {}
  
    async signPayload(payload: Payload) {
      return sign(payload, "ASDSDVFSACSDFSDSFSDF", { expiresIn: '7d' });
    }
    async validateUser(payload: Payload) {
      return await this.userService.findByPayload(payload);
    }
    

}
