import { Injectable } from '@nestjs/common';
import { AirtableService } from '../airtable/airtable.service';
import { Mission } from './entities/mission.entity';

@Injectable()
export class MissionsService {
  private readonly airtableTableName: string;

  constructor(private readonly airtableService: AirtableService) {
    this.airtableTableName = 'missions';
  }

  findAll(): Promise<Mission[]> {
    return new Promise((resolve, reject) =>
      this.airtableService
        .getAllRecords(this.airtableTableName)
        .then((records: Mission[]) => {
          resolve(records.map((record) => this.airtableService.format(record)));
        })
        .catch((err) => {
          reject(err);
        }),
    );
  }

  findOne(id: string): Promise<Mission> {
    return new Promise((resolve, reject) =>
      this.airtableService
        .getRecord(this.airtableTableName, id)
        .then((fields: Mission) => {
          const mission = this.airtableService.format(fields);

          resolve(mission);
        })
        .catch((err) => {
          reject(err);
        }),
    );
  }
}
