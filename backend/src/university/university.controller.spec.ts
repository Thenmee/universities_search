import { Test, TestingModule } from '@nestjs/testing';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';
import { HttpModule } from '@nestjs/axios';
import { of } from 'rxjs';
describe('UniversityController', () => {
  let controller: UniversityController;
  let universityService: UniversityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [UniversityController],
      providers: [UniversityService], // UniversityService added
    }).compile();

    controller = module.get<UniversityController>(UniversityController);
    universityService = module.get<UniversityService>(UniversityService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  // describe('getUniversitiesList', () => {
  //   it('should call getAllUniversities function', async () => {
  //     controller.getUniversitiesList({
  //       name: 'cairo',
  //       order: 'asc',
  //     });
  //     expect(universityService.getAllUniversities).toHaveBeenCalled();
  //   });
  // });
  describe('getUniversitiesList', () => {
    it('should call service.getAllUniversities()', async () => {
      const spy = jest.spyOn(universityService, 'getAllUniversities');
      await controller.getUniversitiesList({
        name: 'london',
        order: 'asc',
      });
      expect(spy).toHaveBeenCalled();
    });
  });
  // describe('getUniversitiesList', () => {
  //   it('should  return list of universities ordered and not douplicated  ', async (done) => {
  //     // const expactedResponse: any = [
  //     //   {
  //     //     country: 'Egypt',
  //     //     name: 'American University in Cairo',
  //     //   },
  //     //   {
  //     //     country: 'Egypt',
  //     //     name: 'Cairo University',
  //     //   },
  //     //   {
  //     //     country: 'Egypt',
  //     //     name: 'German University in Cairo',
  //     //   },
  //     // ];
  //     const result: AxiosResponse = {
  //       data: [
  //         {
  //           country: 'Egypt',
  //           name: 'American University in Cairo',
  //         },
  //         {
  //           country: 'Egypt',
  //           name: 'Cairo University',
  //         },
  //         {
  //           country: 'Egypt',
  //           name: 'German University in Cairo',
  //         },
  //       ],
  //       status: 200,
  //       statusText: 'OK',
  //       headers: {},
  //       config: {},
  //     };
  //     // jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(result));

  //     const spy = jest.spyOn(universityService, 'getAllUniversities');
  //     // const isPlaying = await universityService
  //     //   .getAllUniversities({
  //     //     name: 'cairo',
  //     //     order: 'asc',
  //     //   });
  //     return universityService
  //       .getAllUniversities({
  //         name: 'cairo',
  //         order: 'asc',
  //       })
  //       .then((bar) => {
  //         expect(bar).toEqual('bar');
  //       });
  //     // console.log(result, spy);
  //     expect(spy).toHaveBeenCalled();
  //     // expect(isPlaying).toBe(result);

  //     spy.mockReset();
  //     spy.mockRestore();
  //     // jest
  //     //   .spyOn(universityService, 'getAllUniversities')
  //     //   .mockImplementationOnce(() => of(result));

  //     // await universityService
  //     //   .getAllUniversities({
  //     //     name: 'cairo',
  //     //     order: 'asc',
  //     //   })
  //     //   .then((response) => {
  //     //     console.log(response);
  //     //     expect(response).toEqual(expactedResponse);
  //     //     done();
  //     //   });
  //     //  response.pipe((res) => res);
  //   });
  // });
  // describe('getUniversitiesList', () => {
  //   it('should  return list of universities ordered and not douplicated  ', async () => {
  //     const expactedResponse = [
  //       {
  //         country: 'Egypt',
  //         name: 'American University in Cairo',
  //       },
  //       {
  //         country: 'Egypt',
  //         name: 'Cairo University',
  //       },
  //       {
  //         country: 'Egypt',
  //         name: 'German University in Cairo',
  //       },
  //     ];
  //     const response = await universityService.getAllUniversities({
  //       name: 'cairo',
  //       order: 'asc',
  //     });
  //     const json = response.toPromise();
  //     console.log(response);
  //     expect(response);
  //   });
  // });
});
