import { Test, TestingModule } from '@nestjs/testing';
import { MissionsService } from './missions.service';
import { ConfigModule } from '@nestjs/config';
import { AirtableModule } from '../airtable/airtable.module';

describe('MissionsService', () => {
  let service: MissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissionsService],
      imports: [ConfigModule.forRoot(), AirtableModule],
    }).compile();

    service = module.get<MissionsService>(MissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
