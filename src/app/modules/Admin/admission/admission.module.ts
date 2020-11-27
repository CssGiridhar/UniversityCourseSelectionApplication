import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdmissionComponent } from './add-admission/add-admission.component';



@NgModule({
  declarations: [AddAdmissionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AddAdmissionComponent
  ]
})
export class AdmissionModule { }
