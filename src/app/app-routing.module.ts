import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailComponent } from './employee/employeedetail/employeedetail.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';

const routes: Routes = [
  {path:'app-viewEmployee/:id',component:ViewEmployeeComponent},
  {path:'app-updateEmployee',component:UpdateEmployeeComponent},
  {path:'app-employeedetail',component:EmployeedetailComponent},
  // {path:'',component:EmployeedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
