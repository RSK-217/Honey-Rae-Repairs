import React from "react"
import { CustomerList } from "./Customers/CustomerList.js"
import { EmployeeList } from "./Employees/EmployeeList.js"
import { TicketList } from "./serviceTickets/TicketList.js"

export const Repairs = () => {
    return (
        <>
        <h1>Honey Rae's Repair shop</h1>
        
        <h2>Customer List</h2>
        <CustomerList />
        
        <h2>Employee List</h2>
        <EmployeeList />

        <h2>Service Tickets</h2>
        <TicketList />
        </>
    )
}