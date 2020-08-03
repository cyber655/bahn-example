import {
  Controller,
  Get,
  Body,
  HttpCode,
  ParseIntPipe,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import User from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Post()
  @HttpCode(201)
  insertUser(@Body() user: User): Promise<User> {
    return this.userService.insertOrUpdateUser(user);
  }

  @Put()
  updateUser(@Body() user: User): Promise<User> {
    return this.userService.insertOrUpdateUser(user);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findUserById(id);
  }
}
