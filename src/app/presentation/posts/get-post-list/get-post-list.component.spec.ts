import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPostList } from './get-post-list.component';

describe('GetPostList', () => {
  let component: GetPostList;
  let fixture: ComponentFixture<GetPostList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPostList],
    }).compileComponents();

    fixture = TestBed.createComponent(GetPostList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
