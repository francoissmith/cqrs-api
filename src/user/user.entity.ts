// import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
  ) {}
}
