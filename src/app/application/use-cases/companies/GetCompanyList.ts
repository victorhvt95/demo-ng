import { Inject, Injectable } from '@angular/core';
import CompanyContract, {
  COMPANY_CONTRACT,
} from '@domain/contracts/CompanyContract';
import Company from '@domain/entities/company';
import { ListRequest } from '@shared/list-query/ListRequest';
import { Observable } from 'rxjs';

@Injectable()
export default class GetCompanyList {
  constructor(@Inject(COMPANY_CONTRACT) private repository: CompanyContract) {}

  execute(request: ListRequest<Company>): Observable<ListResponse<Company>> {
    return this.repository.getCompanyList(request);
  }
}
