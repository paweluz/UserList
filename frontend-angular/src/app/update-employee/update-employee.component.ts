import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {Employee} from "../model/employee";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = {};
  id: number = -1;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.info(error));
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployeesList();
    }, error => console.info(error))
  }

  goToEmployeesList() {
    this.router.navigate(['/employees'])
  }
}
