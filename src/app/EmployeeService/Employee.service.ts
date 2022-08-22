import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class EmployeeService{    
    
    employeeURL:string='api/employee';
    constructor(private _http:HttpClient){}

    getEmployeeByApi():Observable<any[]>{
        return this._http.get<any[]>(this.employeeURL);
     }


    employee:any[]=[
        {empid:1,firstname:"Harry", middlename:"J", lastname:"Potter", email:"Harry@G.com", gender:"Male", contactno:3454323233, dob:"3/3/2000", address:"New York", emptype:"permanent", pincode:345435},
            {empid:1,firstname:"Bruno", middlename:"T", lastname:"Mars", email:"Bruno@G.com", gender:"Male", contactno:35444323233, dob:"5/2/2000", address:"London", emptype:"permanent", pincode:385435},
            {empid:1,firstname:"Taylor", middlename:"J", lastname:"Swift", email:"Taylor@G.com", gender:"Female", contactno:5454323233, dob:"2/3/2000", address:"New York", emptype:"permanent", pincode:545435},
            {empid:1,firstname:"Rihana", middlename:"D", lastname:"Costa", email:"Rihana@G.com", gender:"Female", contactno:7354323233, dob:"8/3/2000", address:"India", emptype:"temporary", pincode:115435},
            {empid:1,firstname:"David", middlename:"J", lastname:"Guetta", email:"David@G.com", gender:"Male", contactno:544323233, dob:"7/3/2000", address:"US", emptype:"temporary", pincode:345435},
      ]


      getEmpDet(id:string):any{
          return this.employee.find(e=>e.empid==id)
      }
      showEmpDet():any{
        return this.employee;
    }
   
}