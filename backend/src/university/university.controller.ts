import { Controller, Get, Query } from '@nestjs/common';
import { UniversityService } from './university.service';
@Controller('university')
export class UniversityController {
  constructor(private UniversityService: UniversityService) {}

  @Get('')
  getUniversitiesList(@Query() query) {
    return this.UniversityService.getAllUniversities(query);
  }
}
