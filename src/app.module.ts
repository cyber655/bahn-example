import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { databaseConfig } from './config/database.config.service';
import User from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig.getTypeOrmConfig()),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
