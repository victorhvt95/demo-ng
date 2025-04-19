import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CompanyContract from '@domain/contracts/CompanyContract';
import Company from '@domain/entities/company';
import { ApiRestaurantContext } from '@shared/http/ApiRestaurantContext';
import { HttpService } from '@shared/http/http.service';
import { QueryParamsBuilder } from '@shared/http/QueryParamsBuilder';
import { ListRequest } from '@shared/list-query/ListRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService implements CompanyContract {
  constructor(private http: HttpService) {}

  getCompanyList(
    request: ListRequest<Company>
  ): Observable<ListResponse<Company>> {
    let params = QueryParamsBuilder.build(request);
    return this.http.get<ListResponse<Company>>('', { params: params });
  }
  create(request: Company): Observable<Company> {
    throw new Error('Method not implemented.');
  }
}
