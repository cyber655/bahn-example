import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { UserRepository } from './repositories/UserRepository';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) {}

  public findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  public insertOrUpdateUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  public findUserById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }
}
