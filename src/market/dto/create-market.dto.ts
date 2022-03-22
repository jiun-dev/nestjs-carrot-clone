import { IsNotEmpty, IsString } from "class-validator";

export class CreateMarketDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    price: string;
}

