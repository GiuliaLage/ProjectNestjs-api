import { Module} from "@nestjs/common";
import {loginController} from './login.app.controller'
import {loginService} from './login.app.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import {login}  from './login.entity'
import {loginDatabase} from './login.app.database';

@Module({
    imports: [TypeOrmModule.forFeature([login])],
    controllers: [loginController],
    providers: [loginService, loginDatabase],
})

export class loginModule{

}