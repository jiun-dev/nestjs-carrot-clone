import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entity';
import { AuthModule } from 'src/auth/auth.module';
// import { Users } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }