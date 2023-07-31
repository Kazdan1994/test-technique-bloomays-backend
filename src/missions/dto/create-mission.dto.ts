import { Freelance } from '../../freelances/entities/freelance.entity';

export class CreateMissionDto {
  id: string;
  label: string;
  beginDate: Date;
  endDate: Date;
  missionType: string;
  freelance: Freelance;
}
