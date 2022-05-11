import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { EmployeeForm } from "./Employees/EmployeeForm"
import { TicketList } from "./serviceTickets/TicketList"
import { TicketForm } from "./serviceTickets/TicketForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers"><CustomerList /></Route>

            <Route exact path="/Employees"><EmployeeList /></Route>

            <Route path="/Employees/create"><EmployeeForm /></Route>

            <Route exact path="/serviceTickets"><TicketList /></Route>

            <Route path="/serviceTickets/create"><TicketForm /></Route>
        </>
    )
}