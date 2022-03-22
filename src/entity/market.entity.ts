import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entity";

@Entity()
export class Market {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: "title", length: 30 })
    title: string;

    @Column('varchar', { name: 'content', length: 300 })
    content: string;

    @Column('varchar', { name: 'price', length: 100, select: false })
    price: string;

    @ManyToOne(type => Users, user => user.markets, { eager: false })
    user: Users;
}

