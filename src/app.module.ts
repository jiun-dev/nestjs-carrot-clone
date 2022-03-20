import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dirname } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Users } from './entity/user.entity';
import { UsersModule } from './users/users.module';
import { MarketModule } from './market/market.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'test',
      database: 'test',
      entities: [__dirname + '/entity/**/*.entity{.ts,.js}',],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Users]),
    AuthModule,
    UsersModule,
    MarketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
