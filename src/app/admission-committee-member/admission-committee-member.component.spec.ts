import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionCommitteeMemberComponent } from './admission-committee-member.component';

describe('AdmissionCommitteeMemberComponent', () => {
  let component: AdmissionCommitteeMemberComponent;
  let fixture: ComponentFixture<AdmissionCommitteeMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionCommitteeMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionCommitteeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
