import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { GetUserQuery } from './get-user.query';

@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createUser(name: string, email: string): Promise<void> {
    const command = new CreateUserCommand(name, email);
    await this.commandBus.execute(command);
  }

  async getUser(id: string): Promise<any> {
    const query = new GetUserQuery(id);
    return this.queryBus.execute(query);
  }
}
