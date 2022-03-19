import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "src/entity/user.entity";
import { AuthService } from "./auth.service";
import { LocalSerializer } from "./local.serializer";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [
        PassportModule.register({ session: true }), // 토큰 기반 로그인 시 false
        TypeOrmModule.forFeature([Users]),
    ],
    providers: [AuthService, LocalStrategy, LocalSerializer],
})
export class AuthModule { };