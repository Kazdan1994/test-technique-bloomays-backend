import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Freelance } from '../../freelances/entities/freelance.entity';

@Entity('Mission')
export class Mission {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  label: string;

  @Column()
  beginDate: Date;

  @Column()
  endDate: Date;

  @Column()
  missionType: string;

  @OneToMany(() => Freelance, (freelance) => freelance.id)
  freelance: Freelance;
}
