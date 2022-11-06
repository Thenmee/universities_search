import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UniversityService } from './university/university.service';
import { UniversityController } from './university/university.controller';
import { UniversityModule } from './university/university.module';

@Module({
  imports: [HttpModule, UniversityModule],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class AppModule {}
