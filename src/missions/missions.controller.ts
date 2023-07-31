import { Controller, Get, Param } from '@nestjs/common';
import { MissionsService } from './missions.service';

@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Get()
  findAll() {
    return this.missionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.missionsService.findOne(id);
  }
}
