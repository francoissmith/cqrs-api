import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserRepository } from './user.repository';
import { CreateUserCommand } from './create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: CreateUserCommand): Promise<void> {
    const { name, email } = command;
    await this.userRepository.create({ name, email });
  }
}
