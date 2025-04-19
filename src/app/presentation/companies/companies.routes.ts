import { Routes } from '@angular/router';
import { GetCompanyListComponent } from './get-company-list/get-company-list.component';
import { CreateCompanyComponent } from './create-company/create-company.component';

export const routes: Routes = [
  {
    path: '',
    component: GetCompanyListComponent,
  },
  {
    path: 'create',
    component: CreateCompanyComponent,
  },
];
