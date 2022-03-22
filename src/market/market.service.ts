import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Market } from 'src/entity/market.entity';
import { Users } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { MarketRepository } from './market.repository';

@Injectable()
export class MarketService {
  constructor(
    @InjectRepository(MarketRepository)
    private marketRepository: MarketRepository,
  ) { }

  async createMarket(createMarketDto: CreateMarketDto, user: Users) {

    return this.marketRepository.createMarket(createMarketDto, user);
  }

  findAll() {
    return `This action returns all market`;
  }

  findOne(id: number) {
    return `This action returns a #${id} market`;
  }

  update(id: number, updateMarketDto: UpdateMarketDto) {
    return `This action updates a #${id} market`;
  }

  remove(id: number) {
    return `This action removes a #${id} market`;
  }
}
