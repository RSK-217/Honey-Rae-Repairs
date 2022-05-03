import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [specialties, setSpecial] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
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
            <div>
                Specialties: { specialties }
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}