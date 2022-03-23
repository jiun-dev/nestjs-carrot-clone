import { Module } from '@nestjs/common';
import { MarketService } from './market.service';
import { MarketController } from './market.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { MarketRepository } from './market.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MarketRepository]), AuthModule],
  controllers: [MarketController],
  providers: [MarketService]
})
export class MarketModule { }
