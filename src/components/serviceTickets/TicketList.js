import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()
    
    const DeleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
        .then(updateTickets(tickets => tickets.filter(ticket => ticket.id !== id)))
    }
    
   
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
            .then(res => res.json())
            .then((ticketArray) => {
                updateTickets(ticketArray)
            })},
        []
    )

    return (
        <>
            <button onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                        <p className={ticket.emergency ? `emergency` : `ticket`}>
                        {ticket.emergency ? "🚑" : "" } <Link to={`/serviceTickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}&nbsp;
                        <button onClick={() => {
                            DeleteTicket(ticket.id)
            
                            }}>Delete</button></p>
                    </div>   
                        
                    }
                )
            }
        </>
    )
}



