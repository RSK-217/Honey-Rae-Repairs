import React from "react"
import { CustomerList } from "./Customers/CustomerList.js"
import { EmployeeList } from "./Employees/EmployeeList.js"

export const Repairs = () => {
    return (
        <>
        <h1>Honey Rae's Repair shop</h1>
        <CustomerList />
        <br></br>
        <EmployeeList />
        </>
    )
}