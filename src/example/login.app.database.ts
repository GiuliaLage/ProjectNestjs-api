import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { login } from './login.entity';

@Injectable()
export class loginDatabase{
    constructor(
        @InjectRepository(login)
        private readonly loginRepository: Repository<login>,    
    ){}

    findAll(): Promise<login[]>{

        return this.loginRepository.find(); 
    }

}