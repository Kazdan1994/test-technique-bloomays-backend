import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AirtableService } from './airtable.service';

describe('AirtableService', () => {
  let service: AirtableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirtableService],
      imports: [ConfigModule.forRoot()],
    }).compile();

    service = module.get<AirtableService>(AirtableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
