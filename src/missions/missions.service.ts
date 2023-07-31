import { Injectable } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { AirtableService } from '../airtable/airtable.service';

@Injectable()
export class MissionsService {
  private readonly airtableTableName: string;

  constructor(private readonly airtableService: AirtableService) {
    this.airtableTableName = 'missions';
  }

  async create(createMissionDto: CreateMissionDto) {
    return this.airtableService.createRecord(
      this.airtableTableName,
      createMissionDto,
    );
  }

  findAll() {
    return this.airtableService.getAllRecords(this.airtableTableName);
  }

  findOne(id: string) {
    return this.airtableService.getRecord(this.airtableTableName, id);
  }

  update(id: string, updateMissionDto: UpdateMissionDto) {
    return this.airtableService.updateRecord(
      this.airtableTableName,
      id,
      updateMissionDto,
    );
  }

  remove(id: string) {
    return this.airtableService.deleteRecord(this.airtableTableName, id);
  }
}
