import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/EmployeeService/Employee.service';

@Injectable()

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css'],
  providers:[EmployeeService]
})
export class EmployeedetailComponent {

      dataSource:any[]=[];
      constructor(private _router:Router, private Emp:EmployeeService, private _route:ActivatedRoute){}

        ngOnInit(){
        this.Emp.getEmployeeByApi().subscribe((empdata)=>{
          this.dataSource= empdata;
        })
      }

      displayedColumns: string[] = ['empid', 'firstname','email', 'contactno',  'actions'];

      viewEmp(row:any){
        this._router.navigate(['/app-view-employee',row.empid])
      }

      updateEmp(row:any){
        this._router.navigate(['/app-update-employee',{empid:row.empid}]);
      }

     
  

  }




