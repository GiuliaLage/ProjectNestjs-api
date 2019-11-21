import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class login{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uuid: string;

    @Column({nullable: false})
    email : string;

    @Column()
    password : string;

    @Column({type: "timestamp"})
    created_at : string

}