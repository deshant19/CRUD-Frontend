import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditEmployeeComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
            email: ''
        }
        this.saveEmployee = this.saveEmployee.bind(this);
        this.loadEmployee = this.loadEmployee.bind(this);
    }

    componentDidMount() {
        this.loadEmployee();
    }

    loadEmployee() {
        ApiService.fetchEmployeeById(window.localStorage.getItem("id"))
            .then((res) => {
                let employee = res.data;
                this.setState({
                id: employee.id,
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        ApiService.editEmployee(employee)
            .then(res => {
                this.setState({message : 'Employee updated successfully.'});
                this.props.history.push('/');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Employee</h2>
                <form>

                    <div className="form-group">
                        <label>ID:</label>
                        <input type="text" placeholder="id" name="id" className="form-control" readOnly={true} defaultValue={this.state.id}/>
                    </div>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditEmployeeComponent;
