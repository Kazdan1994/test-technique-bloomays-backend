import { Module } from '@nestjs/common';
import { FreelancesController } from './freelances.controller';
import { FreelancesService } from './freelances.service';
import { AirtableModule } from '../airtable/airtable.module';

@Module({
  controllers: [FreelancesController],
  providers: [FreelancesService],
  imports: [AirtableModule],
})
export class FreelancesModule {}
