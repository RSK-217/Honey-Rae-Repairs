import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export const Employee = () => {
   const [ employee, setEmployee ] = useState({})
   const { employeeId } = useParams()

   useEffect(
       () => {
           fetch(`http://localhost:8088/Employees/${employeeId}`)
           .then(response => response.json())
           .then((data) => {
                setEmployee(data)
           })
       },
       [ employeeId ] 

   )

    return (
      <>
        <h2>Employee Details</h2>
        <section className="employee">
            <h3 className="employee_number">Employee #{employee.id}</h3>
            <div className="employee_name">{employee.name}</div>
            <div className="employee_specialty">{employee.specialty}</div>
        </section>
      </>
    )
  }