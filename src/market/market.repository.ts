import { Market } from "src/entity/market.entity";
import { Users } from "src/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateMarketDto } from "./dto/create-market.dto";

@EntityRepository(Market)
export class MarketRepository extends Repository<Market> {

    async createMarket(createMarketDto: CreateMarketDto, user: Users): Promise<Market> {

        const { title, content, price } = createMarketDto;

        const market = this.create({
            title, content, price, user
        });
        await this.save(market);

        return market;
    }
}