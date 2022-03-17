import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcrypt'
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "src/entity/user.entity";

@Injectable()
export class AuthService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {

    }

    async validateUser(email: string, password: string) {
        const user = await this.usersRepository.findOne({
            where: email
        });
        console.log(email, password, user);
        if (!user) {
            return null;
        }
        const result = await bcrypt.compare(password, user.password);
        if (result) {
            const { password, ...useWithoutPassword } = user; // 처음보는 문법, user객체에서 password를 제외한 나머지를 useWithoutPassword에 담음 delete uesr.password와 동일
            return useWithoutPassword;
        }
        return null;
    }
}