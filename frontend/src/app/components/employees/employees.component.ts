import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
// import { NgForm } from '@angular/forms';
// import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor( private employeeService: EmployeeService) { }

  ngOnInit() {
  }

}
