package pl.pawlak.pawel.userlist.controller;

import org.springframework.web.bind.annotation.*;
import pl.pawlak.pawel.userlist.model.Employee;
import pl.pawlak.pawel.userlist.repository.EmployeeRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping("/employee")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }


}
