import { forwardRef, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "src/entity/user.entity";
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./jwt/constants";
import { JwtStrategy } from "./jwt/jwt.strategy";
import { LocalSerializer } from "./local.serializer";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt', session: false }), // 토큰 기반 로그인 시 false
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1y' },
        }),
        forwardRef(() => UsersModule),
        TypeOrmModule.forFeature([Users]),
    ],
    providers: [AuthService, LocalStrategy, LocalSerializer, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule { };