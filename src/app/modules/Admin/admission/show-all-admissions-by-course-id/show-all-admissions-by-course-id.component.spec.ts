import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllAdmissionsByCourseIdComponent } from './show-all-admissions-by-course-id.component';

describe('ShowAllAdmissionsByCourseIdComponent', () => {
  let component: ShowAllAdmissionsByCourseIdComponent;
  let fixture: ComponentFixture<ShowAllAdmissionsByCourseIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllAdmissionsByCourseIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllAdmissionsByCourseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
