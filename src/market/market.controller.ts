import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { MarketService } from './market.service';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { User } from 'src/common/decorator/user.decorator';
import { Users } from 'src/entity/user.entity';

@UseGuards(JwtAuthGuard)
@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) { }

  @Post()
  async createMarket(
    @Body() createMarketDto: CreateMarketDto,
    @User() user: Users) {
    return this.marketService.createMarket(createMarketDto, user);
  }

  @Get()
  findAll(@User() user: Users) {
    return this.marketService.getAllMarket(user);
  }

  @Delete(':id')
  deleteMarket(@Param('id', ParseIntPipe) id, @User() user: Users): Promise<void> {
    return this.marketService.deleteMarket(id, user);
  }

}
