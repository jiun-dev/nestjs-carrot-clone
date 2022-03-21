import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMarketDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsNumber()
    @IsNotEmpty()
    price: string;
}

