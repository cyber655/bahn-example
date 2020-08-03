import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { UserRepository } from './repositories/UserRepository';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) {}

  public getHello(): string {
    return 'Hello World!';
  }

  public insertUser(user: User) {
    this.userRepository.insert(user);
  }
}
