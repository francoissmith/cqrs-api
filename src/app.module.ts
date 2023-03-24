import { Module } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CreateUserHandler } from './user/create-user.handler';
import { GetUserHandler } from './user/get-user.handler';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    CreateUserHandler,
    GetUserHandler,
    CommandBus,
    QueryBus,
  ],
})
export class AppModule {}
