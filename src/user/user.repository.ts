import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private readonly users: UserEntity[] = [];

  async create(data: { name: string; email: string }): Promise<UserEntity> {
    const { name, email } = data;
    const id = Math.random().toString(36).substr(2, 9); // Generate a random ID
    const user = new UserEntity(id, name, email);
    this.users.push(user);
    return user;
  }

  async findOne(id: string): Promise<UserEntity> {
    return this.users.find((user) => user.id === id);
  }
}
