import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompanyListComponent } from './get-company-list.component';

describe('GetCompanyListComponent', () => {
  let component: GetCompanyListComponent;
  let fixture: ComponentFixture<GetCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCompanyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
