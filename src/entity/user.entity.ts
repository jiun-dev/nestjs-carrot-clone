import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'email', unique: true, length: 30 })
    email: string;

    @Column('varchar', { name: 'nickname', length: 30 })
    name: string;

    @Column('varchar', { name: 'password', length: 100, select: false })
    password: string;
}
