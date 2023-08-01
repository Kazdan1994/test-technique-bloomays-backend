import { Injectable } from '@nestjs/common';
import Airtable from 'airtable';
import { Mission } from '../missions/entities/mission.entity';

@Injectable()
export class AirtableService {
  private readonly airtable: any;

  constructor() {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;

    if (!apiKey || !baseId) {
      throw new Error('Airtable API key or base ID is missing or invalid.');
    }

    this.airtable = new Airtable({ apiKey }).base(baseId);
  }

  async getAllRecords(tableName: string) {
    return this.airtable(tableName)
      .select()
      .all()
      .then((records) => records.map((record) => record.fields));
  }

  async getRecord(tableName: string, recordId: string) {
    return new Promise((resolve, reject) =>
      this.airtable(tableName)
        .select({
          filterByFormula: `id = '${recordId}'`,
        })
        .firstPage((err, records) => {
          if (err) {
            reject(err);
            return;
          }

          if (records.length === 0) {
            reject(new Error('Record not found.'));
            return;
          }

          resolve(records[0].fields);
        }),
    );
  }

  format(fields: Mission) {
    const mission = {
      id: fields.id,
      label: fields.label,
      beginDate: fields.beginDate,
      endDate: fields.endDate,
      missionType: fields.missionType,
      freelance: null,
    };

    if (fields.freelance) {
      mission.freelance = {
        id: fields['id (from freelance)'][0],
        firstname: fields['firstname (from freelance)'][0],
        lastname: fields['lastname (from freelance)'][0],
        email: fields['email (from freelance)'][0],
      };
    }
    return mission;
  }
}
