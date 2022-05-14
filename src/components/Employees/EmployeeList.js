import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [specialties, setSpecial] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/Employees")
            .then(res => res.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })},
        []
    )
                     
    useEffect(() => {
       const justSpecialties = employees.map(emp => emp.specialty)
       setSpecial(justSpecialties.join(", "))
    }, [employees])

    return (
        <>
           
            <button onClick={() => history.push("/Employees/create")}>Hire Employee</button>
            
            <div>
                Specialties: { specialties }
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/Employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}