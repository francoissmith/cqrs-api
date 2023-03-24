import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() data: { name: string; email: string },
  ): Promise<void> {
    const { name, email } = data;
    await this.userService.createUser(name, email);
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<any> {
    return this.userService.getUser(id);
  }
}
