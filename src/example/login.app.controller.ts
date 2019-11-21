import { Controller, Get } from '@nestjs/common';
import {loginService} from './login.app.service';

@Controller('login')
export class loginController {
  constructor(private readonly loginService: loginService ){

  }
  @Get()
   public GetUsers(){
      return this.loginService.getUsers();
   } 
  
}