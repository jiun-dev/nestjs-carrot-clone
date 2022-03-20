import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { Users } from 'src/entity/user.entity';
import { User } from 'src/common/decorator/user.decorator';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login-request.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService) { }

  @Post()
  async postUsers(@Body() body: CreateUserDto) {
    await this.usersService.postUsers(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentUser(@User() user: Users) {
    console.log(user);
    return user;
  }


  @Post('login')
  async logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogin(data);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
