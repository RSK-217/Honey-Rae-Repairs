import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { Employee } from "./Employees/Employee"
import { EmployeeForm } from "./Employees/EmployeeForm"
import { TicketList } from "./serviceTickets/TicketList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { Ticket } from "./serviceTickets/Ticket"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers"><CustomerList /></Route>

            <Route exact path="/Employees"><EmployeeList /></Route>

            <Route path="/Employees/:employeeId(\d+)"><Employee /></Route>

            <Route path="/Employees/create"><EmployeeForm /></Route>

            <Route exact path="/serviceTickets"><TicketList /></Route>

            <Route path="/serviceTickets/create"><TicketForm /></Route>

            <Route exact path="/serviceTickets/:ticketId(\d+)"><Ticket /></Route>
        </>
    )
}