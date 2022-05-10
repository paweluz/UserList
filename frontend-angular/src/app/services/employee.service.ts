import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private listOfEmployeesURL = "employees"
  private createEmployeeURL = "employee"
  readonly baseURL = "/api/v1/"

  constructor(private httpClient: HttpClient) {
  }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}${this.listOfEmployeesURL}`)
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}${this.createEmployeeURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}${this.createEmployeeURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee>{
    return this.httpClient.put(`${this.baseURL}${this.createEmployeeURL}/${id}`, employee);
  }

  deleteEmployee(id?: number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}${this.createEmployeeURL}/${id}`);
  }
}
