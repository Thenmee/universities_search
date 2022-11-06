import { HttpService } from '@nestjs/axios';
import {
  ForbiddenException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { map, catchError } from 'rxjs';

@Injectable()
export class UniversityService {
  constructor(private http: HttpService) {}

  public getAllUniversities(query) {
    const cityName = query.name ? query.name : '';
    return this.http
      .get(
        `http://universities.hipolabs.com/search?name=${cityName.toLowerCase()}`,
      )
      .pipe(
        map((res) => {
          const uniqueData = res.data.reduce(
            (acc, x) =>
              acc.concat(
                acc.find((y) => y.name === x.name)
                  ? []
                  : [
                      {
                        country: x.country,
                        name: x.name,
                      },
                    ],
              ),
            [],
          );
          const sortedData = uniqueData.sort((a: any, b: any) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
          if (query.order && query.order.toLowerCase() === 'desc') {
            return sortedData.reverse();
          }
          if (query.order && query.order.toLowerCase() === 'asc') {
            return sortedData;
          } else {
            throw new BadRequestException('Order param must be Asc or Desc');
          }
        }),
      )
      .pipe(
        catchError((e) => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
