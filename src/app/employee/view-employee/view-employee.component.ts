import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/EmployeeService/Employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
  providers:[EmployeeService]
})
export class ViewEmployeeComponent {

  EmpId:string|null='';
  EmpFname:string='';
  EmpMname:string='';
  EmpLname:string='';
  EmpAge:string='';
  EmpGender:string='';
  EmpAddress1:string='';
  EmpSalary:string='';
  EmpPincode:string='';
  EmpContact:string='';
  EmpEmail:string='';


  constructor(private emp:EmployeeService, private _route:ActivatedRoute) { }

  ngOnInit(){
    this.EmpId=this._route.snapshot.paramMap.get('id');
    this.EmpId=this.emp.getEmpDet(this.EmpId as string).empid;
     this.EmpFname=this.emp.getEmpDet(this.EmpId as string).firstname;
     this.EmpMname=this.emp.getEmpDet(this.EmpId as string).middlename;
     this.EmpLname=this.emp.getEmpDet(this.EmpId as string).lastname;
     this.EmpAge=this.emp.getEmpDet(this.EmpId as string).age;
     this.EmpGender=this.emp.getEmpDet(this.EmpId as string).gender;
     this.EmpAddress1=this.emp.getEmpDet(this.EmpId as string).address1;
     this.EmpSalary=this.emp.getEmpDet(this.EmpId as string).salary;
     this.EmpPincode=this.emp.getEmpDet(this.EmpId as string).pincode;
     this.EmpEmail=this.emp.getEmpDet(this.EmpId as string).email;
     this.EmpContact=this.emp.getEmpDet(this.EmpId as string).contactno;
     
  }
}
