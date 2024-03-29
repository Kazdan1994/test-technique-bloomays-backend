// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AirtableModule } from './airtable/airtable.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MissionsModule } from './missions/missions.module';

@Module({
  imports: [ConfigModule.forRoot(), AirtableModule, MissionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
