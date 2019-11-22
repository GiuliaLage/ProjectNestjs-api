import { Controller, Request, Post, UseGuards, Get, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {AuthService} from './auth.service';



@Controller()
export class AuthController {
    constructor(private readonly AuthService : AuthService){}
    
 /*   @Post('auth')
  public Auth(@Request() req)
  {     
      return this.AuthService.validateUser(req.username , req.password); 
  }

  */

 @Post('auth')
 public Auth(@Query('id') username , password)
 {     
     return this.AuthService.validateUser(username, password); 
 }
 

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}