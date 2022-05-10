package pl.pawlak.pawel.userlist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.pawlak.pawel.userlist.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
