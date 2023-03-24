import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from './user.repository';
import { GetUserQuery } from './get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(query: GetUserQuery): Promise<any> {
    const { id } = query;
    return this.userRepository.findOne(id);
  }
}
