
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

 

  async findOne(username: string): Promise<any> {
   
    return this.UserRepository.find({
      where:{Usuario : username}});
  }
 
}