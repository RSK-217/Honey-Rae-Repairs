import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const TicketForm = () => {
    const [ticket, update] = useState({
        description: "",
        emergency: false
    });

    const history = useHistory()

    const saveTicket = (e) => {
        e.preventDefault()
        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1,
            dateCompleted: ""
        }

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }

        return fetch ("http://localhost:8088/serviceTickets", fetchOptions)
        .then(response => response.json())
        .then(() => {
                history.push("/serviceTickets")
        })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                    onChange={
                        (e) => {
                           const copy = {...ticket}
                           copy.description = e.target.value
                           update(copy) 
                        }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={(e) => {
                            const copy = {...ticket}
                            copy.emergency = e.target.checked
                            update(copy) 
                         }} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
    )
}