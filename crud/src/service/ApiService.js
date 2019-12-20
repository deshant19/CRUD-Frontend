import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/service/employee';

class ApiService {

    fetchEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    fetchEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    addEmployee(employee) {
        return axios.post(""+EMPLOYEE_API_BASE_URL, employee);
    }

    editEmployee(employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employee.id, employee);
    }

}

export default new ApiService();