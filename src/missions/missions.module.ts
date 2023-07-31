import { Module } from '@nestjs/common';
import { MissionsController } from './missions.controller';
import { MissionsService } from './missions.service';
import { AirtableModule } from '../airtable/airtable.module';

@Module({
  controllers: [MissionsController],
  providers: [MissionsService],
  imports: [AirtableModule],
})
export class MissionsModule {}
