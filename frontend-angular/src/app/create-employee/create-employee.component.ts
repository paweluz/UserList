import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = {};

  constructor(private employeeServer: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitEmployee();
  }

  private submitEmployee() {
    this.employeeServer.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeesList();
    }, error =>
      console.info(error));
  }

  goToEmployeesList() {
    this.router.navigate(['/employees'])
  }
}
