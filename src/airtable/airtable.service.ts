import { Injectable } from '@nestjs/common';
import Airtable from 'airtable';

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
    return this.airtable(tableName).select().all();
  }

  async getRecord(tableName: string, recordId: string) {
    return this.airtable(tableName).find(recordId);
  }

  async createRecord(tableName: string, data: any) {
    return this.airtable(tableName).create(data);
  }

  async updateRecord(tableName: string, recordId: string, data: any) {
    return this.airtable(tableName).update(recordId, data);
  }

  async deleteRecord(tableName: string, recordId: string) {
    return this.airtable(tableName).destroy(recordId);
  }
}
