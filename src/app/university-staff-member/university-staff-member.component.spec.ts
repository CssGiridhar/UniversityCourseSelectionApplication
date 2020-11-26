import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityStaffMemberComponent } from './university-staff-member.component';

describe('UniversityStaffMemberComponent', () => {
  let component: UniversityStaffMemberComponent;
  let fixture: ComponentFixture<UniversityStaffMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityStaffMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityStaffMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
