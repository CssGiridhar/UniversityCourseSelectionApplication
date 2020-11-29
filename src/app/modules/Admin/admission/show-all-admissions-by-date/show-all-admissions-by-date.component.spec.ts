import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllAdmissionsByDateComponent } from './show-all-admissions-by-date.component';

describe('ShowAllAdmissionsByDateComponent', () => {
  let component: ShowAllAdmissionsByDateComponent;
  let fixture: ComponentFixture<ShowAllAdmissionsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllAdmissionsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllAdmissionsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
