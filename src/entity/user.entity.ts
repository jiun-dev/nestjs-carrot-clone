import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Market } from "./market.entity";
import * as bcrypt from 'bcrypt'
@Entity()
export class Users {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: "email", unique: true, length: 30 })
    email: string;

    @Column('varchar', { name: 'name', length: 30 })
    name: string;

    @Column('varchar', { name: 'password', length: 100, select: false })
    password: string;

    @OneToMany(type => Market, market => market.user, { eager: true })
    markets: Market[];

    async validatePassword(password: string): Promise<boolean> {
        let isValid = await bcrypt.compare(password, this.password);
        return isValid;
    }

}
