import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../services/employee.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number = -1;
  employee: Employee = {};
  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
    }, error => console.info(error))
  }

}
