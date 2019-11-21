import { Injectable } from "@nestjs/common";
import {loginDatabase} from './login.app.database'; 

@Injectable()
export class loginService{

    constructor(private readonly loginDatabase : loginDatabase){}

    public getUsers(){
        return this.loginDatabase.findAll();
    }
 
}
