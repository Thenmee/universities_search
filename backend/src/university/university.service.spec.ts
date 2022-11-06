import { Test, TestingModule } from '@nestjs/testing';
import { UniversityService } from './university.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { UniversityController } from './university.controller';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';
describe('UniversityService', () => {
  let service: UniversityService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [UniversityController],
      providers: [UniversityService],
    }).compile();

    service = module.get<UniversityService>(UniversityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('getAllUniversities', () => {
    it('should call service.getAllUniversities()', (done) => {
      const data = [
        {
          country: 'Egypt',
          name: 'American University in Cairo',
        },
        {
          country: 'Egypt',
          name: 'Cairo University',
        },
        {
          country: 'Egypt',
          name: 'German University in Cairo',
        },
      ];
      service
        .getAllUniversities({
          name: 'cairo',
          order: 'asc',
        })
        .subscribe((res) => {
          expect(res).toEqual(data);
          done();
        });
    });
  });
});
