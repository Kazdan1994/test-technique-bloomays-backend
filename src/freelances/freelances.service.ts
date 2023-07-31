import { Injectable } from '@nestjs/common';
import { AirtableService } from '../airtable/airtable.service';

@Injectable()
export class FreelancesService {
  private readonly airtableTableName: string;

  constructor(private readonly airtableService: AirtableService) {
    this.airtableTableName = 'freelances';
  }

  findAll() {
    return this.airtableService.getAllRecords(this.airtableTableName);
  }

  findOne(id: string) {
    return this.airtableService.getRecord(this.airtableTableName, id);
  }
}
