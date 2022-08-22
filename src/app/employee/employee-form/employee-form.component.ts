import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent{

  gen: any[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
  ];

  dep: any[] = [
    {value: 'permanent', viewValue: 'permanent'},
    {value: 'temporary', viewValue: 'temporary'},

  ];

  savePerson(form:NgForm){
    console.log(form.control)
}

  onButtonClick()
  {
    alert("Your Details Inserted Successfully")
  }

}
