import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/common/decorator/user.decorator';
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

  async getAllMarket(
    @User() user: Users
  ): Promise<Market[]> {
    const query = this.marketRepository.createQueryBuilder('market');

    query.where('market.userId = :userId', { userId: user.id });

    const markets = await query.getMany();

    return markets;
  }

  async deleteMarket(id: number, @User() user: Users): Promise<void> {
    const result = await this.marketRepository.delete({ id, user });

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
}
