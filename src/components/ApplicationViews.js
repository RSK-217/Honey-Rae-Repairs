import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers"> <CustomerList /></Route>

            <Route path="/employees"> <EmployeeList /></Route>

            <Route path="/servicetickets"> <TicketList /></Route>
        </>
    )
}