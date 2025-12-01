import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Crud {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  age: number;

  @Column()
  class: string;
}
