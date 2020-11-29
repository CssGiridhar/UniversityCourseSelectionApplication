import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdmissionComponent } from './add-admission/add-admission.component';
import { UpdateAdmissionComponent } from './update-admission/update-admission.component';
import { DeleteAdmissionComponent } from './delete-admission/delete-admission.component';
import { ShowAllAdmissionsByDateComponent } from './show-all-admissions-by-date/show-all-admissions-by-date.component';
import { ShowAllAdmissionsByCourseIdComponent } from './show-all-admissions-by-course-id/show-all-admissions-by-course-id.component';
import { AdmissionHomeComponent } from './admission-home/admission-home.component';



@NgModule({
  declarations: [AddAdmissionComponent, UpdateAdmissionComponent, DeleteAdmissionComponent, ShowAllAdmissionsByDateComponent, ShowAllAdmissionsByCourseIdComponent, AdmissionHomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AddAdmissionComponent
  ]
})
export class AdmissionModule { }
