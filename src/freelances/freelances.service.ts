import { Injectable } from '@nestjs/common';
import { AirtableService } from '../airtable/airtable.service';
import { CreateFreelanceDto } from './dto/create-freelance.dto';
import { UpdateFreelanceDto } from './dto/update-freelance.dto';

@Injectable()
export class FreelancesService {
  private readonly airtableTableName: string;

  constructor(private readonly airtableService: AirtableService) {
    this.airtableTableName = 'missions';
  }

  create(createFreelanceDto: CreateFreelanceDto) {
    return this.airtableService.createRecord(
      this.airtableTableName,
      createFreelanceDto,
    );
  }

  findAll() {
    return this.airtableService.getAllRecords(this.airtableTableName);
  }

  findOne(id: string) {
    return this.airtableService.getRecord(this.airtableTableName, id);
  }

  update(id: string, updateFreelanceDto: UpdateFreelanceDto) {
    return this.airtableService.updateRecord(
      this.airtableTableName,
      id,
      updateFreelanceDto,
    );
  }

  remove(id: string) {
    return this.airtableService.deleteRecord(this.airtableTableName, id);
  }
}
