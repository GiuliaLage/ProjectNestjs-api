
import { Injectable } from '@nestjs/common';
import {User} from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
 
    constructor(
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>,    
    ){}

 

  async findOne(username: string): Promise<User[] | undefined> {
    
    return //aqui vai a query para buscar o usuario pelo username 
  }


  
}