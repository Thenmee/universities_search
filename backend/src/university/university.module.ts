import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';
@Module({
  imports: [HttpModule], // imported axios/HttpModule
  controllers: [UniversityController], // UniversityController added
  providers: [UniversityService], // UniversityService added
})
export class UniversityModule {}
