import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('users') //Nome da tabel

class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column()
    name!: string;
    @Column()
    email!: string
    @Column()
    role!: string
    @Column()
    password_hash!: string
    @Column()
    active!: boolean
    @CreateDateColumn()
    created_at!: Date
    @UpdateDateColumn()
    updated_at!: Date
    
}

export default User;