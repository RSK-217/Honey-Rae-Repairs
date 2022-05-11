import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    const [employee, update] = useState({
        name: "",
        specialty: ""
    });

    const history = useHistory()

    const saveEmployee = (e) => {
        e.preventDefault()
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty
        }

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch ("http://localhost:8088/Employees", fetchOptions)
        .then(response => response.json())
        .then(() => {
                history.push("/employees")
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                    onChange={
                        (e) => {
                           const copy = {...employee}
                           copy.name = e.target.value
                           update(copy) 
                        }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="name"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                    onChange={
                        (e) => {
                           const copy = {...employee}
                           copy.specialty = e.target.value
                           update(copy) 
                        }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="specialty"
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    )
}