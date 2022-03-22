import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}

