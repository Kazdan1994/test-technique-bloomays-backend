import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Freelance')
export class Freelance {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;
}
