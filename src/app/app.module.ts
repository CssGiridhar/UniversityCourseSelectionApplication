import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmissionCommitteeMemberComponent } from './admission-committee-member/admission-committee-member.component';
import { UniversityStaffMemberComponent } from './university-staff-member/university-staff-member.component';
import { CourseComponent } from './course/course.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    AdmissionCommitteeMemberComponent,
    UniversityStaffMemberComponent,
    CourseComponent,
    ApplicantComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
