import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsersModule} from './users/users.module'

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '426153',
      database: 'sulong',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }), 
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

