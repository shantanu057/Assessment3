import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    EmployeedetailComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,MatTableModule,MatButtonModule
  ],
  exports:[EmployeedetailComponent,ViewEmployeeComponent,UpdateEmployeeComponent,EmployeeFormComponent]
})
export class EmployeeModule { }
