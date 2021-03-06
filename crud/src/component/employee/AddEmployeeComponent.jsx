import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddEmployeeComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
            email: ''
        }
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        ApiService.addEmployee(employee)
            .then(res => {
                this.setState({message : 'Employee added successfully.'});
                this.props.history.push('/');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Employee</h2>
                <form>
                <div className="form-group">
                    <label>ID:</label>
                    <input type="text" placeholder="id" name="id" className="form-control" value={this.state.id} onChange={this.onChange}/>
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

export default AddEmployeeComponent;
