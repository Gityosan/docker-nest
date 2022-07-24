import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestObject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  attr1: string;
}
