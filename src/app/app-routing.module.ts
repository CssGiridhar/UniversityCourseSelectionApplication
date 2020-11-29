import { AdmissionHomeComponent } from './modules/Admin/admission/admission-home/admission-home.component';
import { ShowAllAdmissionsByDateComponent } from './modules/Admin/admission/show-all-admissions-by-date/show-all-admissions-by-date.component';
import { ShowAllAdmissionsByCourseIdComponent } from './modules/Admin/admission/show-all-admissions-by-course-id/show-all-admissions-by-course-id.component';
import { DeleteAdmissionComponent } from './modules/Admin/admission/delete-admission/delete-admission.component';
import { AddAdmissionComponent } from './modules/Admin/admission/add-admission/add-admission.component';
import { HomeComponent } from './modules/Admin/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateAdmissionComponent } from './modules/Admin/admission/update-admission/update-admission.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admission',component:AdmissionHomeComponent},
  {path:'add-admission',component:AddAdmissionComponent},
  {path:'update-admission',component:UpdateAdmissionComponent},
  {path:'delete-admission',component:DeleteAdmissionComponent},
  {path:'show-admissionsbycid',component:ShowAllAdmissionsByCourseIdComponent},
  {path:'show-admissionsbydate',component:ShowAllAdmissionsByDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[AdmissionHomeComponent,AddAdmissionComponent,HomeComponent,UpdateAdmissionComponent,DeleteAdmissionComponent,ShowAllAdmissionsByCourseIdComponent,ShowAllAdmissionsByDateComponent]