import { InjectionToken } from '@angular/core';
import Company from '@domain/entities/company';
import { ListRequest } from '@shared/list-query/ListRequest';
import { Observable } from 'rxjs';

export default interface CompanyContract {
  getCompanyList(
    request: ListRequest<Company>
  ): Observable<ListResponse<Company>>;
  create(request: Company): Observable<Company>;
}

export const COMPANY_CONTRACT = new InjectionToken<CompanyContract>(
  'COMPANY_CONTRACT'
);
