import { Controller, Get, Param } from '@nestjs/common';
import { FreelancesService } from './freelances.service';

@Controller('freelances')
export class FreelancesController {
  constructor(private readonly freelancesService: FreelancesService) {}

  @Get()
  findAll() {
    return this.freelancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freelancesService.findOne(id);
  }
}
